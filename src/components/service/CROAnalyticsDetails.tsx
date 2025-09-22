'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const CROAnalyticsDetails = () => {
  const croAnalyticsData: ServiceDetailData = {
    tag: "Analytics & Optimization",
    title: "CRO & Analytics Hub",
    tagline: "Conversions aren't luck-they're strategy.",
    description: "A structured approach to turn traffic into sales. Getting traffic isn't enough, so you definitely need conversions. We take a structured, data-driven approach to turn your website visitors into customers by identifying and fixing the leaks in your sales funnel.",
    mascotImage: "/assets/img/results.jpg",
    services: [
      {
        title: "Funnel Optimization",
        description: "We analyze your user journey to streamline the path from visitor to sale.",
        icon: ""
      },
      {
        title: "A/B & Multivariate Testing",
        description: "We test different versions of your pages to find what works best and boost your conversion rate.",
        icon: ""
      },
      {
        title: "Insights & Reporting",
        description: "We provide clear, visual dashboards with insights from GA4, heatmaps, and user journey analysis to give you a complete picture of your traffic.",
          icon: ""
      },
      {
        title: "Insights & Reporting",
        description: "We provide clear, visual dashboards with insights from GA4, heatmaps, and user journey analysis, giving you a complete picture of your traffic and a clear path to growth. We also create custom attribution models to show you exactly which marketing channels are driving your conversions.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "150%",
        label: "Average Conversion Boost"
      },
      {
        value: "500+",
        label: "Tests Conducted"
      },
      {
        value: "98%",
        label: "Data Accuracy"
      },
      {
        value: "24/7",
        label: "Monitoring"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={croAnalyticsData} />
      <ServiceFAQ
        title="CRO & Analytics - FAQ"
        faqs={[
          { question: 'What tools do you use for analytics?', answer: 'We use GA4, heatmapping tools, session replays, and custom dashboards to gather a full picture of user behavior.' },
          { question: 'How do you prioritize tests?', answer: 'We prioritize tests based on impact and effort, focusing first on changes likely to deliver the largest conversion improvements.' },
          { question: 'Can you help with GA4 setup and attribution?', answer: 'Yes - we provide GA4 setup, custom events, and tailored attribution models to ensure accurate measurement.' }
        ]}
      />
    </>
  );
};

export default CROAnalyticsDetails;