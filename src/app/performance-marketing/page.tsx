import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { performanceMarketingFAQs } from '@/data/service_faqs';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title="Performance Marketing"
              tagline="Where every click counts"
              image="/assets/img/performancemarketing.png"
              intro="Data‑driven ads with creative that converts. We blend sharp targeting with fast creative iteration to scale profitable campaigns across platforms."
              description="Every click, every ad, and every penny matters. We use data-driven strategies to maximize your ROI, so you can stop guessing and start growing. Our team turns traffic into profit and helps you achieve your business goals with precision."
              sections={[
                { title: 'We run Targeted Ad Campaigns on ', content: ['Meta', 'Google', 'LinkedIn', 'YouTube', 'Programmatic display'] },
                { title: 'Optimization stack', content: ['A/B testing and creative matrices', 'Audience layering and budget pacing', 'Event tracking, UTMs, and conversion APIs', 'Retargeting and lifecycle nurture flows'] }
              ]}
            />
            <ServiceFAQ faqs={performanceMarketingFAQs} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
