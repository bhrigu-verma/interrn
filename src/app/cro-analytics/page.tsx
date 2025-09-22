'use client'

import React from 'react';
import CROAnalyticsDetails from '@/components/service/CROAnalyticsDetails';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const CROAnalyticsPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <CROAnalyticsDetails />
            <ServiceDetailsFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default CROAnalyticsPage;