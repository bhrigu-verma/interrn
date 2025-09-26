'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const ContentOwnershipDetails = () => {
  const contentOwnershipData: ServiceDetailData = {
    tag: "Content Protection",
    title: "Content Ownership",
    tagline: "Your invisible shield against AI misuse",
    description: "Your content is valuable. In the AI era, it can be reused without credit or visibility, eroding your brand's authority. We make sure that doesn't happen.",
  mascotImage: "/assets/img/copyright.png", // Mascot for Content Protection
    services: [
      {
        title: "Digital Watermarking",
        description: "We implement both visible and invisible watermarks on your digital assets to ensure your content can always be traced back to your brand.",
        icon: ""
      },
      {
        title: "Content Monitoring & Tracking",
        description: "We use monitoring tools to track where your content is being used across the internet, alerting you to potential misuse so you can take action.",
        icon: ""
      },
      {
        title: "Copyright & Licensing Guidance",
        description: "We provide guidance on copyright best practices and help with licensing strategies to ensure your content is legally protected and its usage is controlled.",
        icon: ""
      },
      {
        title: "Attribution in AI Responses",
        description: "We use specific publishing and structuring strategies to ensure that when an AI uses your content in its response, it provides proper attribution.",
        icon: ""
      },
      {
        title: "Strategic Publishing Methods",
        description: "We advise on the best platforms and methods for publishing your content to maximize its visibility while minimizing the risk of unauthorized use by AI models.",
        icon: ""
      },
      {
        title: "Content Authentication",
        description: "We implement blockchain and other technologies to create immutable records of your content creation, providing legal proof of ownership.",
        icon: ""
      },
      {
        title: "DMCA & Takedown Services",
        description: "We handle DMCA takedown requests and other legal actions when your content is used without permission, protecting your intellectual property rights.",
        icon: ""
      },
      {
        title: "Brand Protection Strategy",
        description: "We develop comprehensive brand protection strategies that safeguard your content across all digital channels and emerging AI platforms.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "99%",
        label: "Content Protection Rate"
      },
      {
        value: "24/7",
        label: "Monitoring Coverage"
      },
      {
        value: "500+",
        label: "Protected Assets"
      },
      {
        value: "48hrs",
        label: "Response Time"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={contentOwnershipData} />
      <ServiceFAQ
        title="Content Ownership - FAQ"
        faqs={[
          { question: 'How do you monitor for unauthorized use?', answer: 'We use a combination of automated crawlers and manual checks to find and report misuse across platforms.' },
          { question: 'Can you handle takedown requests?', answer: 'Yes - we can prepare and submit DMCA notices and coordinate with legal partners if escalation is required.' },
          { question: 'Do you offer proofs of ownership?', answer: 'We can implement blockchain-based timestamps and maintain records proving the creation and publication dates of your content.' }
        ]}
      />
    </>
  );
};

export default ContentOwnershipDetails;