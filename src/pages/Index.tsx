
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
    <div className="min-h-screen bg-m3-background font-sans">
      <header className="bg-m3-primary text-m3-onPrimary p-4 no-print">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-medium">Contract Risk Analysis</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">John Smith</span>
            <div className="h-9 w-9 rounded-full bg-m3-primaryContainer text-m3-onPrimaryContainer flex items-center justify-center text-sm">
              JS
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="mb-4 no-print">
          <h2 className="text-lg font-medium">Master Services Agreement - ABC Corporation</h2>
          <p className="text-sm text-m3-onSurfaceVariant">Last updated: June 1, 2023</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-200px)]">
          {/* Contract document - 60% width on large screens */}
          <div className="w-full lg:w-3/5">
            <ContractDocument 
              activeIssueId={activeIssueId} 
              hoveredIssueId={hoveredIssueId}
            />
          </div>
          
          {/* Issues sidebar - 40% width on large screens */}
          <div className="w-full lg:w-2/5 no-print">
            <div className="bg-m3-surface h-full overflow-hidden flex flex-col rounded-xl m3-elevation-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <div className="bg-m3-primary p-4 text-m3-onPrimary">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Contract Issues</h2>
                    <TabsList className="bg-m3-primaryContainer">
                      <TabsTrigger 
                        value="issues" 
                        className="data-[state=active]:bg-m3-primary data-[state=active]:text-m3-onPrimary"
                      >
                        Issues
                      </TabsTrigger>
                      <TabsTrigger 
                        value="playbook" 
                        className="data-[state=active]:bg-m3-primary data-[state=active]:text-m3-onPrimary"
                      >
                        Playbook
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <p className="text-sm text-m3-onPrimary opacity-80">
                    {issuesData.length} issues identified in this document
                  </p>
                </div>

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
                        <h2 className="text-xl font-medium text-m3-onSurface mb-2">{activeIssue.title}</h2>
                        <span className={`risk-badge-${activeIssue.riskLevel} mb-4 inline-block`}>
                          {activeIssue.riskLevel === 'high' ? 'High Risk' : activeIssue.riskLevel === 'medium' ? 'Medium Risk' : 'Low Risk'}
                        </span>
                        <div className="mb-6">
                          <h3 className="text-sm font-medium text-m3-onSurfaceVariant mb-1">Issue Summary</h3>
                          <p className="text-m3-onSurface mb-2">{activeIssue.summary}</p>
                          <p className="text-xs text-m3-onSurfaceVariant">{activeIssue.location}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-medium text-m3-onSurfaceVariant mb-2">Playbook Position</h3>
                          <div className="bg-m3-primaryContainer p-4 rounded-lg text-m3-onPrimaryContainer">
                            <p className="text-sm">{activeIssue.playbookPosition}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-m3-onSurfaceVariant mb-2">Recommended Action</h3>
                          <div className="bg-m3-tertiaryContainer p-4 rounded-lg text-m3-onTertiaryContainer">
                            <p className="text-sm">Request modification of this clause to limit liability to direct damages and cap at 12 months of fees paid.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-m3-onSurfaceVariant">Select an issue to view playbook details</p>
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
