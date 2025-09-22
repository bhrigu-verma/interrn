"use client"

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { getServiceBySlug } from '@/data/service_detail_data';
import { aiFutureReadyFAQs } from '@/data/service_faqs';

export default function Page() {
  const serviceData = getServiceBySlug('content-ownership');

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title={serviceData.title}
              tagline={serviceData.tagline}
              image={serviceData.image}
              intro={serviceData.intro}
              description={serviceData.description}
              sections={serviceData.sections}
              cta={serviceData.cta}
            />
            <ServiceFAQ faqs={aiFutureReadyFAQs.slice(6, 8)} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
