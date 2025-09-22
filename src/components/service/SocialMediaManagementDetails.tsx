'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const SocialMediaManagementDetails = () => {
  const socialMediaData: ServiceDetailData = {
    tag: "Social Growth",
    title: "Social Media Management",
    tagline: "Social media is the face of your brand & we make sure it shines.",
    description: "We manage, you grow. We handle every aspect of your social presence, so you can focus on your business while we build your brand's authority. This is about more than just posting; it's about strategic growth, audience engagement, and consistent results.",
  mascotImage: "/assets/img/Social%20media%20manager.png", // Fix path encoding for mascot image
    services: [
      {
        title: "Strategic Planning & Content",
        description: "We create a purpose-driven content plan and craft scroll-stopping visuals and captions that connect with your audience. We handle all scheduling and reporting for you.",
        icon: ""
      },
      {
        title: "Optimization & Engagement",
        description: "We use data-driven research to expand your reach and ensure your content is discovered by the right people. Our active community management turns followers into a loyal community.",
        icon: ""
      },
      {
        title: "Proactive Brand Protection",
        description: "We manage potential crises before they escalate and develop custom strategies for platforms like LinkedIn, TikTok, or Pinterest to ensure you're always ahead of the curve.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "500K+",
        label: "Followers Grown"
      },
      {
        value: "250%",
        label: "Average Engagement Boost"
      },
      {
        value: "100+",
        label: "Brands Managed"
      },
      {
        value: "24/7",
        label: "Community Support"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={socialMediaData} />
      <ServiceFAQ
        title="Social & Community Growth - FAQ"
        faqs={[
          { question: 'How do you measure social media success?', answer: 'We track KPIs like engagement rate, website traffic from social channels, lead generation, and conversions to show how social media impacts business goals.' },
          { question: 'Will you post on all of our social media channels?', answer: 'We work with you to determine the most effective channels. We can manage a single platform or a full suite of channels depending on your needs.' },
          { question: "What if we don't have visual content to post?", answer: 'Our team can create custom, on-brand visuals, videos, and graphics to fill your content calendar and engage your audience.' }
        ]}
      />
    </>
  );
};

export default SocialMediaManagementDetails;