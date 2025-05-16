
import React, { useRef, useEffect, useState } from 'react';
import { contractContent } from '../data/contractData';
import DocumentToolbar from './DocumentToolbar';

interface ContractDocumentProps {
  activeIssueId: string | null;
  hoveredIssueId: string | null;
}

const ContractDocument: React.FC<ContractDocumentProps> = ({ activeIssueId, hoveredIssueId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [activeFormats, setActiveFormats] = useState<{
    bold: boolean;
    italic: boolean;
    underline: boolean;
  }>({
    bold: false,
    italic: false,
    underline: false,
  });
  
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2)); // Max zoom: 200%
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5)); // Min zoom: 50%
  };

  const handleFormatText = (format: 'bold' | 'italic' | 'underline') => {
    setActiveFormats(prev => ({
      ...prev,
      [format]: !prev[format]
    }));
  };
  
  useEffect(() => {
    if (activeIssueId && containerRef.current) {
      const element = document.getElementById(activeIssueId);
      if (element) {
        // Using setTimeout to ensure the scroll happens after render
        setTimeout(() => {
          if (containerRef.current) {
            const elementTop = element.offsetTop;
            containerRef.current.scrollTop = elementTop - 200; // Increased padding to 200px (100px extra)
          }
        }, 100);
      }
    }
  }, [activeIssueId]);

  const getHighlightClass = (issueId: string, riskLevel: string) => {
    if (activeIssueId === issueId) {
      return `highlight-${riskLevel}-active`;
    } else if (hoveredIssueId === issueId) {
      return `highlight-${riskLevel}-hover`;
    }
    return '';
  };

  // Compute document style classes based on active formats
  const documentStyleClasses = () => {
    const classes = ['contract-content'];
    if (activeFormats.bold) classes.push('font-bold');
    if (activeFormats.italic) classes.push('italic');
    if (activeFormats.underline) classes.push('underline');
    return classes.join(' ');
  };

  return (
    <div className="bg-m3-surface rounded-xl m3-elevation-2 h-full overflow-hidden flex flex-col">
      <DocumentToolbar 
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFormatText={handleFormatText}
        zoom={zoom}
      />
      
      <div 
        className="flex-1 overflow-y-auto p-8" 
        ref={containerRef}
      >
        <div 
          className={`max-w-3xl mx-auto ${documentStyleClasses()}`}
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
        >
          <h1 className="text-2xl font-medium mb-6 text-m3-onSurface">MASTER SERVICES AGREEMENT</h1>
          
          {/* Render the contract content from the data */}
          {contractContent.map((section) => (
            <div key={section.id} className="mb-8">
              <h2>{section.title}</h2>
              {section.content.map((item, index) => {
                if (item.type === 'paragraph') {
                  if (item.issueId) {
                    return (
                      <p 
                        key={index} 
                        id={item.issueId} 
                        className={getHighlightClass(item.issueId, item.riskLevel)}
                      >
                        {item.text}
                      </p>
                    );
                  }
                  return <p key={index}>{item.text}</p>;
                } else if (item.type === 'list') {
                  return (
                    <ol key={index}>
                      {item.items.map((listItem, listIndex) => {
                        if (listItem.issueId) {
                          return (
                            <li 
                              key={listIndex}
                              id={listItem.issueId}
                              className={getHighlightClass(listItem.issueId, listItem.riskLevel)}
                            >
                              {listItem.text}
                            </li>
                          );
                        }
                        return <li key={listIndex}>{listItem.text}</li>;
                      })}
                    </ol>
                  );
                } else if (item.type === 'heading') {
                  return <h3 key={index}>{item.text}</h3>;
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractDocument;
