'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import DetailsBanner from '@/components/details/DetailsBanner';
import AIFutureReadyFaq from '@/components/faq/AIFutureReadyFaq';
import HeroAIFutureReady from '@/components/hero/HeroAIFutureReady';
import AIFutureReadyArea from '@/components/service/AIFutureReadyArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "AI & Future-Ready Solutions - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroAIFutureReady />
            <AIFutureReadyArea />
            {/* <AIFutureReadyFaq /> */}
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
