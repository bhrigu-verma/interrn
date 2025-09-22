'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const RetailMediaOperationsDetails = () => {
  const retailMediaOperationsData: ServiceDetailData = {
    tag: "E-Commerce Specialist",
    title: "ONDC & Retail Media Operations",
    tagline: "Retail ads that deliver real sales.",
    description: "Expand your e-commerce reach with next-gen retail marketing. Retail ads that deliver real sales. We expand your e-commerce reach with next-gen retail marketing, helping you tap into new marketplaces and drive measurable growth across all major retail platforms.",
    mascotImage: "/assets/img/ONDC & Retail Media Operations (E-Com Specialist).png",
    services: [
      {
        title: "ONDC Network Integration",
        description: "We handle the entire onboarding process to get your brand on the ONDC network, opening up new distribution channels and customer touchpoints across India.",
        icon: ""
      },
      {
        title: "Multi-Platform Catalog Optimization",
        description: "We optimize your product listings across platforms like Amazon, Flipkart, Myntra, Nykaa, and others to ensure maximum discoverability and conversion.",
        icon: ""
      },
      {
        title: "Amazon Advertising Management",
        description: "We run targeted ad campaigns on Amazon, including Sponsored Products, Sponsored Brands, and Sponsored Display ads to maximize your product visibility and sales.",
        icon: ""
      },
      {
        title: "Flipkart Ads Optimization",
        description: "We manage your advertising campaigns on Flipkart, optimizing for better placement, higher conversion rates, and improved return on ad spend.",
        icon: ""
      },
      {
        title: "Myntra & Nykaa Campaign Management",
        description: "We create and optimize campaigns specifically for fashion and beauty platforms like Myntra and Nykaa, targeting the right demographics for your products.",
        icon: ""
      },
      {
        title: "Global Marketplace Expansion",
        description: "We help you expand internationally by managing ad operations on platforms like Etsy and eBay, opening up global markets for your products.",
        icon: ""
      },
      {
        title: "Inventory & Pricing Strategy",
        description: "We help optimize your inventory management and pricing strategies across multiple platforms to maximize profitability while staying competitive.",
        icon: ""
      },
      {
        title: "Performance Analytics & Reporting",
        description: "We provide comprehensive analytics and reporting across all retail platforms, giving you insights into what's working and where to invest more.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "500%",
        label: "Sales Growth"
      },
      {
        value: "15+",
        label: "Platforms Managed"
      },
      {
        value: "₹10Cr+",
        label: "Revenue Generated"
      },
      {
        value: "85%",
        label: "Ad Conversion Rate"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={retailMediaOperationsData} />
      <ServiceFAQ
        title="Retail Media & ONDC - FAQ"
        faqs={[
          { question: 'Can you onboard our store to ONDC?', answer: 'Yes - we manage integration, cataloging, and operations to help you reach customers through ONDC.' },
          { question: 'Which retail platforms do you support?', answer: 'We support Amazon, Flipkart, Myntra, Nykaa, Etsy, and others, tailoring strategies to each platform.' },
          { question: 'Do you provide inventory syncing?', answer: 'We can set up catalog and inventory synchronization across platforms to maintain accurate listings and avoid oversells.' }
        ]}
      />
    </>
  );
};

export default RetailMediaOperationsDetails;