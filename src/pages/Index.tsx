
import React, { useState } from 'react';
import ContractDocument from '@/components/ContractDocument';
import IssuesSidebar from '@/components/issues/IssuesSidebar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { issuesData } from '../data/issuesData';

const ContractReviewPage: React.FC = () => {
  const [activeIssueId, setActiveIssueId] = useState<string | null>(null);
  const [hoveredIssueId, setHoveredIssueId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('issues');

  const handleIssueClick = (issueId: string) => {
    setActiveIssueId(issueId);
  };

  const handleIssueHover = (issueId: string | null) => {
    setHoveredIssueId(issueId);
  };

  // Find the active issue data for the playbook
  const activeIssue = issuesData.find(issue => issue.id === activeIssueId);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Contract Risk Analysis</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">John Smith</span>
            <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center text-sm">
              JS
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Master Services Agreement - ABC Corporation</h2>
          <p className="text-sm text-slate-500">Last updated: June 1, 2023</p>
        </div>

        <div className="flex gap-4 h-[calc(100vh-200px)]">
          {/* Contract document - 60% width */}
          <div className="w-3/5">
            <ContractDocument 
              activeIssueId={activeIssueId} 
              hoveredIssueId={hoveredIssueId}
            />
          </div>
          
          {/* Issues sidebar - 40% width */}
          <div className="w-2/5">
            <div className="bg-slate-50 h-full overflow-hidden flex flex-col rounded-lg shadow-md">
              <div className="bg-slate-800 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Contract Issues</h2>
                  <TabsList className="bg-slate-700">
                    <TabsTrigger value="issues" className="data-[state=active]:bg-blue-600">Issues</TabsTrigger>
                    <TabsTrigger value="playbook" className="data-[state=active]:bg-blue-600">Playbook</TabsTrigger>
                  </TabsList>
                </div>
                <p className="text-sm text-slate-300">
                  {issuesData.length} issues identified in this document
                </p>
              </div>

              <Tabs defaultValue="issues" value={activeTab} onValueChange={setActiveTab} className="w-full h-full overflow-hidden flex flex-col">
                <TabsContent value="issues" className="flex-1 p-0 m-0 overflow-hidden">
                  <IssuesSidebar 
                    onIssueClick={handleIssueClick} 
                    activeIssueId={activeIssueId}
                    onIssueHover={handleIssueHover}
                  />
                </TabsContent>
                
                <TabsContent value="playbook" className="flex-1 p-0 m-0 overflow-auto">
                  <div className="p-6">
                    {activeIssue ? (
                      <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">{activeIssue.title}</h2>
                        <span className={`risk-badge-${activeIssue.riskLevel} mb-4 inline-block`}>
                          {activeIssue.riskLevel === 'high' ? 'High Risk' : activeIssue.riskLevel === 'medium' ? 'Medium Risk' : 'Low Risk'}
                        </span>
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-slate-700 mb-1">Issue Summary</h3>
                          <p className="text-slate-600 mb-2">{activeIssue.summary}</p>
                          <p className="text-xs text-slate-500">{activeIssue.location}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-slate-700 mb-2">Playbook Position</h3>
                          <div className="bg-blue-50 p-4 rounded border border-blue-100">
                            <p className="text-sm">{activeIssue.playbookPosition}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-slate-700 mb-2">Recommended Action</h3>
                          <div className="bg-green-50 p-4 rounded border border-green-100">
                            <p className="text-sm">Request modification of this clause to limit liability to direct damages and cap at 12 months of fees paid.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-slate-500">Select an issue to view playbook details</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContractReviewPage;
