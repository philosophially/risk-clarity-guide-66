
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { issuesData } from '../../data/issuesData';

interface PlaybookItemProps {
  issue: typeof issuesData[0];
  activeIssueId: string | null;
  onClick: (issueId: string) => void;
}

const PlaybookItem: React.FC<PlaybookItemProps> = ({ 
  issue,
  activeIssueId,
  onClick
}) => {
  return (
    <div 
      className={`mb-3 p-3 rounded-lg cursor-pointer ${activeIssueId === issue.id ? 'bg-blue-50 border border-blue-200' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}
      onClick={() => onClick(issue.id)}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{issue.title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          issue.riskLevel === 'high' ? 'bg-red-100 text-red-800' : 
          issue.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-green-100 text-green-800'
        }`}>
          {issue.riskLevel.charAt(0).toUpperCase() + issue.riskLevel.slice(1)}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-700">{issue.summary}</p>
        <p className="text-xs text-gray-500 mt-1">{issue.location}</p>
      </div>
      <div className="text-sm">
        <div className="font-medium mb-1">Recommended Action:</div>
        <div className="bg-blue-50 p-2 rounded text-sm">
          <p>Request modification based on playbook position.</p>
        </div>
      </div>
    </div>
  );
};

interface PlaybookListProps {
  issues: typeof issuesData;
  title: string;
  activeIssueId: string | null;
  onIssueClick: (issueId: string) => void;
}

const PlaybookList: React.FC<PlaybookListProps> = ({
  issues,
  title,
  activeIssueId,
  onIssueClick
}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  if (issues.length === 0) return null;
  
  return (
    <div className="mb-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-slate-900 mb-2 hover:bg-slate-100 rounded px-1 py-0.5">
          <span>{title} ({issues.length})</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-slate-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-500" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          {issues.map(issue => (
            <PlaybookItem
              key={issue.id}
              issue={issue}
              activeIssueId={activeIssueId}
              onClick={onIssueClick}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PlaybookList;
