'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const InfluencerMarketingDetails = () => {
  const influencerMarketingData: ServiceDetailData = {
    tag: "Influencer Relations",
    title: "Influencer Marketing & PR",
    tagline: "Collaborations that click / PR that puts you on the map",
    description: "In a world full of advertising noise, we help you build trust and credibility by partnering with the right voices. We go beyond simple collaborations to create authentic partnerships and secure media placements that put your brand on the map and in front of the right audience.",
    mascotImage: "/assets/img/Influencer Marketer.png",
    services: [
      {
        title: "Micro & Nano Influencer Partnerships",
        description: "We connect you with authentic creators who have a dedicated, engaged following. By leveraging their trust with their audience, your brand's message is delivered with genuine impact, leading to higher engagement and a stronger connection.",
        icon: ""
      },
      {
        title: "PR Placements",
        description: "We get your brand featured in relevant publications, podcasts, and media. These placements give you powerful social proof and credibility, turning an external endorsement into a valuable asset for your marketing.",
        icon: ""
      },
      {
        title: "Media Outreach",
        description: "We build relationships with journalists, editors, and media outlets to secure features, interviews, and mentions that expand your brand's reach and authority in your industry.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "1M+",
        label: "Collective Reach"
      },
      {
        value: "150+",
        label: "Influencer Partners"
      },
      {
        value: "85%",
        label: "Campaign Success Rate"
      },
      {
        value: "50+",
        label: "Media Placements"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={influencerMarketingData} />
      <ServiceFAQ
        title="Influencer Marketing - FAQ"
        faqs={[
          { question: 'How do you select influencers?', answer: 'We vet creators for audience alignment, engagement quality, and brand fit to ensure authentic representation.' },
          { question: 'How are influencer fees handled?', answer: 'We manage negotiation and contracting, and we can operate within a set budget to maximize ROI.' },
          { question: 'Do you provide usage rights for content?', answer: 'Yes - we secure usage rights in contracts so your brand can reuse high-performing creator content.' }
        ]}
      />
    </>
  );
};

export default InfluencerMarketingDetails;