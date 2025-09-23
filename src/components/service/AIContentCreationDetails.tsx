'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const AIContentCreationDetails = () => {
  const aiContentCreationData: ServiceDetailData = {
    tag: "AI Innovation",
    title: "AI-Based Content Creation",
    tagline: "Future ready strategies combining human creativity with AI efficiency",
   description:"",
  mascotImage: "/assets/img/ai-content-mascot.png", // Use a mascot that visually represents AI content creation
    services: [
      {
        title: "AI Voiceovers & Avatars",
        description: "We create realistic AI-generated voices and avatars for video content and tutorials, perfect for scaling video production.",
        icon: ""
      },
      {
        title: "AI-Generated Blogs & Creatives",
        description: "We use AI to generate data-rich articles and creative concepts that are then refined by our human team to be on-brand and compelling.",
        icon: ""
      },
      {
        title: "Text-to-Image & Video Content",
        description: "We turn your ideas into high-quality images and video content in a fraction of the time, perfect for social media and ad campaigns.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "10x",
        label: "Content Production Speed"
      },
      {
        value: "500+",
        label: "AI-Generated Assets"
      },
      {
        value: "90%",
        label: "Time Savings"
      },
      {
        value: "95%",
        label: "Quality Retention"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={aiContentCreationData} />
      <ServiceFAQ
        title="AI Content Creation - FAQ"
        faqs={[
          { question: 'How do you ensure AI outputs are on-brand?', answer: 'We combine AI-generated drafts with human editing to preserve brand voice, accuracy, and creative direction.' },
          { question: 'Can you create AI voices from our team?', answer: 'With consent and proper licensing, we can create voice likenesses and custom avatar assets for consistent messaging.' },
          { question: 'Do AI assets have ownership rights?', answer: 'We clarify usage and ownership in contracts; typically, clients hold rights to assets we deliver unless otherwise specified.' }
        ]}
      />
    </>
  );
};

export default AIContentCreationDetails;