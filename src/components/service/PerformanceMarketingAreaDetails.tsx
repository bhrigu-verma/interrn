import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const performance_service_data: DataType[] = [
  {
    id: 'One',
  emoji: '', // You can add a mascot or icon here if you want to show a mascot per channel
    title: "Meta & Google Ads",
    description: `Data-driven campaigns on Facebook, Instagram, and Google that deliver measurable ROI through precise targeting and optimization.`,
    link: '/services/performance-marketing'
  },
  {
    id: 'Two',
  emoji: '',
    title: "LinkedIn & YouTube Marketing",
    description: `Professional B2B campaigns and video marketing strategies that reach decision-makers and drive quality leads for your business.`,
    link: '/services/performance-marketing'
  },
  {
    id: 'Three',
  emoji: '',
    title: "A/B Testing & Optimization",
    description: `Creative matrices, audience layering, and budget pacing strategies that continuously improve campaign performance and reduce costs.`,
    link: '/services/cro-analytics'
  },
  {
    id: 'Four',
  emoji: '',
    title: "Tracking & Analytics",
    description: `Event tracking, UTMs, conversion APIs, and retargeting flows that provide clear insights into campaign performance and ROI.`,
    link: '/services/cro-analytics'
  },
]

const PerformanceMarketingAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Performance Marketing Channels & Strategy
            </h4>
            <p className="cs_mp0 anim_text">
              Where every click counts We blend sharp targeting with fast creative iteration to scale profitable campaigns across platforms. 
              Our data-driven approach ensures your ad spend delivers maximum ROI through continuous optimization and strategic testing.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {performance_service_data.map((item, i) => (
                  <Link href={item.link} key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                      {/* emoji removed sitewide */}
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

export default PerformanceMarketingAreaDetails;
