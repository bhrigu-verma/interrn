export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  description: string;
  sections: {
    title: string;
    content: string[];
  }[];
  cta: string;
  faqs?: { question: string; answer: string }[];
}

export const serviceDetailData: ServiceDetail[] = [
  // Group summary for Social & Community Growth
  {
    id: 'social-community-growth',
    title: 'Social & Community Growth',
    tagline: 'Grow your brand and community with authentic engagement.',
    image: '/assets/img/Social & Community Growth.png',
  intro: "We manage, you grow. We handle every aspect of your social presence, so you can focus on your business while we build your brand's authority. This is about more than just posting; it's about strategic growth, audience engagement, and consistent results.",
    description: 'Our Social & Community Growth bundle includes Social Media Management, Influencer Marketing & PR, and UGC & Creator Commerce. Explore each service to see how we can help you grow.',
    sections: [
      {
        title: 'Our Core Services',
        content: [
          'Social Media Management: Strategic planning, content creation, and community engagement.',
          'Influencer Marketing & PR: Authentic partnerships and impactful media placements.',
          'UGC & Creator Commerce: Harness the power of your customers and creators for organic growth.'
        ]
      }
    ],
    cta: 'Let’s Grow Your Community!',
    faqs: require('./service_faqs').socialCommunityGrowthFAQs
  },
  // Group summary for AI & Future-Ready Solutions
  {
    id: 'ai-future-ready',
    title: 'AI & Future-Ready Solutions',
    tagline: 'AI tools with a human touch for tomorrow’s growth.',
    image: '/assets/img/AI Developer.png',
    intro: 'Stay ahead with our AI-powered solutions: from content creation to automations, search optimization, and digital protection. We blend cutting-edge AI with human creativity to future-proof your brand.',
    description: 'Our AI & Future-Ready Solutions bundle includes AI-Based Content Creation, AI Automations, AI SEO/GEO/AEO, and Content Ownership & Protection. Explore each service to see how we can help you scale and protect your brand.',
    sections: [
      {
        title: 'Our AI Services',
        content: [
          'AI-Based Content Creation: Scalable, high-quality content with AI voiceovers, avatars, and creatives.',
          'AI Automations: Streamline operations and customer journeys with smart automations.',
          'AI SEO, GEO, AEO: Optimize for Google, Bing, ChatGPT, and all major AI search engines.',
          'Content Ownership & Protection: Safeguard your digital assets and ensure proper attribution.'
        ]
      }
    ],
    cta: 'Let’s Future-Proof Your Brand!',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  // ONDC & Retail Media Ops
  {
    id: 'ondc-retail-media-ops',
    title: 'ONDC & Retail Media Ops',
    tagline: 'Visibility + sales on every platform.',
    image: '/assets/img/ONDC.png',
    intro: 'Expand e‑commerce distribution and win more shelves. We manage listings, ads, and ops across marketplaces—including ONDC—so products stay discoverable and in‑stock.',
    description: 'Maximize your e-commerce presence across multiple platforms with comprehensive marketplace management and retail media optimization strategies.',
    sections: [
      {
        title: 'What we run',
        content: [
          'Catalog onboarding, taxonomy, and SEO for listings',
          'Sponsored ads and retail media optimization',
          'Pricing, inventory, and promotions management',
          'Review velocity and ratings improvement'
        ]
      },
      {
        title: 'Platforms',
        content: ['Amazon', 'Flipkart', 'Meesho', 'JioMart', 'ONDC and more']
      }
    ],
    cta: 'Let’s Grow Your Retail Presence!',
    faqs: require('./service_faqs').performanceGrowthFAQs
  },
  // Group summary for Social & Community Growth
  {
    id: 'social-community-growth',
    title: 'Social & Community Growth',
    tagline: 'Grow your brand and community with authentic engagement.',
    image: '/assets/img/Social & Community Growth.png',
    intro: 'We help you build a thriving online presence with a blend of social media management, influencer marketing, and UGC strategies. Our approach combines authentic engagement with proven growth tactics to foster a loyal community around your brand.',
    description: 'Our Social & Community Growth bundle includes Social Media Management, Influencer Marketing & PR, and UGC & Creator Commerce. Explore each service to see how we can help you grow.',
    sections: [
      {
        title: 'Our Core Services',
        content: [
          'Social Media Management: Strategic planning, content creation, and community engagement.',
          'Influencer Marketing & PR: Authentic partnerships and impactful media placements.',
          'UGC & Creator Commerce: Harness the power of your customers and creators for organic growth.'
        ]
      }
    ],
    cta: 'Let’s Grow Your Community!',
    faqs: require('./service_faqs').socialCommunityGrowthFAQs
  },
  // Group summary for AI & Future-Ready Solutions
  {
    id: 'ai-future-ready',
    title: 'AI & Future-Ready Solutions',
    tagline: 'AI tools with a human touch for tomorrow’s growth.',
    image: '/assets/img/AI Developer.png',
    intro: 'Stay ahead with our AI-powered solutions: from content creation to automations, search optimization, and digital protection. We blend cutting-edge AI with human creativity to future-proof your brand.',
    description: 'Our AI & Future-Ready Solutions bundle includes AI-Based Content Creation, AI Automations, AI SEO/GEO/AEO, and Content Ownership & Protection. Explore each service to see how we can help you scale and protect your brand.',
    sections: [
      {
        title: 'Our AI Services',
        content: [
          'AI-Based Content Creation: Scalable, high-quality content with AI voiceovers, avatars, and creatives.',
          'AI Automations: Streamline operations and customer journeys with smart automations.',
          'AI SEO, GEO, AEO: Optimize for Google, Bing, ChatGPT, and all major AI search engines.',
          'Content Ownership & Protection: Safeguard your digital assets and ensure proper attribution.'
        ]
      }
    ],
    cta: 'Let’s Future-Proof Your Brand!',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    tagline: 'Designs so bold that your brand never whispers, it SHOUTS.',
  image: '/assets/img/Graphic design.png',
    intro: 'Our graphic design services build a strong visual identity that not only looks great but also makes your brand instantly recognizable and trustworthy. We don\'t just create assets; we craft a visual language that speaks directly to your audience, turning first glances into lasting connections.',
    description: 'From logos to full-fledged brand kits, our designs ensure your brand stands out with consistency and clarity across all platforms.',
    sections: [
      {
        title: 'Core Brand Assets',
        content: [
          'Logos, brand kits, business cards, presentations',
          'Brochures, flyers, banners for professional presence',
          'Complete visual identity systems'
        ]
      },
      {
        title: 'Social & Digital Creatives',
        content: [
          'On-brand graphics & animations for all platforms',
          'Social media creatives optimized for engagement',
          'Ad creatives designed for clicks and conversions'
        ]
      },
      {
        title: 'Specialized Design',
        content: [
          'Product packaging and merchandise design',
          'Custom iconography & illustration',
          'Print designs that make lasting impressions'
        ]
      }
    ],
    cta: 'Let\'s Design Your Visual Identity.',
    faqs: require('./service_faqs').creativesContentFAQs
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    tagline: 'Story that moves your audience.',
    image: '/assets/img/Video editing.png',
    intro: 'We bring your stories to life with professional video content that captivates and moves your audience. From quick social clips to corporate films, we make sure your message is seen and remembered.',
    description: 'Video is the future of digital engagement. Our edits ensure your brand communicates effectively through high-quality storytelling.',
    sections: [
      {
        title: 'Corporate & Commercial Videos',
        content: [
          'Promotional films and corporate videos',
          'Product showcases and advertisement films',
          'Professional brand storytelling content'
        ]
      },
      {
        title: 'Documentaries & Explainer Videos',
        content: [
          'Turning complex topics into engaging narratives',
          'Educational content that simplifies and explains',
          'Cohesive storytelling with supporting visuals'
        ]
      },
      {
        title: 'Animation & VFX',
        content: [
          'Logo animations and motion graphics',
          '2D/3D modeling and custom characters',
          'Advanced compositing and visual effects'
        ]
      }
    ],
    cta: 'Let\'s Bring Your Story to Life.',
    faqs: require('./service_faqs').creativesContentFAQs
  },
  {
    id: 'copywriting',
    title: 'Copywriting',
    tagline: 'Words are powerful, but the right words are what turn visitors into customers.',
    image: '/assets/img/copyright.png',
    intro: 'We craft compelling copy that informs, connects, and sells. From homepages to emails, we write with clarity and purpose to build your brand and drive business.',
    description: 'We create compelling content that triggers emotions, drives actions, and positions your brand as an authority.',
    sections: [
      {
        title: 'Website & Authority Content',
        content: [
          'SEO-optimized website copy that converts',
          'Blogs and thought-leadership articles',
          'Case studies that build credibility'
        ]
      },
      {
        title: 'Ad & Sales Copy',
        content: [
          'Headlines that grab attention instantly',
          'Sales funnels and persuasive scripts',
          'Ad copy designed for maximum impact'
        ]
      },
      {
        title: 'Email & Social Copy',
        content: [
          'Email sequences designed for nurturing leads',
          'Social media captions that engage',
          'Viral content snippets and newsletters'
        ]
      },
      {
        title: 'Specialized Content',
        content: [
          'White papers and eBooks for authority building',
          'Product descriptions that persuade',
          'Scripts for videos and presentations'
        ]
      }
    ],
    cta: 'Let\'s Write Your Success Story.',
    faqs: require('./service_faqs').creativesContentFAQs
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'We manage, You grow',
    image: '/assets/img/Social%20media%20manager.png',
    intro: 'We manage every aspect of your social presence so you can focus on growth while we build your brand\'s authority.',
    description: 'This is about more than just posting; it\'s about strategic growth, audience engagement, and consistent results.',
    sections: [
      {
        title: 'Strategic Planning & Content',
        content: [
          'Purpose-driven content planning and strategy',
          'Compelling captions and visual content creation',
          'Strategic scheduling for maximum reach'
        ]
      },
      {
        title: 'Optimization & Engagement',
        content: [
          'Data-driven reach expansion strategies',
          'Active community management and engagement',
          'Performance analytics and optimization'
        ]
      },
      {
        title: 'Proactive Brand Protection',
        content: [
          'Crisis handling and reputation management',
          'Platform-specific growth strategies',
          'Brand monitoring and response management'
        ]
      }
    ],
    cta: 'Let\'s Grow Your Social Presence.',
    faqs: require('./service_faqs').socialCommunityGrowthFAQs
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing & PR',
    tagline: 'Collaborations that click. PR that puts you on the map.',
    image: '/assets/img/Influencer Marketer.png.png',
    intro: 'We help you build credibility with authentic partnerships and secure impactful PR placements.',
    description: 'From nano to mega influencers, we identify, connect, and manage collaborations that align with your brand\'s values.',
    sections: [
      {
        title: 'Influencer Partnerships',
        content: [
          'Micro & nano creators with engaged audiences',
          'Campaign planning and execution',
          'Performance-driven collaborations'
        ]
      },
      {
        title: 'PR Placements',
        content: [
          'Strategic articles and media coverage',
          'Podcast appearances and interviews',
          'Brand visibility in relevant publications'
        ]
      },
      {
        title: 'Media Outreach',
        content: [
          'Building relationships with journalists and editors',
          'Media outlet connections and networking',
          'End-to-end PR campaign management'
        ]
      }
    ],
    cta: 'Let\'s Amplify Your Brand Voice.',
    faqs: require('./service_faqs').socialCommunityGrowthFAQs
  },
  {
    id: 'ugc',
    title: 'UGC & Creator Commerce',
    tagline: 'Real voices, real growth.',
    image: '/assets/img/Tech Specialist.png',
    intro: 'We turn your loyal customers into brand advocates with authentic content and commerce strategies.',
    description: 'UGC performs better than branded ads because it\'s organic and relatable. We specialize in scaling this type of content for performance marketing.',
    sections: [
      {
        title: 'UGC Testimonials',
        content: [
          'Customer experiences transformed into social proof',
          'Authentic product reviews and testimonials',
          'Community-driven content campaigns'
        ]
      },
      {
        title: 'Product Seeding',
        content: [
          'Organic content creation by micro-creators',
          'Unboxing and demo video campaigns',
          'Strategic product placement for visibility'
        ]
      },
      {
        title: 'Creator Commerce',
        content: [
          'Performance-driven affiliate programs',
          'Live shopping and interactive campaigns',
          'UGC licensing for ads and websites'
        ]
      }
    ],
    cta: 'Let\'s Build Trust Together.',
    faqs: require('./service_faqs').socialCommunityGrowthFAQs
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tagline: 'Where every click counts.',
    image: '/assets/img/Perfornmence and growth.png',
    intro: 'We design data-driven campaigns that maximize ROI and turn traffic into profit.',
    description: 'Our media buying strategies across Google, Meta, and other platforms ensure you get measurable results, not just vanity metrics.',
    sections: [
      {
        title: 'Targeted Ad Campaigns',
        content: [
          'Facebook & Instagram Ads that convert',
          'Google Ads (Search, Display, YouTube)',
          'LinkedIn & Twitter paid campaigns'
        ]
      },
      {
        title: 'Optimization & Strategy',
        content: [
          'A/B testing and performance optimization',
          'Funnel building and retargeting strategies',
          'Advanced audience targeting and segmentation'
        ]
      },
      {
        title: 'Budget Management',
        content: [
          'Budget optimization for maximum ROI',
          'Clear reporting and performance tracking',
          'Cost-effective campaign scaling'
        ]
      }
    ],
    cta: 'Let\'s Scale Your Growth.',
    faqs: require('./service_faqs').performanceGrowthFAQs
  },
  {
    id: 'cro',
    title: 'CRO & Analytics Hub',
    tagline: 'Conversions aren\'t luck—they\'re strategy.',
    image: '/assets/img/Social & Community Growth.png',
    intro: 'We analyze funnels and fix leaks to maximize conversions.',
    description: 'CRO ensures every visitor has the highest chance of converting into a customer. It\'s science + psychology.',
    sections: [
      {
        title: 'Funnel Optimization',
        content: [
          'Map user journeys to identify conversion points',
          'UI/UX optimization for better user flow',
          'Form and checkout optimization'
        ]
      },
      {
        title: 'Testing & Experimentation',
        content: [
          'A/B testing and multivariate testing',
          'Content and CTA experimentation',
          'Identify high-performing page versions'
        ]
      },
      {
        title: 'Insights & Reporting',
        content: [
          'Advanced analytics dashboards and GA4 setup',
          'Heatmaps and user behavior analysis',
          'Attribution modeling and performance tracking'
        ]
      }
    ],
    cta: 'Let\'s Turn Visitors into Buyers.',
    faqs: require('./service_faqs').performanceGrowthFAQs
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    tagline: 'The fastest way to your customers\' hearts.',
    image: '/assets/img/Whatsapp marketer (2).png',
    intro: 'We create high-impact, automated campaigns on WhatsApp to drive sales directly.',
    description: 'With over 2B users, WhatsApp is the most personal platform to connect with your audience.',
    sections: [
      {
        title: 'Automated Chatbots',
        content: [
          'WhatsApp API setup & chatbot integration',
          'Automated sales & support flows',
          'Lead nurturing and customer support automation'
        ]
      },
      {
        title: 'Broadcasts & Ads',
        content: [
          'Personalized broadcasts at scale',
          'WhatsApp ad campaign integrations',
          'Click-to-chat promotional campaigns'
        ]
      },
      {
        title: 'CRM Integration',
        content: [
          'End-to-end CRM connectivity',
          'Sales funnel integration and tracking',
          'Lead qualification and management'
        ]
      }
    ],
    cta: 'Let\'s Start Conversations That Convert.',
    faqs: require('./service_faqs').performanceGrowthFAQs
  },
  {
    id: 'ai-content-creation',
    title: 'AI-Based Content Creation',
    tagline: 'Future-ready strategies combining human creativity with AI efficiency.',
    image: '/assets/img/aiautomation.png',
    intro: 'We combine AI and human creativity to produce scalable, engaging content.',
    description: 'The future of marketing is here. We harness the power of AI to automate workflows and scale content creation while maintaining human creativity.',
    sections: [
      {
        title: 'AI Voiceovers & Avatars',
        content: [
          'Professional AI voiceovers for videos and tutorials',
          'Custom AI avatars for brand representation',
          'Video-ready assets with AI-generated elements'
        ]
      },
      {
        title: 'AI-Generated Content',
        content: [
          'AI-generated blogs refined by human editors',
          'Data-rich articles with human oversight',
          'Scalable content creation workflows'
        ]
      },
      {
        title: 'Visual AI Content',
        content: [
          'Text-to-image content for social and ads',
          'AI-generated creatives and graphics',
          'Fast content production for campaigns'
        ]
      }
    ],
    cta: 'Let\'s Create Content at Scale.',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  {
    id: 'ai-automations',
    title: 'AI Automations',
    tagline: 'AI that works while you sleep.',
    image: '/assets/img/aiautomation.png',
    intro: 'We build automations that streamline operations and customer journeys.',
    description: 'Customer journey automations that nurture leads 24/7 while you focus on growing your business.',
    sections: [
      {
        title: 'Customer Journey Automation',
        content: [
          'Automated lead nurturing sequences',
          '24/7 customer journey management',
          'Personalized experience automation'
        ]
      },
      {
        title: 'AI Support Systems',
        content: [
          'Real-time AI-powered chatbots',
          'Intelligent customer support automation',
          'Multi-platform integration capabilities'
        ]
      },
      {
        title: 'Advanced AI Tools',
        content: [
          'AI outbound calling agents for lead qualification',
          'Live reporting dashboards with real-time metrics',
          'Automated workflow optimization'
        ]
      }
    ],
    cta: 'Let\'s Automate Your Success.',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  {
    id: 'ai-seo',
    title: 'AI SEO, GEO, AEO',
    tagline: 'Protect your brand in the AI landscape.',
    image: '/assets/img/aiautomation.png',
    intro: 'We optimize your content for AI search platforms and traditional SEO.',
    description: 'Ensure your brand visibility across Google, Bing, ChatGPT, Gemini, and other AI-driven platforms.',
    sections: [
      {
        title: 'Generative Engine Optimization',
        content: [
          'Optimization for AI-driven search results',
          'Ensure visibility in generative AI platforms',
          'Future-proof your search presence'
        ]
      },
      {
        title: 'Structured Data & Content',
        content: [
          'Structured schema & FAQs for better AI understanding',
          'Content formatting for AI comprehension',
          'Enhanced search result presentations'
        ]
      },
      {
        title: 'Authority Building',
        content: [
          'Repurposed content for brand authority',
          'AI search ranking optimization',
          'Cross-platform content strategy'
        ]
      }
    ],
    cta: 'Let\'s Future-Proof Your Visibility.',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  {
    id: 'content-ownership',
    title: 'Content Ownership',
    tagline: 'Your invisible shield against AI misuse.',
    image: '/assets/img/aiautomation.png',
    intro: 'We protect your content from misuse and ensure proper attribution.',
    description: 'Proactive shield against AI misuse of your content. Ensure attribution and recognition in the AI era.',
    sections: [
      {
        title: 'Digital Asset Protection',
        content: [
          'Watermarking & monitoring systems',
          'Digital asset tracking and protection',
          'Real-time content usage monitoring'
        ]
      },
      {
        title: 'Legal Protection',
        content: [
          'Copyright & licensing management',
          'Legal framework for content protection',
          'Rights management and enforcement'
        ]
      },
      {
        title: 'AI Attribution',
        content: [
          'Ensure proper credit in generative platforms',
          'Protect against uncredited reuse',
          'Maintain brand authority and visibility'
        ]
      }
    ],
    cta: 'Let\'s Protect Your Content.',
    faqs: require('./service_faqs').aiFutureReadyFAQs
  },
  {
    id: 'ui-ux-branding',
    title: 'Design (UI/UX & Branding)',
    tagline: 'Designing experiences, not just screens.',
    image: '/assets/img/uidesign.png',
    intro: 'We create seamless, stunning experiences that align with your brand.',
    description: 'From wireframes to final designs, we ensure every touchpoint reflects your brand\'s personality and drives user engagement.',
    sections: [
      {
        title: 'UX Design',
        content: [
          'User journey mapping and wireframes',
          'Interactive prototypes and user testing',
          'Information architecture and flow optimization'
        ]
      },
      {
        title: 'UI Design',
        content: [
          'Modern layouts and visual design systems',
          'Typography and color scheme development',
          'Responsive design for all devices'
        ]
      },
      {
        title: 'Branding Integration',
        content: [
          'Unified design language across all assets',
          'Brand guideline development and implementation',
          'Consistent visual identity systems'
        ]
      }
    ],
    cta: 'Let\'s Design Your Digital Experience.',
    faqs: require('./service_faqs').creativesContentFAQs
  },
  {
    id: 'development',
    title: 'Development (Coding & Technology)',
    tagline: 'Websites that work as hard as you do.',
    image: '/assets/img/Tech Specialist.png',
    intro: 'We build scalable, secure, and performance-driven digital platforms.',
    description: 'From corporate websites to complex applications, we develop solutions that grow with your business.',
    sections: [
      {
        title: 'Website Development',
        content: [
          'Corporate websites and landing pages',
          'E-commerce platforms and online stores',
          'Custom web applications and portals'
        ]
      },
      {
        title: 'Mobile App Development',
        content: [
          'Native iOS and Android applications',
          'Hybrid app development for cross-platform reach',
          'Progressive web apps (PWAs)'
        ]
      },
      {
        title: 'Custom Solutions & Optimization',
        content: [
          'CRM, ERP, and API integrations',
          'Performance optimization and hosting solutions',
          'SEO implementation and speed optimization'
        ]
      }
    ],
    cta: 'Let\'s Build Your Digital Foundation.',
    faqs: require('./service_faqs').performanceGrowthFAQs
  }
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return serviceDetailData.find(service => service.id === slug);
};