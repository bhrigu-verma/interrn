 
 'use client'


import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import ServiceHomeOneExtended from '@/components/service/ServiceHomeOneExtended';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';


// export const metadata = {
//   title: "Service Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroService hideList />
            <ServiceHomeOneExtended compact hideHeading />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;