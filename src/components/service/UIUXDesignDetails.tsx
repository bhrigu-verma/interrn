'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const UIUXDesignDetails = () => {
  const uiuxDesignData: ServiceDetailData = {
    tag: "Design Excellence",
    title: "Design (UI/UX & Branding)",
    tagline: "Designing experiences, not just screens",
    description: "Great development starts with great design. Your website is more than a digital business card; it's a high-performance asset. We design and build seamless, stunning digital experiences that not only showcase your brand but also perform flawlessly to drive your business goals.",
    mascotImage: "/assets/img/uidesign.png",
    services: [
      {
        title: "User Experience (UX) Design",
        description: "We map out the user's journey from their first click to their final action, creating wireframes and prototypes that simplify complex processes and lead to higher conversion rates.",
        icon: ""
      },
      {
        title: "User Interface (UI) Design",
        description: "We design the visual elements of your site or app-from the layout and color schemes to the buttons and typography-ensuring every screen is polished, professional, and on-brand.",
        icon: ""
      },
      {
        title: "Branding Integration",
        description: "We ensure a cohesive look across all digital assets by defining your brand's unique fonts, colors, and visual style that resonates with your target audience.",
        icon: ""
      },
      {
        title: "Responsive Design",
        description: "We create designs that work flawlessly across all devices and screen sizes, ensuring your users have a consistent experience whether they're on mobile, tablet, or desktop.",
        icon: ""
      },
      {
        title: "Wireframing & Prototyping",
        description: "We create detailed wireframes and interactive prototypes to visualize your product before development, saving time and ensuring the final product meets your expectations.",
        icon: ""
      },
      {
        title: "Design Systems Creation",
        description: "We build comprehensive design systems with reusable components, style guides, and standards that ensure consistency across your entire digital ecosystem.",
        icon: ""
      },
      {
        title: "Accessibility Design",
        description: "We design with accessibility in mind, ensuring your digital products are usable by everyone, including users with disabilities, while meeting WCAG guidelines.",
        icon: ""
      },
      {
        title: "Conversion-Focused Design",
        description: "Every design decision is made with conversion in mind, using proven UX principles and data-driven insights to guide users toward your desired actions.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "200%",
        label: "Conversion Rate Boost"
      },
      {
        value: "150+",
        label: "Designs Created"
      },
      {
        value: "98%",
        label: "Client Satisfaction"
      },
      {
        value: "50+",
        label: "Brands Designed"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={uiuxDesignData} />
      <ServiceFAQ
        title="Design (UI/UX & Branding) - FAQ"
        faqs={[
          { question: 'Do you handle brand identity?', answer: 'Yes - we create visual identities, style guides, and assets that ensure cohesive brand communication.' },
          { question: 'Will you do user testing?', answer: 'We organize user testing sessions and analyze results to improve usability and conversion.' },
          { question: 'Can you produce design systems?', answer: 'Yes - we build design systems with reusable components to scale design efficiently.' }
        ]}
      />
    </>
  );
};

export default UIUXDesignDetails;