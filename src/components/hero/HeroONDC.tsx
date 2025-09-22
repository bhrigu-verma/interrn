import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/ONDC & Retail Media Operations (E-Com Specialist).png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_ondc: DataType = {
  title: "ONDC & Retail Media Operations",
  description: `    Expand your e-commerce reach with next-gen retail marketing.
Retail ads that deliver real sales. We expand your e-commerce reach with next-gen retail marketing, helping you tap into new marketplaces and drive measurable growth.
`,
  features: [
    `🛒 ONDC integration and marketplace optimization`,
    `📊 Retail media advertising across platforms`,
    `⚡ E-commerce operations and inventory management`,
    `📈 Performance tracking and analytics for retail success`,
  ]
}

const { title, description, features } = hero_ondc

const HeroONDC = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">E-commerce excellence through open networks.</div>
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={banner_img} alt="ondc_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
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

export default HeroONDC;
