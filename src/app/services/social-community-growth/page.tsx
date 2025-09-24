'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import SocialGrowthFaq from '@/components/faq/SocialGrowthFaq';
import HeroSocialGrowth from '@/components/hero/HeroSocialGrowth';
import SocialGrowthAreaDetails from '@/components/service/SocialGrowthAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Social & Community Growth Services - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroSocialGrowth />
            <SocialGrowthAreaDetails />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
