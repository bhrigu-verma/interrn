'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const GraphicDesignDetails = () => {
  const graphicDesignData: ServiceDetailData = {
    tag: "Graphic Design",
    title: "Graphic Designing",
    tagline: "Designs so bold that your brand never whispers, it SHOUTS.",
    description: "Our graphic design services build a strong visual identity that not only looks great but also makes your brand instantly recognizable and trustworthy. We don't just create assets; we craft a visual language that speaks directly to your audience, turning first glances into lasting connections.",
    mascotImage: "/assets/img/Graphic design.png",
    services: [
      {
        title: "Logos & Brand Kits",
        description: "The foundation of your brand. We design a logo that is unique, memorable, and scalable, complete with a full brand kit that includes color palettes, typography, and usage guidelines for a consistent look everywhere.",
        icon: ""
      },
      {
        title: "Social Media Creatives",
        description: "Stand out in crowded feeds. We create stunning, on-brand creatives for all social platforms that are optimized to drive engagement, clicks, and shares.",
        icon: ""
      },
      {
        title: "Brochures, Flyers, and Banners",
        description: "Tangible marketing that captures attention. From digital banners to print-ready materials, we design professional assets that communicate your message clearly and effectively.",
        icon: ""
      },
      {
        title: "Business Cards & Presentations",
        description: "We ensure every touchpoint is a statement of your brand's professionalism. Our designs make your business cards memorable and your presentations polished and persuasive.",
        icon: ""
      },
      {
        title: "Packaging Design",
        description: "For businesses that sell physical products, creating a visually appealing and brand-consistent package is crucial.",
        icon: ""
      },
      {
        title: "Merchandise Design",
        description: "Designing t-shirts, mugs, or other branded merchandise for clients to sell or use as promotional items.",
        icon: ""
      },
      {
        title: "Iconography & Illustration",
        description: "Creating custom icons or illustrations to be used on websites, apps, or in marketing materials to give a brand a unique look and feel.",
        icon: ""
      },
      {
        title: "Animated Social Media Posts",
        description: "Beyond simple GIFs, we create short, looping animations perfect for platforms like Instagram, LinkedIn, and Facebook. These are designed to instantly catch attention in a crowded feed and significantly increase engagement.",
        icon: ""
      },
      {
        title: "Vector Animation",
        description: "This style uses scalable vector art, which means the animation is always sharp and clear, no matter the screen size. It's a clean, modern style perfect for brand icons, logos, or animated explainer graphics.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "500+",
        label: "Brands Designed"
      },
      {
        value: "98%",
        label: "Client Satisfaction"
      },
      {
        value: "24hrs",
        label: "Average Turnaround"
      },
      {
        value: "100+",
        label: "Design Variations"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={graphicDesignData} />
      <ServiceFAQ
        title="Graphic Designing - FAQ"
        faqs={[
          { question: 'Do you create full brand kits?', answer: 'Yes - we deliver comprehensive brand kits including logos, color palettes, typography, and usage guidelines.' },
          { question: 'Can you design packaging and merchandise?', answer: 'Absolutely - we design packaging and merchandise that align with your brand and appeal to your customers.' },
          { question: 'Do you provide source files and rights?', answer: 'Yes - we provide final assets and source files, and transfer ownership/usage rights as per our agreement.' }
        ]}
      />
    </>
  );
};

export default GraphicDesignDetails;
