'use client'

import React from 'react';
import AISEODetails from '../../components/service/AISEODetails';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { aiSeoGeoAeoFAQs } from '@/data/service_faqs';

const AISEOPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <AISEODetails />
            <ServiceFAQ faqs={aiSeoGeoAeoFAQs} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default AISEOPage;