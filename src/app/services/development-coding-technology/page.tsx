'use client'


import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { getServiceBySlug } from '@/data/service_detail_data';
import { developmentCodingTechnologyFAQs } from '@/data/service_faqs';

export default function Page() {
  const serviceData = getServiceBySlug('development');
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
            <ServiceFAQ faqs={serviceData.faqs || developmentCodingTechnologyFAQs} />
            <div style={{ padding: '24px 0 0 24px' }}>
              <Link href="/services" style={{ textDecoration: 'none', color: '#F33C52', fontWeight: 600, fontSize: 18 }}>
                ← Back
              </Link>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
