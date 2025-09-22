'use client'

import React from 'react';
import ServiceDetailsTemplate, { ServiceDetailData } from './ServiceDetailsTemplate';
import ServiceFAQ from './ServiceFAQ';

const VideoEditingDetails = () => {
  const videoEditingData: ServiceDetailData = {
    tag: "Video Production",
    title: "Video Editing & Motion Graphics",
    tagline: "Story that moves your audience",
    description: "You have a story to tell but need to bring it to life in a way that truly engages people. We bring your stories to life with professional video content that captivates and moves your audience. From quick social clips to in-depth corporate videos, we make sure your message is seen and heard.",
    mascotImage: "/assets/img/Video editing.png",
    services: [
      {
        title: "Video Editing & Motion Graphics",
        description: "We don't just edit videos; we craft stories that move, persuade, and inspire. From a quick social media clip to a full-length documentary, we handle every detail of the post-production process to deliver polished, professional content that captures your audience's attention.",
        icon: ""
      },
      {
        title: "Corporate & Commercial Videos",
        description: "We produce high-impact videos designed to elevate your brand. This includes everything from promotional brand films and corporate videos to product showcases and social media advertisements.",
        icon: ""
      },
      {
        title: "Documentaries & Explainer Videos",
        description: "We turn complex topics into compelling narratives. Our services are perfect for long-form content, educational videos, or animated explainers that simplify your message and build trust.",
        icon: "📚"
      },
      {
        title: "Narrative Flow",
        description: "We structure raw footage into a cohesive and engaging story, guiding your audience from start to finish.",
        icon: "📖"
      },
      {
        title: "Animated Infographics",
        description: "We bring data to life with animated visuals, making key information easy to understand and remember.",
        icon: ""
      },
      {
        title: "Research & B-roll Integration",
        description: "We seamlessly blend your interviews with supporting footage and graphics to create a rich and immersive viewing experience.",
        icon: "🔍"
      },
      {
        title: "2D & 3D Modeling",
        description: "We design and build custom characters, assets, and environments from scratch for a truly unique and branded animation.",
        icon: ""
      },
      {
        title: "Keyframe Animation",
        description: "We meticulously animate every movement to create smooth, professional motion graphics for your videos or stand-alone animated clips.",
        icon: ""
      },
      {
        title: "Visual Effects",
        description: "We use VFX to enhance your footage with elements like green screen compositing, visual enhancements, and dynamic on-screen effects.",
        icon: ""
      }
    ],
    stats: [
      {
        value: "300+",
        label: "Videos Produced"
      },
      {
        value: "95%",
        label: "Client Satisfaction"
      },
      {
        value: "48hrs",
        label: "Average Turnaround"
      },
      {
        value: "50+",
        label: "Animation Styles"
      }
    ]
  };

  return (
    <>
      <ServiceDetailsTemplate serviceData={videoEditingData} />
      <ServiceFAQ
        title="Video Editing & Motion Graphics - FAQ"
        faqs={[
          { question: 'Do you use our existing footage or shoot new content?', answer: "We can do both. We can work with your raw footage to produce high-quality videos, or we can plan and shoot new content to bring your vision to life." },
          { question: "What's the typical turnaround time for a corporate video?", answer: 'A standard 2-3 minute corporate video usually takes 2-4 weeks, depending on the complexity of the project and the number of revisions.' },
          { question: 'Can you help us with the video script?', answer: "Yes, our team can help you write and refine a compelling script to ensure your video's message is clear and engaging." }
        ]}
      />
    </>
  );
};

export default VideoEditingDetails;