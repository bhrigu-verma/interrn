'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title="Influencer Marketing & PR"
              tagline="Collaborations that click."
              image="/assets/img/Influencer Marketer.png"
              intro=" In a world full of advertising noise, we help you build trust and credibility by partnering with the right voice"
              description="Connect with your audience through strategic influencer partnerships and PR initiatives that build authentic brand awareness and trust."
              sections={[
                {
                  title: "What we handle",
                  content: [
                    'Creator shortlisting, outreach, and negotiation',
                    'Briefs, deliverables, and approvals',
                    'Creator campaign management',
                    'Content review and optimization',
                    'Performance tracking and reporting',
                    'PR strategy and media outreach',
                    'Brand reputation management'
                  ]
                },
                {
                  title: "Why choose us",
                  content: [
                    'Extensive network of verified creators across all platforms',
                    'Data-driven creator selection and campaign optimization',
                    'Transparent pricing and clear deliverable expectations',
                    'Dedicated account management for seamless execution',
                    'Comprehensive performance tracking and insights',
                    'Crisis management and brand protection expertise'
                  ]
                }
              ]}
              cta="Start building authentic connections with your audience today."
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
