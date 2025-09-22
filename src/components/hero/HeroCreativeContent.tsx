import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/content creation.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_creative_content: DataType = {
  title: "Creative & Content Services",
  description: `We don’t just create content, we craft experiences that make your brand unforgettable.
We design, write, and create content that not only looks great but also builds strong, memorable brands. Our team ensures your brand communicates with clarity, creativity, and consistency across every channel.`,
  features: [
    `🎨 Professional graphic design that defines your brand's visual identity`,
    `🎬 Video editing and motion graphics that tell your story`,
    `✍️ Compelling copywriting from captions to full campaigns`,
    `🚀 Strategic content that drives engagement and conversions`,
  ]
}

const { title, description, features } = hero_creative_content

const HeroCreativeContent = () => {
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
                <Image src={banner_img} alt="creative_content_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
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

export default HeroCreativeContent;
