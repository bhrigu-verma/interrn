'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  faqs: FAQItem[];
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        .service-faq-section {
          background: #fafafa;
          padding: 5rem 0;
          margin-top: 4rem;
        }

        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .faq-subtitle {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }

        .highlight-text {
          color: #F33C52;
          font-weight: 600;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(243, 60, 82, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 4px 20px rgba(243, 60, 82, 0.1);
        }

        .faq-question {
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(243, 60, 82, 0.02);
        }

        .faq-question-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
          margin-right: 1rem;
        }

        .faq-icon {
          color: #F33C52;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: rgba(243, 60, 82, 0.02);
        }

        .faq-answer.open {
          max-height: 200px;
          padding: 0 1.5rem 1.5rem 1.5rem;
        }

        .faq-answer-text {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
          padding-top: 0.5rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .service-faq-section {
            padding: 3rem 0;
          }

          .faq-container {
            padding: 0 1rem;
          }

          .faq-title {
            font-size: 2rem;
          }

          .faq-question {
            padding: 1.2rem;
          }

          .faq-question-text {
            font-size: 1rem;
          }

          .faq-answer.open {
            max-height: 300px;
            padding: 0 1.2rem 1.2rem 1.2rem;
          }

          .faq-answer-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .faq-title {
            font-size: 1.8rem;
          }

          .faq-question {
            padding: 1rem;
          }

          .faq-question-text {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="service-faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">
              Frequently Asked <span className="highlight-text">Questions</span>
            </h2>
            <p className="faq-subtitle">
              Common questions about our {title} services
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                    {openIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-answer-text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceFAQ;