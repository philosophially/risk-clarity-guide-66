
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bold, Italic, Underline, ZoomIn, ZoomOut, Printer } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface DocumentToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFormatText: (format: 'bold' | 'italic' | 'underline') => void;
  zoom: number;
}

const DocumentToolbar: React.FC<DocumentToolbarProps> = ({ 
  onZoomIn, 
  onZoomOut, 
  onFormatText,
  zoom 
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 border-b p-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center space-x-1 mr-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('bold')}
            title="Bold"
          >
            <Bold size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('italic')}
            title="Italic"
          >
            <Italic size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('underline')}
            title="Underline"
          >
            <Underline size={18} />
          </Button>
        </div>
        
        <Separator orientation="vertical" className="h-6 mx-2" />
        
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onZoomOut}
            title="Zoom Out"
          >
            <ZoomOut size={18} />
          </Button>
          <span className="text-xs font-medium px-2">{Math.round(zoom * 100)}%</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onZoomIn}
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </Button>
        </div>
      </div>
      
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrint}
          title="Print Document"
        >
          <Printer size={18} />
        </Button>
      </div>
    </div>
  );
};

export default DocumentToolbar;
