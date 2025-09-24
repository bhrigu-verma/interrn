'use client'

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    // Your actual WhatsApp number
    const phoneNumber = '919752000546'; // Indian number with country code
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGmail = () => {
    // Your actual email
  const email = 'service@shoutotb.com';
    const subject = 'Inquiry about your services';
    const body = 'Hello,\n\nI would like to know more about your services.\n\nBest regards';
    const gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <style jsx>{`
        .floating-contact-container {
          position: fixed;
          right: 20px;
          top: 55%;
          /* nudge up by ~8px to avoid overlap with up-arrow */
          transform: translateY(calc(-50% - 8px));
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .floating-main-button {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          border: none;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(243, 60, 82, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }

        .floating-main-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(243, 60, 82, 0.4);
        }

        .floating-main-button.open {
          background: linear-gradient(135deg, #666, #888);
        }

        .floating-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .floating-options.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .floating-option-button {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
          position: relative;
        }

        .whatsapp-button {
          background: linear-gradient(135deg, #25D366, #128C7E);
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4);
        }

        .gmail-button {
          background: linear-gradient(135deg, #EA4335, #DB4437);
        }

        .gmail-button:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 18px rgba(234, 67, 53, 0.4);
        }

        .floating-option-button::before {
          content: attr(data-tooltip);
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .floating-option-button:hover::before {
          opacity: 1;
        }

        .floating-option-button::after {
          content: '';
          position: absolute;
          right: 52px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid rgba(0, 0, 0, 0.8);
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .floating-option-button:hover::after {
          opacity: 1;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-contact-container {
            right: 15px;
            /* maintain small upward nudge on mobile */
            transform: translateY(calc(-50% - 6px));
          }

          .floating-main-button {
            width: 50px;
            height: 50px;
          }

          .floating-option-button {
            width: 44px;
            height: 44px;
          }

          .floating-option-button::before {
            right: 55px;
            font-size: 11px;
            padding: 4px 8px;
          }

          .floating-option-button::after {
            right: 47px;
            border-left-width: 5px;
            border-top-width: 3px;
            border-bottom-width: 3px;
          }
        }

        @media (max-width: 480px) {
          .floating-contact-container {
            right: 10px;
          }
        }
      `}</style>

      <div className="floating-contact-container">
        <div className={`floating-options ${isOpen ? 'open' : ''}`}>
          <button
            className="floating-option-button gmail-button"
            onClick={handleGmail}
            data-tooltip="Send Email"
            aria-label="Send Email"
          >
            <Image 
              src="/assets/img/gmail.png" 
              alt="Gmail" 
              width={24} 
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </button>
          <button
            className="floating-option-button whatsapp-button"
            onClick={handleWhatsApp}
            data-tooltip="WhatsApp Chat"
            aria-label="WhatsApp Chat"
          >
            <Image 
              src="/assets/img/Whatsapp.png" 
              alt="WhatsApp" 
              width={24} 
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </button>
        </div>
        
        <button
          className={`floating-main-button ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        >
          {isOpen ? <X size={24} /> : <Plus size={24} />}
        </button>
      </div>
    </>
  );
};

export default FloatingContactButton;