'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const AISEODetails = () => {
  const aiSEOData: ServiceDetailData = {
    tag: "AI Search Optimization",
    title: "AI SEO, GEO, AEO",
    tagline: "Protect your brand in the AI landscape.",
    description: "The future of search is here. We optimize your content not just for Google, but for all major AI search and generative platforms-including Google AI Overviews, Bing Copilot, ChatGPT, Perplexity and Gemini-ensuring your brand is always part of the answer.",
  mascotImage: "/assets/img/seo.png", // Mascot for AI SEO, GEO, AEO
    services: [
      {
        title: "Generative Engine Optimization (GEO)",
        description: "We go beyond traditional SEO to ensure your content is structured to appear prominently in AI-driven search results and answer engines across all platforms.",
        icon: ""
      },
      {
        title: "Answer Engine Optimization (AEO)",
        description: "We optimize your content to be the preferred source for AI systems when they generate answers, ensuring your brand gets credited and linked.",
        icon: ""
      },
      {
        title: "Structured Schema Implementation",
        description: "We implement technical optimizations that help AI systems understand your content, making it a trusted source of information for generative AI responses.",
        icon: ""
      },
      {
        title: "AI-Friendly Content Strategy",
        description: "We create content specifically designed to be understood and referenced by AI systems, increasing your visibility in the new search landscape.",
        icon: ""
      },
      {
        title: "Authority Content Building",
        description: "We strategically repurpose your existing content to build your brand's authority, so it's prioritized by AI models and search engines.",
        icon: ""
      },
      {
        title: "FAQ & Featured Snippet Optimization",
        description: "We structure your content to capture featured snippets and FAQ sections that AI systems commonly reference when generating responses.",
        icon: ""
      },
      {
        title: "Multi-Platform AI Monitoring",
        description: "We monitor how your brand appears across different AI platforms and search engines, ensuring consistent and accurate representation.",
        icon: ""
      },
      {
        title: "Traditional SEO + AI Enhancement",
        description: "We maintain strong traditional SEO while adding AI-specific optimizations, ensuring you rank well in both traditional and AI-powered search results.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "300%",
        label: "AI Visibility Increase"
      },
      {
        value: "15+",
        label: "AI Platforms Optimized"
      },
      {
        value: "95%",
        label: "Schema Implementation"
      },
      {
        value: "200%",
        label: "Authority Score Boost"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={aiSEOData} />
      <ServiceFAQ
        title="AI SEO & GEO - FAQ"
        faqs={[
          { question: 'Which AI platforms do you optimize for?', answer: 'We optimize for major AI platforms including Google AI Overviews, Bing Copilot, ChatGPT, Gemini, and Perplexity.' },
          { question: 'Will AI optimization change our SEO strategy?', answer: 'It complements traditional SEO - we enhance schema, structured data, and content to be discoverable by AI answer engines.' },
          { question: 'Do you monitor AI-driven traffic shifts?', answer: 'Yes - we monitor and report how AI impacts visibility and recommend adjustments to maintain authority across channels.' }
        ]}
      />
    </>
  );
};

export default AISEODetails;