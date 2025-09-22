'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const AIAutomationsDetails = () => {
  const aiAutomationsData: ServiceDetailData = {
    tag: "AI Automation",
    title: "AI Automations",
    tagline: "AI that works while you sleep.",
    description: "We build powerful automations that streamline your customer journeys and daily tasks. Our solutions work 24/7, so your team can focus on what matters most: growth.",
  mascotImage: "/assets/img/aiautomation.png", // Mascot for AI Automations
    services: [
      {
        title: "Customer Journey Automations",
        description: "We build workflows that automate conversations and data capture, ensuring leads are nurtured and sales are tracked without manual effort.",
        icon: ""
      },
      {
        title: "AI-Powered Support",
        description: "We build intelligent chatbots that provide real-time support, answer customer questions, and qualify leads around the clock.",
        icon: ""
      },
      {
        title: "AI-Powered Outbound Calls",
        description: "Our AI agents can handle large volumes of cold calls, engaging prospects to pre-qualify leads and free up your sales team to focus on closing deals.",
        icon: ""
      },
      {
        title: "Real-time Reporting",
        description: "We provide custom dashboards that automatically track your key marketing metrics and give you a live view of your campaigns.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "75%",
        label: "Time Savings"
      },
      {
        value: "24/7",
        label: "Operation Hours"
      },
      {
        value: "300%",
        label: "Efficiency Boost"
      },
      {
        value: "99%",
        label: "Uptime Guarantee"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={aiAutomationsData} />
      <ServiceFAQ
        title="AI Automations - FAQ"
        faqs={[
          { question: 'Can AI automations integrate with our CRM?', answer: 'Yes - we integrate automations with common CRMs and provide custom connectors when necessary.' },
          { question: 'How do you handle data privacy?', answer: 'We follow best practices for data security and only collect/store data as agreed in the implementation plan.' },
          { question: 'Will automations require maintenance?', answer: 'We provide monitoring and optional maintenance plans to ensure flows continue to run smoothly as your business evolves.' }
        ]}
      />
    </>
  );
};

export default AIAutomationsDetails;