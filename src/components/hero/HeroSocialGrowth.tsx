import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/Social & Community Growth.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_social_growth: DataType = {
  title: "Social & Community Growth",
  description: `We manage, you grow. We handle every aspect of your social presence, so you can focus on your business while we build your brand's authority. This is about more than just posting; it's about strategic growth, audience engagement, and consistent results.
`,
  features: [
    `1. Social Media Management\nWe manage, you grow with smart strategy, and measurable growth`,
    `2. Influencer Marketing and  PR\nCollaborations that click & PR that puts you on the map`,
    `3. UCG & Creator Commerce\nTurn every purchase into content that builds your brand`,
  ]
}

const { title, description, features } = hero_social_growth

const HeroSocialGrowth = () => {
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
              <h2 className="cs_section_title anim_text_writting">
                 {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={banner_img} alt="social_community_growth_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  <li>
                    <strong>1. Social Media Management</strong><br />
                    We manage, you grow with smart strategy, and measurable growth
                  </li>
                  <li>
                    <strong><span style={{whiteSpace: 'nowrap'}}>2. Influencer Marketing and PR</span></strong><br />
                    <span style={{whiteSpace: 'nowrap'}}>Collaborations that click and PR that puts you on the map</span>
                  </li>
                  <li>
                    <strong>3. UCG & Creator Commerce</strong><br />
                    Turn every purchase into content that builds your brand
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default HeroSocialGrowth;
