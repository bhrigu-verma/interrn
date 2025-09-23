'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import CreativeContentFaq from '@/components/faq/CreativeContentFaq';
import HeroCreativeContent from '@/components/hero/HeroCreativeContent';
import CreativeContentAreaDetails from '@/components/service/CreativeContentAreaDetails';
import Wrapper from '@/layouts/Wrapper';
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
            {/* <section className="container cs_height_50">
              <div className="cs_section_heading cs_style_1">
                <h2 className="cs_section_title">Creatives & Content (Head of Creatives & Content - Brand Visionary)</h2>
                <p>
                  We don’t just create content, we craft experiences that make your brand unforgettable.
                </p>
                <p>
                  We design, write, and create content that not only looks great but also builds strong, memorable brands. Our team ensures your brand communicates with clarity, creativity, and consistency across every channel. Let’s Make Your Brand Unforgettable.
                </p>
                <h3>Graphic Designing</h3>
                <p>
                  Designs so bold that your brand never whispers, it SHOUTS.
                </p>
                <p>
                  Our graphic design services build a strong visual identity that not only looks great but also makes your brand instantly recognizable and trustworthy. We don't just create assets; we craft a visual language that speaks directly to your audience, turning first glances into lasting connections.
                </p>
                <ul>
                  <li>Core Brand Assets: Logos, brand kits, business cards, presentations, brochures, flyers, banners.</li>
                  <li>Social & Digital Creatives: Platform-ready graphics and animations optimized for engagement.</li>
                  <li>Specialized Design: Packaging, merchandise, custom iconography & illustration.</li>
                </ul>

                <h3>Video Editing & Motion Graphics</h3>
                <p>Story that moves your audience. We bring your stories to life with professional video content that captivates and moves your audience.</p>
                <p>
                  From quick social clips to in-depth corporate videos, we make sure your message is seen and heard. We craft stories that move, persuade, and inspire. From a quick social media clip to a full-length documentary, we handle every detail of the post-production process.
                </p>
                <ul>
                  <li>Corporate & Commercial Videos</li>
                  <li>Documentaries & Explainer Videos</li>
                  <li>Animation & Visual Effects (2D & 3D, VFX)</li>
                </ul>

                <h3>Copywriting</h3>
                <p>
                  Words are powerful, but the right words are what turn visitors into customers.
                </p>
                <p>
                  We craft compelling copy that doesn't just inform—it connects, sells, and inspires. From the headline of your homepage to the final line of an email, we write with a purpose: to build your brand and drive your business forward.
                </p>
                <ul>
                  <li>Website & Authority Content: SEO-optimized copy, blogs, case studies.</li>
                  <li>Ad & Sales Copy: Persuasive copy for campaigns and funnels.</li>
                  <li>Email & Social: Engaging copy for newsletters and social posts.</li>
                  <li>Specialized Content: Case studies, white papers, scripts, product descriptions.</li>
                </ul>

              </div>
            // </section> */}

            {/* // <CreativeContentFaq /> */}
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
