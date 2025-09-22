'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const WhatsAppMarketingDetails = () => {
  const whatsappMarketingData: ServiceDetailData = {
    tag: "WhatsApp Marketing",
    title: "WhatsApp Marketing",
    tagline: "The fastest way to your customers' hearts.",
    description: "Connect with your customers on a personal level and turn conversations into conversions. We build automated, high-impact marketing campaigns on WhatsApp to help you engage with your audience and drive sales directly.",
  mascotImage: "/assets/img/whatsapp-mascot.png", // Use a mascot that visually represents WhatsApp marketing
    services: [
      {
        title: "Automated Chatbots",
        description: "We create chatbots that can handle customer support, answer common questions, and guide users through your sales funnel.",
        icon: ""
      },
      {
        title: "Broadcasts & Ads",
        description: "We run targeted click-to-chat ad campaigns and broadcast timely promotions and offers to your customer base.",
        icon: ""
      },
      {
        title: "WhatsApp Funnels & CRM Integration",
        description: "We build automated funnels that nurture leads and guide them to a sale. We also integrate with your CRM to ensure every conversation is tracked and managed, turning your WhatsApp channel into a powerful sales engine.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "85%",
        label: "Open Rate"
      },
      {
        value: "300%",
        label: "Conversion Boost"
      },
      {
        value: "10K+",
        label: "Messages Automated"
      },
      {
        value: "99%",
        label: "Delivery Rate"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={whatsappMarketingData} />
      <ServiceFAQ
        title="WhatsApp Marketing - FAQ"
        faqs={[
          { question: 'Is WhatsApp marketing GDPR-compliant?', answer: 'We follow privacy best practices and ensure consent is collected before messaging users; we also support opt-outs and data handling as per regulations.' },
          { question: 'Can you integrate WhatsApp with our CRM?', answer: 'Yes - we integrate WhatsApp flows with popular CRMs to ensure messages and leads are tracked.' },
          { question: 'How do broadcasts differ from chat campaigns?', answer: 'Broadcasts are one-to-many messages for promotions, while chat campaigns are personalized, automated flows that guide users to conversion.' }
        ]}
      />
    </>
  );
};

export default WhatsAppMarketingDetails;