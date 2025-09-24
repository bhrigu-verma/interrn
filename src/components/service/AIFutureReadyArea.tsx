import React from 'react';
import Link from 'next/link';

const ai_future_ready_data = [
  {
    id: '01',
    title: 'AI-Based Content Creation',
    quote: '“Future ready strategies combining human creativity with AI efficiency”',
    link: '/services/ai-based-content',
  },
  {
    id: '02',
    title: 'AI Automations',
    quote: '“AI that works while you sleep.”',
    link: '/services/ai-automations',
  },
  {
    id: '03',
    title: 'AI SEO, GEO, AEO',
    quote: '“Protect your brand in the AI landscape.”',
    link: '/services/ai-seo-geo-aeo-content-protection',
  },
  {
    id: '04',
    title: 'Content Ownership',
    quote: '“Your invisible shield against AI misuse.”',
    link: '/services/ai-seo-geo-aeo-content-protection',
  },
];

const AIFutureReadyArea: React.FC = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50" />
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">Our AI & Future-Ready Solutions</h4>
            <p className="cs_mp0 anim_text">
              We offer comprehensive AI-powered solutions designed to future-proof your
              business. Our cutting-edge technology and strategic approach ensure your
              brand stays ahead in the rapidly evolving AI landscape.
            </p>
          </div>

          <div className="cs_height_80 cs_height_lg_40" />

          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {ai_future_ready_data.map((item, i) => (
                  <div key={item.id} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1" />
                        <div className="cs_work_style_2" />
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>
                    <h6 className="cs_work_title" style={{marginBottom: 8}}>
                      <Link href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>{item.title}</Link>
                    </h6>
                    <div className="cs_work_subtitle" style={{fontWeight:600, marginBottom: 12}}>{item.quote}</div>
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

export default AIFutureReadyArea;
