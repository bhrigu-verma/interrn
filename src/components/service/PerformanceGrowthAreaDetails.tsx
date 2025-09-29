import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const performance_growth_data: DataType[] = [
  {
    id: '1',
    emoji: '',
    title: "CRO & Analytics Hub",
    description: `A structured approach to turn traffic into sales.`,
    link: '/services/cro-analytics'
  },
  {
    id: '2',
    emoji: '',
    title: "WhatsApp Marketing",
    description: `Turn every chat into an opportunity and grow your business effortlessly.`,
    link: '/services/whatsapp-marketing'
  },
  {
    id: '3',
    emoji: '',
    title: "UGC & Creator Commerce",
    description: `Turn every purchase into content that builds your brand`,
    link: '/services/ugc-creator-commerce'
  }
];

const PerformanceGrowthAreaDetails = () => {
  return (
    <>
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
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Performance & Growth Solutions
            </h4>
            <p className="cs_mp0 anim_text">
              We deliver comprehensive performance and growth services that combine cutting-edge technology with proven strategies. 
              Our data-driven approach ensures every investment delivers measurable results and sustainable business growth.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {performance_growth_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                      <div className="cs_service_emoji" style={{
                        fontSize: '2.5rem',
                        position: 'absolute',
                        top: '20px',
                        right: '20px'
                      }}>
                        {item.emoji}
                      </div>
                    </div>

                    {i < 4 ? (
                      <h6 className="cs_work_title">
                        <Link href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>{item.title}</Link>
                      </h6>
                    ) : (
                      <h6 className="cs_work_title">{item.title}</h6>
                    )}
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerformanceGrowthAreaDetails;
