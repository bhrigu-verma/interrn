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
  const whatsappUrl = `https://wa.me/919752000546?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  };

  const handleGmail = () => {
    // Your actual email
    const email = 'shoutotb@gmail.com';
    const subject = 'Inquiry about your services';
    const body = 'Hello,\n\nI would like to know more about your services.\n\nBest regards';
  const gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '32px',
      transform: 'translateY(-50%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: '#EA4335',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          marginBottom: isOpen ? '16px' : '0',
          transition: 'margin 0.2s',
        }}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? <X size={32} color="#fff" /> : <Plus size={32} color="#fff" />}
      </button>
      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          alignItems: 'center',
        }}>
          <button
            onClick={handleWhatsApp}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            aria-label="WhatsApp Chat"
          >
            <Image src="/assets/img/whatsapp.png" alt="WhatsApp" width={48} height={48} />
          </button>
          <button
            onClick={handleGmail}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            aria-label="Gmail"
          >
            <Image src="/assets/img/gmail.png" alt="Gmail" width={48} height={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingContactButton;