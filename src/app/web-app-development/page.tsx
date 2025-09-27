'use client'

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import WebAppHero from '@/components/hero/WebAppHero';
import WebAppServices from '@/components/service/WebAppServices';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import Testimonial from '@/components/testimonial/Testimonial';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { developmentCodingTechnologyFAQs } from '@/data/service_faqs';

// export const metadata = {
//   title: "Web, App & Custom Development - Shout Out of the Box Digital Agency",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <WebAppHero />
            <WebAppServices />
            <PortfolioHomeFour />
            <ServiceFAQ faqs={developmentCodingTechnologyFAQs} />
            <Testimonial />
            <BlogHomeOne style_2={true} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;