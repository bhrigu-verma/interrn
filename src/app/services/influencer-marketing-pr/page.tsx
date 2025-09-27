
const influencerMarketingFAQs = [
  {
    question: "How do you find the right influencers for my brand?",
    answer: "We use a strategic, data-driven approach to find influencers who have an authentic connection with your target audience. We focus on relevance and engagement, not just follower count, to ensure your collaborations deliver real results."
  },
  {
    question: "Can you guarantee a specific number of media mentions?",
    answer: "While we can’t guarantee a specific number of placements, we build strong relationships with media outlets and craft compelling pitches to maximize your chances of securing coverage and brand visibility."
  },
  {
    question: "What is the difference between a micro-influencer and a celebrity influencer?",
    answer: "Micro-influencers have smaller but highly engaged and niche audiences, making them excellent for building authentic trust and driving conversions. Celebrity influencers have massive reach and are better for broad brand awareness campaigns."
  }
];

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
            <ServiceFAQ faqs={influencerMarketingFAQs} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
