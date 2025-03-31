
export const contractContent = [
  {
    id: 'general-info',
    title: '1. GENERAL INFORMATION',
    content: [
      {
        type: 'paragraph',
        text: 'THIS MASTER SERVICES AGREEMENT (the "Agreement") is made and entered into as of the effective date of June 1, 2023 (the "Effective Date"), by and between ABC Corporation, a Delaware corporation with its principal place of business at 123 Main Street, New York, NY 10001 ("Client"), and XYZ Services Inc., a California corporation with its principal place of business at 456 Market Street, San Francisco, CA 94105 ("Service Provider").'
      },
      {
        type: 'paragraph', 
        text: 'This Agreement sets forth the terms and conditions under which Service Provider will provide certain services to Client, as specified in one or more Statements of Work to be executed by the parties.'
      }
    ]
  },
  {
    id: 'preamble',
    title: '2. PREAMBLE',
    content: [
      {
        type: 'paragraph',
        text: 'WHEREAS, Service Provider is in the business of providing software development, implementation, and related services;'
      },
      {
        type: 'paragraph',
        text: 'WHEREAS, Client desires to engage Service Provider to provide certain services in accordance with the terms and conditions of this Agreement;'
      },
      {
        type: 'paragraph',
        text: 'NOW, THEREFORE, in consideration of the mutual covenants and agreements hereinafter set forth, the parties agree as follows:'
      }
    ]
  },
  {
    id: 'services',
    title: '3. SERVICES',
    content: [
      {
        type: 'paragraph',
        text: 'Service Provider shall provide the services specified in each Statement of Work executed by the parties (the "Services"). Each Statement of Work shall include, at a minimum, a description of the Services, the deliverables to be provided by Service Provider, the timeline for performance, and the fees and payment schedule.'
      },
      {
        type: 'paragraph',
        text: 'Service Provider shall perform the Services in a professional and workmanlike manner, in accordance with generally accepted industry standards and practices, and in compliance with all applicable laws, rules, and regulations.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-1',
        riskLevel: 'medium',
        text: 'Service Provider may, at its discretion, engage subcontractors to perform any portion of the Services, provided that Service Provider shall remain fully responsible for all obligations under this Agreement. Client shall have no direct contractual relationship with any subcontractor.'
      }
    ]
  },
  {
    id: 'pricing-terms',
    title: '4. PRICING AND PAYMENT TERMS',
    content: [
      {
        type: 'paragraph',
        text: 'Client shall pay Service Provider the fees specified in each Statement of Work in accordance with the payment schedule set forth therein. All fees are exclusive of applicable taxes, which shall be paid by Client.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-2',
        riskLevel: 'high',
        text: 'Payment terms are net 60 days from the date of invoice. Late payments shall accrue interest at a rate of 2% per month or the maximum rate permitted by law, whichever is less, from the due date until paid in full.'
      },
      {
        type: 'paragraph',
        text: 'Service Provider shall invoice Client for Services performed on a monthly basis, unless otherwise specified in the applicable Statement of Work. Each invoice shall include a detailed description of the Services performed and any expenses to be reimbursed.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-3',
        riskLevel: 'medium',
        text: 'Client shall reimburse Service Provider for all reasonable and documented travel and other out-of-pocket expenses incurred by Service Provider in connection with the performance of the Services, without requiring prior approval from Client.'
      }
    ]
  },
  {
    id: 'term-termination',
    title: '5. TERM AND TERMINATION',
    content: [
      {
        type: 'paragraph',
        text: 'This Agreement shall commence on the Effective Date and shall continue in effect for a period of three (3) years, unless earlier terminated in accordance with this Section 5. Thereafter, this Agreement shall automatically renew for successive one (1) year periods, unless either party provides written notice of non-renewal at least ninety (90) days prior to the end of the then-current term.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-4',
        riskLevel: 'medium',
        text: 'Either party may terminate this Agreement immediately upon written notice to the other party if the other party materially breaches this Agreement, provided that the non-breaching party shall provide the breaching party with a specific description of the breach and thirty (30) days to cure such breach, if curable.'
      },
      {
        type: 'paragraph',
        text: 'Upon termination of this Agreement for any reason, Service Provider shall promptly deliver to Client all work in progress, completed deliverables, and any Client materials in Service Provider\'s possession.'
      }
    ]
  },
  {
    id: 'ip-rights',
    title: '6. INTELLECTUAL PROPERTY RIGHTS',
    content: [
      {
        type: 'paragraph',
        text: 'Client shall own all right, title, and interest in and to all deliverables created by Service Provider specifically for Client under this Agreement ("Client Deliverables"), upon full payment of all fees due hereunder.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-5',
        riskLevel: 'high',
        text: 'Service Provider shall retain all right, title, and interest in and to all pre-existing materials, tools, methodologies, and know-how used to provide the Services, as well as all generic or reusable components developed by Service Provider that are not unique to Client ("Service Provider Materials"). Service Provider hereby grants to Client a non-exclusive, non-transferable license to use the Service Provider Materials solely to the extent necessary to use the Client Deliverables for Client\'s internal business purposes.'
      }
    ]
  },
  {
    id: 'confidentiality',
    title: '7. CONFIDENTIALITY',
    content: [
      {
        type: 'paragraph',
        text: 'Each party acknowledges that it may receive confidential and proprietary information of the other party in connection with this Agreement. Each party shall maintain the confidentiality of the other party\'s confidential information and shall not disclose or use such information except as necessary to perform its obligations under this Agreement.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-6',
        riskLevel: 'low',
        text: 'The confidentiality obligations under this Section 7 shall survive the termination or expiration of this Agreement for a period of three (3) years.'
      }
    ]
  },
  {
    id: 'data-protection',
    title: '8. DATA PROTECTION AND SECURITY',
    content: [
      {
        type: 'paragraph',
        issueId: 'issue-7',
        riskLevel: 'high',
        text: 'Service Provider shall implement and maintain appropriate technical and organizational measures to protect Client\'s data from unauthorized access, use, disclosure, or destruction. Service Provider acknowledges that it may process personal data on behalf of Client and agrees to comply with all applicable data protection laws and regulations.'
      },
      {
        type: 'paragraph',
        text: 'In the event of a security breach involving Client\'s data, Service Provider shall notify Client promptly and take appropriate measures to mitigate the breach and prevent recurrence.'
      }
    ]
  },
  {
    id: 'indemnification',
    title: '9. INDEMNIFICATION',
    content: [
      {
        type: 'paragraph',
        text: 'Service Provider shall indemnify, defend, and hold harmless Client from and against any and all claims, damages, liabilities, costs, and expenses (including reasonable attorneys\' fees) arising out of or related to:'
      },
      {
        type: 'list',
        items: [
          { text: 'Any breach by Service Provider of its obligations, representations, or warranties under this Agreement;' },
          { text: 'Any claim that the Client Deliverables or Service Provider Materials infringe any intellectual property rights of any third party; or' },
          { 
            text: 'Any negligent act or omission, or willful misconduct, of Service Provider or its personnel in connection with the performance of the Services.',
            issueId: 'issue-8',
            riskLevel: 'low'
          }
        ]
      },
      {
        type: 'paragraph',
        text: 'Client shall provide Service Provider with prompt written notice of any claim for which indemnification is sought, cooperate with Service Provider in the defense of such claim, and grant Service Provider sole control over the defense and settlement of such claim.'
      }
    ]
  },
  {
    id: 'limitations',
    title: '10. LIMITATIONS OF LIABILITY',
    content: [
      {
        type: 'paragraph',
        text: 'EXCEPT FOR BREACHES OF CONFIDENTIALITY OBLIGATIONS, INDEMNIFICATION OBLIGATIONS, OR GROSS NEGLIGENCE OR WILLFUL MISCONDUCT, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, REVENUE, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'
      },
      {
        type: 'paragraph',
        issueId: 'issue-9',
        riskLevel: 'medium',
        text: 'THE TOTAL LIABILITY OF EITHER PARTY TO THE OTHER PARTY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID OR PAYABLE BY CLIENT TO SERVICE PROVIDER UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.'
      }
    ]
  },
  {
    id: 'warranty',
    title: '11. WARRANTY AND DISCLAIMER',
    content: [
      {
        type: 'paragraph',
        text: 'Service Provider warrants that the Services will be performed in a professional and workmanlike manner, in accordance with generally accepted industry standards and practices. Service Provider further warrants that the Client Deliverables will materially conform to the specifications set forth in the applicable Statement of Work for a period of ninety (90) days following acceptance by Client.'
      },
      {
        type: 'paragraph',
        text: 'EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION 11, SERVICE PROVIDER MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THE SERVICES OR DELIVERABLES, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.'
      }
    ]
  },
  {
    id: 'misc',
    title: '12. MISCELLANEOUS',
    content: [
      {
        type: 'heading',
        text: '12.1 Force Majeure'
      },
      {
        type: 'paragraph',
        text: 'Neither party shall be liable for any failure or delay in performance of its obligations under this Agreement to the extent such failure or delay is caused by circumstances beyond its reasonable control, including, without limitation, acts of God, natural disasters, terrorist acts, war, civil unrest, labor disputes, or government actions.'
      },
      {
        type: 'heading',
        text: '12.2 Independent Contractor'
      },
      {
        type: 'paragraph',
        text: 'Service Provider is an independent contractor and not an employee, agent, or partner of Client. Nothing in this Agreement shall be construed as creating a joint venture, partnership, agency, or employment relationship between the parties.'
      },
      {
        type: 'heading',
        text: '12.3 Governing Law and Jurisdiction'
      },
      {
        type: 'paragraph',
        issueId: 'issue-10',
        riskLevel: 'low',
        text: 'This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any dispute arising out of or related to this Agreement shall be subject to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California.'
      },
      {
        type: 'heading',
        text: '12.4 Entire Agreement'
      },
      {
        type: 'paragraph',
        text: 'This Agreement, together with any Statements of Work executed hereunder, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous communications, negotiations, and agreements, whether oral or written.'
      }
    ]
  }
];
