


import AboutHomeFour from '@/components/about/AboutHomeFour';
import WebAppHero from '@/components/hero/WebAppHero';
// import WebAppAreaDetails from '@/components/service/WebAppAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export default function OndcRetailMediaPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <WebAppHero />
            {/* ONDC Services Section */}
            <section>
              <div className="container">
                <div className="cs_work cs_work_text">
                  <h4 className="anim_heading_title">
                    Our E-Commerce Operations Solutions
                  </h4>
                  <p className="cs_mp0 anim_text">
                    We deliver end-to-end e-commerce operations that combine next-gen retail marketing with seamless process management. Our approach ensures your online business is optimized for reach, efficiency, and long-term profitability.
                  </p>
                </div>
                <div className="cs_height_80 cs_height_lg_40"></div>
                <div>
                  <div className="cs_work cs_work_1">
                    <div className="cs_card_work cs_style_1">
                      <div className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                        <div className="cs_card cs_style_1">
                          <div className="cs_posagation">
                            <div className="cs_work_style_1"></div>
                            <div className="cs_work_style_2"></div>
                          </div>
                          <div className="cs_stroke_number"><span>01</span></div>
                        </div>
                        <h6 className="cs_work_title">
                          <Link href="/services/ondc-onboarding" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Onboarding & Catalog Optimization
                          </Link>
                        </h6>
                        <div className="cs_work_subtitle" style={{fontWeight:600, marginBottom: 12}}>
                          Get your brand on ONDC and optimize listings across all major e-commerce platforms.
                        </div>
                      </div>
                      <div className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                        <div className="cs_card cs_style_1">
                          <div className="cs_posagation">
                            <div className="cs_work_style_1"></div>
                            <div className="cs_work_style_2"></div>
                          </div>
                          <div className="cs_stroke_number"><span>02</span></div>
                        </div>
                        <h6 className="cs_work_title">
                          <Link href="/services/retail-ad-campaigns" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Retail Ad Campaigns
                          </Link>
                        </h6>
                        <div className="cs_work_subtitle" style={{fontWeight:600, marginBottom: 12}}>
                          Performance-focused ad campaigns on top retail platforms, managed for maximum sales.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
}
