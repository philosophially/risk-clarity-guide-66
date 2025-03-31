
export const issuesData = [
  {
    id: 'issue-1',
    title: 'Subcontractor Use Without Approval',
    location: 'Section 3 - Services',
    riskLevel: 'medium',
    summary: 'The contract allows Service Provider to engage subcontractors without Client approval, which could impact quality control and security compliance.',
    playbookPosition: 'Company policy requires prior written approval for all subcontractors. Revise clause to require Client approval before any subcontractors are engaged. Ensure subcontractors are bound by same terms and conditions, especially regarding confidentiality and data security.'
  },
  {
    id: 'issue-2',
    title: 'Extended Payment Terms',
    location: 'Section 4 - Pricing and Payment Terms',
    riskLevel: 'high',
    summary: 'Net 60 payment terms exceed our standard 30-day payment policy and the 2% monthly interest rate on late payments is above our acceptable threshold.',
    playbookPosition: 'Our payment terms should not exceed Net 30 days. Late payment interest should not exceed 1% per month or the maximum rate permitted by law, whichever is less. Revise payment terms to align with company policy.'
  },
  {
    id: 'issue-3',
    title: 'Uncapped Expense Reimbursement',
    location: 'Section 4 - Pricing and Payment Terms',
    riskLevel: 'medium',
    summary: 'The contract allows unlimited expense reimbursement without requiring prior approval, creating potential budget control issues.',
    playbookPosition: 'All expenses exceeding $500 individually or $2,000 in aggregate per month must require prior written approval. Revise clause to include expense cap and approval process. Request detailed expense reporting with receipts for all reimbursable expenses.'
  },
  {
    id: 'issue-4',
    title: 'Lengthy Cure Period',
    location: 'Section 5 - Term and Termination',
    riskLevel: 'medium',
    summary: 'The 30-day cure period for material breaches is longer than our standard policy and could expose the company to prolonged risk in case of serious violations.',
    playbookPosition: 'Standard cure period for material breaches should be 15 days maximum. For data security or confidentiality breaches, termination should be immediate with no cure period. Revise termination clause to reduce cure period and add specific provisions for critical breaches.'
  },
  {
    id: 'issue-5',
    title: 'IP Rights Carve-Out',
    location: 'Section 6 - Intellectual Property Rights',
    riskLevel: 'high',
    summary: 'Service Provider retains rights to potentially valuable components and only grants a limited license. This could restrict our ability to modify or transfer the deliverables.',
    playbookPosition: 'All work produced under the contract should be owned exclusively by the Client as work-for-hire. Service Provider should only retain rights to pre-existing materials clearly identified in an exhibit. The license to any retained items should be perpetual, irrevocable, and transferable. Revise to ensure broader ownership rights for Client.'
  },
  {
    id: 'issue-6',
    title: 'Limited Confidentiality Period',
    location: 'Section 7 - Confidentiality',
    riskLevel: 'low',
    summary: 'Confidentiality obligations survive for only 3 years, which may not be sufficient to protect long-term sensitive information.',
    playbookPosition: 'Confidentiality obligations should survive for at least 5 years, and for trade secrets and personally identifiable information, the obligations should survive indefinitely. Revise to extend confidentiality period or make it perpetual for sensitive information.'
  },
  {
    id: 'issue-7',
    title: 'Inadequate GDPR Compliance',
    location: 'Section 8 - Data Protection and Security',
    riskLevel: 'high',
    summary: 'The data protection clause lacks specific references to GDPR requirements, which is essential for EU operations and data transfers.',
    playbookPosition: 'For any contract involving EU personal data, explicit GDPR compliance language is required, including data processing agreements, breach notification within 24 hours, and acknowledgment of data subject rights. Add GDPR-specific language and include a Data Processing Addendum as an exhibit to the contract.'
  },
  {
    id: 'issue-8',
    title: 'Limited Indemnification Scope',
    location: 'Section 9 - Indemnification',
    riskLevel: 'low',
    summary: 'The indemnification clause is narrowly defined and may not fully protect our interests in all potential scenarios.',
    playbookPosition: 'Indemnification should explicitly cover data breaches, privacy violations, and regulatory penalties resulting from Service Provider's actions. Expand indemnification scope to include these scenarios and ensure vendor assumes responsibility for regulatory compliance failures.'
  },
  {
    id: 'issue-9',
    title: 'Low Liability Cap',
    location: 'Section 10 - Limitations of Liability',
    riskLevel: 'medium',
    summary: 'The liability cap is limited to 12 months of fees, which may be insufficient for significant damages or breaches.',
    playbookPosition: 'Liability cap should be at least 2x the total contract value. For data breaches or IP infringement claims, there should be no cap on liability. Negotiate higher liability limits, especially for high-risk scenarios involving sensitive data or compliance issues.'
  },
  {
    id: 'issue-10',
    title: 'Unfavorable Jurisdiction',
    location: 'Section 12.3 - Governing Law and Jurisdiction',
    riskLevel: 'low',
    summary: 'The governing law and exclusive jurisdiction in California may create legal complexities and additional costs in case of disputes.',
    playbookPosition: 'Prefer governing law and jurisdiction in our home state/country when possible. If not feasible, negotiate for neutral jurisdiction or arbitration as alternative dispute resolution method. Revise to more favorable jurisdiction or include arbitration clause with mutually agreed location.'
  }
];
