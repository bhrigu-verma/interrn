'use client'

import React from 'react';
import WebDevelopmentDetails from '../../components/service/WebDevelopmentDetails';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { webAppDevelopmentFAQs } from '@/data/service_faqs';

const WebDevelopmentPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <WebDevelopmentDetails />
            <ServiceFAQ faqs={webAppDevelopmentFAQs.slice(0, 3)} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebDevelopmentPage;