
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import BrandCollaboration from '@/components/brand/BrandCollaboration';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import VideoPopup from '@/components/modals/VideoPopup';


// export const metadata = {
//   title: "Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeThree />
            {/* <BrandCollaboration /> */}
            <MarqueeAreaHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            {/* <PortfolioHomeOne /> */}
            {/* <AwardsHomeOne /> */}
            <Testimonial />
            {/* <FunFactHomeOne /> */}
            {/* <VideoHomeOne setIsVideoOpen={setIsVideoOpen} /> */}
            {/* <BlogHomeOne /> */}
            <SubscribeHomeOne />
            <BrandHomeOne style_2={false} />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;