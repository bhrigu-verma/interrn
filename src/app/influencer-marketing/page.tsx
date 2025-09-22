'use client'

import React from 'react';
import InfluencerMarketingDetails from '../../components/service/InfluencerMarketingDetails';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { socialCommunityGrowthFAQs } from '@/data/service_faqs';

const InfluencerMarketingPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <InfluencerMarketingDetails />
            <ServiceFAQ faqs={socialCommunityGrowthFAQs.slice(3, 6)} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default InfluencerMarketingPage;