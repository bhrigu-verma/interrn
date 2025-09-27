'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const UGCCreatorCommerceDetails = () => {
  const ugcCreatorCommerceData: ServiceDetailData = {
    tag: "Creator Economy",
    title: "UGC & Creator Commerce",
    tagline: "Real voices, real growth / Turn customers into brand creators.",
    description: "In the age of social media, authenticity wins. We help you turn your most loyal customers and passionate creators into your best brand advocates. By leveraging authentic, user-generated content, we build trust and drive real-world growth that traditional marketing messages can't achieve.",
  mascotImage: "/assets/img/content creation.png", // Mascot for UGC & Creator Commerce
    services: [
      {
        title: "UGC-style Testimonials",
        description: "We find and feature authentic content from your customers, turning their positive experiences and reviews into powerful social proof that builds trust with new audiences.",
  icon: ""
      },
      {
        title: "Product Seeding with Creators",
        description: "We get your products into the hands of micro-creators who can create genuine, unscripted content. This showcases your brand in an organic, trustworthy way that feels less like an ad and more like a recommendation.",
  icon: ""
      },
      {
        title: "Affiliate Programs",
        description: "We set up and manage affiliate partnerships that turn your most passionate customers and creators into a performance-based sales force, growing your business with every referral.",
  icon: ""
      },
      {
        title: "Live Shopping Campaigns",
        description: "We help you tap into the high-conversion power of live commerce by managing and producing live shopping events that turn viewers into buyers in real time.",
  icon: ""
      }
    ],
    stats: [
      {
        value: "300%",
        label: "UGC Engagement Boost"
      },
      {
        value: "200+",
        label: "Creator Partners"
      },
      {
        value: "75%",
        label: "Conversion Rate Increase"
      },
      {
        value: "1K+",
        label: "UGC Pieces Created"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={ugcCreatorCommerceData} />
      <ServiceFAQ
        title="UGC & Creator Commerce - FAQ"
        faqs={[
          { question: 'Can you scale UGC production?', answer: 'Yes - we have production partners and creator networks that enable scaled, consistent UGC output.' },
          { question: 'How do you track creator-driven sales?', answer: 'We use tracking links, affiliate codes and platform analytics to measure direct sales impact from creator activity.' },
          { question: 'Do you manage returns and fulfillment for creator commerce?', answer: 'We coordinate with your ops team or commerce platform to ensure smooth order flow and customer experience.' }
        ]}
      />
    </>
  );
};

export default UGCCreatorCommerceDetails;