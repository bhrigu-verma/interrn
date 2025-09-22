'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ item interface
interface FAQItem {
  question: string;
  answer: string;
}

// Component props interface
interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="faq-section" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-5">
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                {title}
              </h2>
            </div>
            
            <div className="faq-wrapper">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item"
                  style={{
                    marginBottom: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleExpanded(index)}
                    style={{
                      padding: '24px 28px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: expandedItems.has(index) ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#ffffff',
                      margin: '0',
                      lineHeight: '1.4',
                      paddingRight: '16px'
                    }}>
                      {faq.question}
                    </h4>
                    <div style={{
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: expandedItems.has(index) ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      {expandedItems.has(index) ? (
                        <ChevronUp size={20} color="#ffffff" />
                      ) : (
                        <ChevronDown size={20} color="#ffffff" />
                      )}
                    </div>
                  </div>
                  
                  {expandedItems.has(index) && (
                    <div 
                      className="faq-answer"
                      style={{
                        padding: '0 28px 24px 28px',
                        animation: 'fadeIn 0.3s ease'
                      }}
                    >
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#dddddd',
                        margin: '0'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.12) !important;
        }

        /* Removed the white hover background */
        /* .faq-question:hover {
          background-color: #f8f9fa;
        } */

        @media (max-width: 768px) {
          .faq-section {
            padding: 40px 0 !important;
          }
          
          .section-title h2 {
            font-size: 28px !important;
            margin-bottom: 15px !important;
          }
          
          .faq-question {
            padding: 20px 20px !important;
          }
          
          .faq-answer {
            padding: 0 20px 20px 20px !important;
          }
          
          .faq-question h4 {
            font-size: 15px !important;
            padding-right: 12px !important;
          }
          
          .faq-answer p {
            font-size: 13px !important;
          }
        }

        @media (max-width: 480px) {
          .faq-question {
            padding: 16px 16px !important;
          }
          
          .faq-answer {
            padding: 0 16px 16px 16px !important;
          }
          
          .faq-question h4 {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceFAQ;
