
import React from 'react';
import IssueCard from './IssueCard';
import { issuesData } from '../../data/issuesData';

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
  if (issues.length === 0) return null;
  
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-slate-900 mb-2">{title}</h3>
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
    </div>
  );
};

export default IssuesList;
