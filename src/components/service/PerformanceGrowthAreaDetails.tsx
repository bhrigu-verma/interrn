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
    id: 'One',
    emoji: '',
    title: "Performance Marketing",
    description: `Data-driven campaigns that deliver revenue, not just reach`,
    link: '/services/performance-marketing'
  },
  {
    id: 'Two',
    emoji: '',
    title: "CRO & Analytics Hub",
    description: `A structured approach to turn traffic into sales.`,
    link: '/services/cro-analytics'
  },
  {
    id: 'Three',
    emoji: '',
    title: "WhatsApp Marketing",
    description: `Turn every chat into an opportunity and grow your business effortlessly.`,
    link: '/services/whatsapp-marketing'
  },
  {
    id: 'Four',
    emoji: '',
    title: "Influencer Marketing & PR",
    description: `Collaborations that click and PR that puts you on the map`,
    link: '/services/influencer-marketing'
  },
  {
    id: 'Five',
    emoji: '',
    title: "UGC & Creator Commerce",
    description: `Turn every purchase into content that builds your brand`,
    link: '/services/ugc-creator-commerce'
  }
];

const PerformanceGrowthAreaDetails = () => {
  return (
    <>
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
