'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { socialCommunityGrowthFAQs } from '@/data/service_faqs';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title="UGC & Creator Commerce"
              tagline="Real voices, real growth."
              image="/assets/img/Social & Community Growth.png"
              intro="Win trust with creator‑style content that feels native, not ads. Seed products, gather testimonials, and turn UGC into high‑performing ads."
              description="Build authentic brand connections through user-generated content and creator partnerships that drive engagement and conversions."
              sections={[
                {
                  title: "What we produce",
                  content: [
                    'Unboxing, try‑ons, how‑to, and POV testimonial videos',
                    'Creator briefs and content guidelines',
                    'Affiliate setups and link tracking',
                    'Live shopping and highlight edits'
                  ]
                },
                {
                  title: "Distribution",
                  content: ['Organic feeds', 'Paid social (UGC‑style ads)', 'Marketplaces and PDPs', 'Landing pages and emails']
                }
              ]}
            />
            <ServiceFAQ faqs={socialCommunityGrowthFAQs.slice(6, 9)} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
