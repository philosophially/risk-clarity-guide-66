
import React, { useRef, useEffect } from 'react';
import { contractContent } from '../data/contractData';

interface ContractDocumentProps {
  activeIssueId: string | null;
  hoveredIssueId: string | null;
}

const ContractDocument: React.FC<ContractDocumentProps> = ({ activeIssueId, hoveredIssueId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeIssueId && containerRef.current) {
      const element = document.getElementById(activeIssueId);
      if (element) {
        // Scroll to the element with some padding
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        containerRef.current.scrollTo({
          top: y - containerRef.current.offsetTop,
          behavior: 'smooth'
        });
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

  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full overflow-y-auto" ref={containerRef}>
      <div className="max-w-3xl mx-auto contract-content">
        <h1 className="text-2xl font-bold mb-6 text-slate-900">MASTER SERVICES AGREEMENT</h1>
        
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
  );
};

export default ContractDocument;
