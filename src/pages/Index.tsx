
import React, { useState } from 'react';
import ContractDocument from '@/components/ContractDocument';
import IssuesSidebar from '@/components/IssuesSidebar';

const ContractReviewPage: React.FC = () => {
  const [activeIssueId, setActiveIssueId] = useState<string | null>(null);

  const handleIssueClick = (issueId: string) => {
    setActiveIssueId(issueId);
  };

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
            <ContractDocument activeIssueId={activeIssueId} />
          </div>
          
          {/* Issues sidebar - 40% width */}
          <div className="w-2/5">
            <IssuesSidebar onIssueClick={handleIssueClick} activeIssueId={activeIssueId} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContractReviewPage;
