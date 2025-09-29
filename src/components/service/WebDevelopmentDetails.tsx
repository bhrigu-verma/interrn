'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const WebDevelopmentDetails = () => {
  const webDevelopmentData: ServiceDetailData = {
    tag: "Development Excellence",
    title: "Web development",
    tagline: "Websites that work as hard as you do.",
    description: "From corporate websites to enterprise systems, we code it all. We build platforms that are not only powerful but also scalable, secure, and designed for performance. Our focus is on clean code and robust architecture to ensure your digital asset works as hard as you do.",
  mascotImage: "/assets/img/Web Developer.png", // Mascot for web & app development
    services: [
      {
        title: "Corporate Website Development",
        description: "We build professional corporate websites that establish credibility, showcase your services, and convert visitors into customers with modern, responsive designs.",
        icon: ""
      },
      {
        title: "E-commerce Development",
        description: "We create powerful e-commerce platforms with secure payment processing, inventory management, and user-friendly shopping experiences that drive sales.",
        icon: ""
      },
      {
        title: "Landing Page Development",
        description: "We build high-converting landing pages optimized for specific campaigns, products, or services, designed to maximize conversions and minimize bounce rates.",
        icon: ""
      },
      {
        title: "Mobile App Development",
        description: "We develop native (Android, iOS) and hybrid mobile apps that provide seamless user experiences, leveraging the latest technologies and design principles.",
        icon: ""
      },
      {
        title: "Custom CRM & ERP Solutions",
        description: "We build custom CRM and ERP systems tailored to your business processes, automating workflows and improving operational efficiency.",
        icon: ""
      },
      {
        title: "API Integration & Development",
        description: "We create and integrate APIs that connect your systems, enabling seamless data flow and automation between different platforms and services.",
        icon: ""
      },
      {
        title: "Performance Optimization",
        description: "We optimize website and application performance for speed, scalability, and reliability, ensuring fast loading times and smooth user experiences.",
        icon: ""
      },
      {
        title: "Hosting & Maintenance",
        description: "We handle everything from hosting and domain setup to ongoing maintenance, security updates, and technical support to keep your digital assets running smoothly.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "100+",
        label: "Websites Built"
      },
      {
        value: "99.9%",
        label: "Uptime Guarantee"
      },
      {
        value: "3sec",
        label: "Average Load Time"
      },
      {
        value: "24/7",
        label: "Support Available"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={webDevelopmentData} />
      <ServiceFAQ
        title="Web Development - FAQ"
        faqs={[
          { question: 'What tech stack do you use?', answer: 'We work with modern stacks like Next.js, React, Node.js, and common backend databases - we choose tools suited to each project.' },
          { question: 'Do you provide hosting and support?', answer: 'Yes - we can provision hosting, manage deployments, and offer ongoing maintenance packages.' },
          { question: 'Can you integrate with our existing systems?', answer: 'Absolutely - we specialize in building and integrating APIs and connecting to third-party systems as needed.' }
        ]}
      />
    </>
  );
};

export default WebDevelopmentDetails;