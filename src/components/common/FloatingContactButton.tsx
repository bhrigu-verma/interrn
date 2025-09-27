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
  const email = 'services@shoutotb.com';
    const subject = 'Inquiry about your services';
    const body = 'Hello,\n\nI would like to know more about your services.\n\nBest regards';
    const gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Hide the floating contact button
  return null;
};

export default FloatingContactButton;