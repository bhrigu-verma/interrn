'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const PerformanceMarketingDetails = () => {
  const performanceMarketingData: ServiceDetailData = {
    tag: "Performance Marketing",
    title: "Performance Marketing",
    tagline: "Where every click counts",
    description: "Every click, every ad, and every penny matters. We use data-driven strategies to maximize your ROI, so you can stop guessing and start growing. Our team turns traffic into profit and helps you achieve your business goals with precision.",
    mascotImage: "/assets/img/performancemarketing.png",
    services: [
      {
        title: "Targeted Ad Campaigns",
        description: "We manage and optimize campaigns across top platforms like Google, Meta, LinkedIn, and YouTube.",
        icon: ""
      },
      {
        title: "Optimization & Strategy",
        description: "We conduct continuous A/B testing and implement powerful retargeting strategies to ensure your ads are always performing at their best.",
        icon: ""
      },
      {
        title: "Budget Management",
        description: "We provide clear reporting and efficient budget management to maximize your return on investment.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "400%",
        label: "Average ROI Increase"
      },
      {
        value: "₹50L+",
        label: "Ad Spend Managed"
      },
      {
        value: "95%",
        label: "Client Retention Rate"
      },
      {
        value: "150+",
        label: "Campaigns Optimized"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={performanceMarketingData} />
      <ServiceFAQ
        title="Performance Marketing - FAQ"
        faqs={[
          { question: 'How do you optimize ad spend?', answer: 'We continuously test creative, audiences, and bidding strategies while reallocating budget to top performers to maximize ROI.' },
          { question: 'Which ad platforms do you specialize in?', answer: 'We run performance campaigns across Meta, Google, LinkedIn, TikTok and programmatic channels depending on where your audience spends time.' },
          { question: 'Can you manage our entire ad budget?', answer: 'Yes - we can take full management responsibility or work alongside your in-house team for collaborative execution.' }
        ]}
      />
    </>
  );
};

export default PerformanceMarketingDetails;