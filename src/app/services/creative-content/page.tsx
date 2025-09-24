'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import CreativeContentFaq from '@/components/faq/CreativeContentFaq';
import HeroCreativeContent from '@/components/hero/HeroCreativeContent';
import CreativeContentAreaDetails from '@/components/service/CreativeContentAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Creative & Content Services - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroCreativeContent />
            <CreativeContentAreaDetails />
            {/* Inserted detailed service content per request */}
            {/* <section className="container cs_height_50"> ... </section> */}
            {/* // <CreativeContentFaq /> */}
            <AboutHomeFour />
            <div style={{ padding: '24px 0 0 24px' }}>
              <Link href="/services" style={{ textDecoration: 'none', color: '#F33C52', fontWeight: 600, fontSize: 18 }}>
                ← Back
              </Link>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
