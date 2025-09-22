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
    description: `We put your brand in front of the right audience and drive them to take action. Our data-driven ad strategies ensure that every click counts, turning your ad spend into measurable revenue.`,
    link: '/services/performance-marketing'
  },
  {
    id: 'Two',
    emoji: '',
    title: "AI-Based Content & Automation",
    description: `AI tools with human touch. Leverage AI voiceovers, avatars, ad creatives, blog generation, and automation workflows that scale your content and save time while you sleep.`,
    link: '/services/ai-seo-geo-aeo-content-protection'
  },
  {
    id: 'Three',
    emoji: '',
    title: "CRO & Analytics Hub",
    description: `Conversions aren't luck - they're strategy. Apply proven methodologies to analyze funnels, run controlled experiments, and deliver measurable improvements to your KPIs.`,
    link: '/services/cro-analytics'
  },
  {
    id: 'Four',
    emoji: '',
    title: "Web & App Development",
    description: `Websites that work as hard as you do. Design and develop fast, scalable, and growth-optimized websites, apps, and CRMs with custom solutions that perform.`,
    link: '/services/web-app-development'
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
                  <Link href={item.link} key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit' }}>
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

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </Link>
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
