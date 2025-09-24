"use client";
import React from 'react';
import Image from 'next/image';

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_webapp_development: DataType = {
  title: " E-Commerce operations",
  description: ` Retail ads that deliver real sales.
 Expand your e-commerce reach with next-gen retail marketing.
Retail ads that deliver real sales. We expand your e-commerce reach with next-gen retail marketing, helping you tap into new marketplaces and drive measurable growth.
`,
  features: [
    `🎨 Design (UI/UX & Branding) - Designing experiences, not just screens`,
    `💻 Development (Coding & Technology) - Websites that work as hard as you do`,
    `🚀 Custom Solutions & Integrations - Technology that grows with your business`,
    `⚡ Performance & Optimization - Fast, secure, and scalable platforms`,
  ]
}

const { title, description, features } = hero_webapp_development

const WebAppHero = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      {/* Back Button - styled and positioned like dedicated service pages */}
      <div style={{ position: 'absolute', top: '5.5rem', left: '2rem', zIndex: 100 }}>
        <button
          style={{
            display: 'flex', alignItems: 'center', background: 'rgba(243, 60, 82, 0.12)', color: '#fff', border: '1px solid #F33C52', borderRadius: '30px', padding: '0.5rem 1.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s, color 0.2s, border 0.2s', boxShadow: '0 2px 8px rgba(243, 60, 82, 0.08)'
          }}
          onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/services'}
          className="service-back-btn"
        >
          <span style={{ fontSize: '1.3rem', marginRight: '0.5rem' }}>←</span> Back
        </button>
      </div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
          <h2 className="cs_section_title anim_text_writting" style={{ fontSize: '3.2rem', fontWeight: '400' }}>
            {title}
          </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                  src="/assets/img/ondcc.png" 
                  width={240} 
                  height={240} 
                  alt="ondc_mascot"
                  style={{ maxHeight: '240px', width: 'auto', objectFit: 'contain', borderRadius: 16 }}
                />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default WebAppHero;
