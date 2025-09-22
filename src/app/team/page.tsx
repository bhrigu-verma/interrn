 
'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import TeamArea from '@/components/team/TeamArea';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';


// export const metadata = {
//   title: "Team Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamArea />
            <TeamHomeTwo style_2={true} style_3={true} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;