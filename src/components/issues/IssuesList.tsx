
import React, { useState } from 'react';
import IssueCard from './IssueCard';
import { issuesData } from '../../data/issuesData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface IssuesListProps {
  issues: typeof issuesData;
  title: string;
  onIssueClick: (issueId: string) => void;
  activeIssueId: string | null;
  resolvedIssues: string[];
  onResolve: (issueId: string, resolved: boolean) => void;
  onIssueHover: (issueId: string | null) => void;
}

const IssuesList: React.FC<IssuesListProps> = ({
  issues,
  title,
  onIssueClick,
  activeIssueId,
  resolvedIssues,
  onResolve,
  onIssueHover
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
            <IssueCard 
              key={issue.id} 
              issue={issue} 
              onClick={onIssueClick}
              activeIssueId={activeIssueId}
              onResolve={onResolve}
              isResolved={resolvedIssues.includes(issue.id)}
              onMouseEnter={(issueId) => onIssueHover(issueId)}
              onMouseLeave={() => onIssueHover(null)}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default IssuesList;
