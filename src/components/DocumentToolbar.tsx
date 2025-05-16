
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
    <div className="bg-m3-surfaceVariant text-m3-onSurfaceVariant border-b p-2 flex items-center justify-between no-print">
      <div className="flex items-center">
        <div className="flex items-center space-x-1 mr-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('bold')}
            title="Bold"
            className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
          >
            <Bold size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('italic')}
            title="Italic"
            className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
          >
            <Italic size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onFormatText('underline')}
            title="Underline"
            className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
          >
            <Underline size={20} />
          </Button>
        </div>
        
        <Separator orientation="vertical" className="h-6 mx-2 bg-m3-outline opacity-40" />
        
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onZoomOut}
            title="Zoom Out"
            className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
          >
            <ZoomOut size={20} />
          </Button>
          <span className="text-xs font-medium px-2">{Math.round(zoom * 100)}%</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onZoomIn}
            title="Zoom In"
            className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
          >
            <ZoomIn size={20} />
          </Button>
        </div>
      </div>
      
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrint}
          title="Print Document"
          className="text-m3-onSurfaceVariant hover:bg-m3-primaryContainer hover:text-m3-onPrimaryContainer rounded-full"
        >
          <Printer size={20} />
        </Button>
      </div>
    </div>
  );
};

export default DocumentToolbar;
