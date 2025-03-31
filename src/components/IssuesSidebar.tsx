
import React, { useState } from 'react';
import { issuesData } from '../data/issuesData';
import { ThumbsUp, ThumbsDown, Play, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

interface IssueCardProps {
  issue: typeof issuesData[0];
  onClick: (issueId: string) => void;
  activeIssueId: string | null;
}

interface IssuesSidebarProps {
  onIssueClick: (issueId: string) => void;
  activeIssueId: string | null;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, onClick, activeIssueId }) => {
  const [isResolved, setIsResolved] = useState(false);
  const [thumbsUpActive, setThumbsUpActive] = useState(false);
  const [thumbsDownActive, setThumbsDownActive] = useState(false);
  const [playbookVisible, setPlaybookVisible] = useState(false);
  
  const handleResolve = () => {
    setIsResolved(true);
  };

  const handleThumbsUp = () => {
    setThumbsUpActive(true);
    setThumbsDownActive(false);
  };

  const handleThumbsDown = () => {
    setThumbsDownActive(true);
    setThumbsUpActive(false);
  };

  const togglePlaybook = () => {
    setPlaybookVisible(!playbookVisible);
  };

  return (
    <Card 
      className={`mb-3 overflow-hidden border-l-4 ${
        activeIssueId === issue.id ? 'ring-2 ring-blue-400' : ''
      } ${
        issue.riskLevel === 'high' 
          ? 'border-l-red-500' 
          : issue.riskLevel === 'medium' 
            ? 'border-l-orange-500' 
            : 'border-l-green-500'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 
              className="font-medium text-sm cursor-pointer hover:text-blue-600"
              onClick={() => onClick(issue.id)}
            >
              {issue.title}
            </h3>
            <p className="text-xs text-slate-500">{issue.location}</p>
          </div>
          <span className={`risk-badge-${issue.riskLevel}`}>
            {issue.riskLevel === 'high' ? 'High Risk' : issue.riskLevel === 'medium' ? 'Medium Risk' : 'Low Risk'}
          </span>
        </div>

        <p className="text-sm text-slate-700 mb-3">{issue.summary}</p>

        {isResolved ? (
          <div className="bg-green-50 border border-green-200 p-2 rounded text-sm text-green-800 flex items-center">
            <Check size={16} className="mr-2" />
            Issue resolved by John Smith
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-1 h-8 w-8 ${thumbsUpActive ? 'bg-green-100 text-green-700' : ''}`}
                  onClick={handleThumbsUp}
                >
                  <ThumbsUp size={16} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-1 h-8 w-8 ${thumbsDownActive ? 'bg-red-100 text-red-700' : ''}`}
                  onClick={handleThumbsDown}
                >
                  <ThumbsDown size={16} />
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs h-8"
                onClick={handleResolve}
              >
                Resolve
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="playbook" className="border-0">
                <AccordionTrigger className="py-1 text-xs text-blue-600 hover:text-blue-800 hover:no-underline">
                  Playbook position
                </AccordionTrigger>
                <AccordionContent className="text-xs bg-blue-50 p-2 rounded border border-blue-100">
                  {issue.playbookPosition}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </div>
    </Card>
  );
};

const IssuesSidebar: React.FC<IssuesSidebarProps> = ({ onIssueClick, activeIssueId }) => {
  // Group issues by risk level
  const highRiskIssues = issuesData.filter(issue => issue.riskLevel === 'high');
  const mediumRiskIssues = issuesData.filter(issue => issue.riskLevel === 'medium');
  const lowRiskIssues = issuesData.filter(issue => issue.riskLevel === 'low');

  return (
    <div className="bg-slate-50 h-full overflow-hidden flex flex-col rounded-lg shadow-md">
      <div className="bg-slate-800 p-4 text-white">
        <h2 className="text-lg font-semibold">Contract Issues</h2>
        <p className="text-sm text-slate-300">
          {issuesData.length} issues identified in this document
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {highRiskIssues.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-900 mb-2">High Risk Issues</h3>
            {highRiskIssues.map(issue => (
              <IssueCard 
                key={issue.id} 
                issue={issue} 
                onClick={onIssueClick}
                activeIssueId={activeIssueId}
              />
            ))}
          </div>
        )}
        
        {mediumRiskIssues.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-900 mb-2">Medium Risk Issues</h3>
            {mediumRiskIssues.map(issue => (
              <IssueCard 
                key={issue.id} 
                issue={issue} 
                onClick={onIssueClick}
                activeIssueId={activeIssueId}
              />
            ))}
          </div>
        )}
        
        {lowRiskIssues.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-900 mb-2">Low Risk Issues</h3>
            {lowRiskIssues.map(issue => (
              <IssueCard 
                key={issue.id} 
                issue={issue} 
                onClick={onIssueClick}
                activeIssueId={activeIssueId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IssuesSidebar;
