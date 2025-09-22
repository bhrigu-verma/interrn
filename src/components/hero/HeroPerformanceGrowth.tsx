import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/Perfornmence and growth.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_performance_growth: DataType = {
  title: "Performance & Growth",
  description: `Drive measurable results with our comprehensive performance and growth services. We combine data-driven strategies, cutting-edge AI tools, and proven marketing techniques to accelerate your business growth. From performance marketing that maximizes ROI to AI automations that work around the clock, we deliver solutions that scale your business efficiently and effectively.`,
  features: [
    `📊 Performance marketing where every click counts and ROI is maximized`,
    `🤖 AI-powered content creation and automation tools for scaling`,
    `🚀 CRO & analytics that turn data into decisions and conversions`,
    `💼 Custom web & app development solutions that grow with your business`,
  ]
}

const { title, description, features } = hero_performance_growth

const HeroPerformanceGrowth = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
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
                <Image src={banner_img} alt="performance_growth_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
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

export default HeroPerformanceGrowth;
