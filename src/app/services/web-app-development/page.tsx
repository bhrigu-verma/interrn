import AboutHomeFour from '@/components/about/AboutHomeFour';


import WebAppHero from '@/components/hero/WebAppHero';
import WebAppAreaDetails from '@/components/service/WebAppAreaDetails';
import WebAppFAQ from '@/components/faq/WebAppFAQ';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';


export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <WebAppHero />
            <WebAppAreaDetails />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
