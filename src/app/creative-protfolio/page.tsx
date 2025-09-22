
'use client'

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import CreativeContentHero from '@/components/hero/CreativeContentHero';
import CreativeContentServices from '@/components/service/CreativeContentServices';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import Testimonial from '@/components/testimonial/Testimonial';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { creativesContentFAQs } from '@/data/service_faqs';

// export const metadata = {
//   title: "Creative & Content - Shout Out of the Box Digital Agency",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <CreativeContentHero />
            <CreativeContentServices />
            <PortfolioHomeFour />
            <ServiceFAQ faqs={creativesContentFAQs} />
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