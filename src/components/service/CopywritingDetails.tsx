'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const CopywritingDetails = () => {
  const copywritingData: ServiceDetailData = {
    tag: "Content Strategy",
    title: "Copywriting",
    tagline: "From captions to campaigns—we write it all ",
    description: "In the digital world, words are your most valuable asset. We craft compelling copy that doesn't just inform-it connects, sells, and inspires. From the headline of your homepage to the final line of an email, we write with a purpose: to build your brand and drive your business forward.",
  mascotImage: "/assets/img/copywriting-mascot.png", // Use a mascot that visually represents copywriting
    services: [
      {
        title: "Website & Authority Content",
        description: "We write strategic, SEO-optimized copy that turns visitors into customers. This includes everything from core website pages and product descriptions to high-value blogs and case studies that build your brand's authority.",
  icon: ""
      },
      {
        title: "Ad & Sales Copy",
        description: "Every word is designed to grab attention and drive immediate action. We write powerful, persuasive copy for ad campaigns, sales funnels, and video scripts that get the click and make the sale.",
  icon: ""
      },
      {
        title: "Email & Social Marketing",
        description: "We build a direct line to your audience with engaging email newsletters and automated campaigns. We also create short, memorable copy for social media posts, captions, and scripts that are designed to go viral and build a loyal following.",
  icon: ""
      },
      {
        title: "Case Studies",
        description: "These are powerful tools that tell a customer success story. They use narrative and data to persuade potential clients that you're the right choice.",
  icon: ""
      },
      {
        title: "White Papers & eBooks",
        description: "Long-form content that builds authority. These are excellent lead magnets and are perfect for demonstrating deep expertise in a specific area.",
  icon: ""
      },
      {
        title: "Video Scripts",
        description: "Beyond social media reels, you could offer scripting for corporate videos, tutorials, and brand stories.",
  icon: ""
      },
      {
        title: "Product Descriptions",
        description: "For e-commerce clients, well-written product descriptions can significantly boost sales and reduce returns.",
  icon: ""
      }
    ],
    stats: [
      {
        value: "200+",
        label: "Brands Written For"
      },
      {
        value: "99%",
        label: "Client Satisfaction"
      },
      {
        value: "24hrs",
        label: "Average Turnaround"
      },
      {
        value: "150+",
        label: "Content Pieces"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={copywritingData} />
      <ServiceFAQ
        title="Copywriting - FAQ"
        faqs={[
          { question: 'How is your copywriting different from just writing content?', answer: 'Our copywriting is strategic and conversion-focused. We craft compelling messages that are designed to connect with your audience and drive specific actions.' },
          { question: 'Can you write for SEO?', answer: 'Yes. All of our website and blog content is optimized with relevant keywords to improve your search engine rankings and attract organic traffic.' },
          { question: "What's the process for a copywriting project?", answer: 'We start with a discovery call to understand your brand and goals. Then, we develop a content brief and outline, followed by drafting, client revisions, and final delivery of the polished copy.' }
        ]}
      />
    </>
  );
};

export default CopywritingDetails;