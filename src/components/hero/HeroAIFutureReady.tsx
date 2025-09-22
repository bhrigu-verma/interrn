import React from 'react';
import Image from 'next/image';

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_ai_future_ready: DataType = {
  title: "AI & Future-Ready Solutions",
  description: `Step into the future with our comprehensive AI-powered solutions. We leverage cutting-edge artificial intelligence to transform your business operations, content creation, and customer experiences. From AI-generated content and smart automations to future-proofing your brand for AI search engines, we ensure your business stays ahead in the rapidly evolving digital landscape.`,
  features: [
    `🤖 AI-based content creation with human touch for scalable results`,
    `⚡ Smart automations that work 24/7 to optimize your workflows`,
    `🔍 AI SEO, GEO, AEO to protect your brand in the AI landscape`,
    `🛡️ Content protection and ownership in the age of AI`,
  ]
}

const { title, description, features } = hero_ai_future_ready

const HeroAIFutureReady = () => {
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
                <Image src="/assets/img/AI Developer.png" alt="ai_future_ready_banner" width={500} height={300} style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
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

export default HeroAIFutureReady;
