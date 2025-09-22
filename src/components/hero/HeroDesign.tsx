import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/uidesign.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_design: DataType = {
  title: "Design (UI/UX & Branding)",
  description: `Great development starts with great design. Our UI/UX experts craft user-friendly, visually appealing, and brand-aligned experiences that your audience loves. We focus on creating designs that not only look beautiful but also drive conversions and enhance user satisfaction.`,
  features: [
    `🎨 Website mockups & landing page design`,
    `📱 Mobile app UI/UX design (Android/iOS)`,
    `🖥️ Dashboard & CRM interface design`,
    `🔧 Wireframing & prototyping (Figma, Adobe XD)`,
  ]
}

const HeroDesign = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">Designing experiences, not just screens.</div>
              <h2 className="cs_section_title anim_text_writting">{hero_design.title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={banner_img} alt="design_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{hero_design.description}</p>
                <ul className="anim_div_ShowDowns">
                  {hero_design.features.map((item, i) => (
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

export default HeroDesign;
