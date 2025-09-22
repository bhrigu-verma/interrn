import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/Web Developer.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_development: DataType = {
  title: "Development (Coding & Technology)",
  description: `Once the designs are locked, our developers bring them to life with robust, scalable code. We ensure speed, security, and performance for every platform. From web applications to mobile apps and enterprise systems, we build technology that drives your business forward.`,
  features: [
    `🌐 Website development (corporate, e-commerce, landing pages)`,
    `📱 Mobile app development (Android, iOS, hybrid)`,
    `⚙️ Custom CRM & ERP solutions`,
    `🔧 API integrations & automation`,
  ]
}

const HeroDevelopment = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">Built for speed, security, and scale.</div>
              <h2 className="cs_section_title anim_text_writting">{hero_development.title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={banner_img} alt="development_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{hero_development.description}</p>
                <ul className="anim_div_ShowDowns">
                  {hero_development.features.map((item, i) => (
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

export default HeroDevelopment;
