'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import PerformanceGrowthFaq from '@/components/faq/PerformanceGrowthFaq';
import HeroPerformanceGrowth from '@/components/hero/HeroPerformanceGrowth';
import PerformanceGrowthAreaDetails from '@/components/service/PerformanceGrowthAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Performance & Growth Services - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroPerformanceGrowth />
            <PerformanceGrowthAreaDetails />
            {/* <PerformanceGrowthFaq /> */}
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
