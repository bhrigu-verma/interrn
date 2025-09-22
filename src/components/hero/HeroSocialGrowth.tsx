import React from 'react';
import Image from 'next/image';
import banner_img from "../../../public/assets/img/Social & Community Growth.png";

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_social_growth: DataType = {
  title: "Social & Community Growth",
  description: `Social media is the face of your brand & we make sure it shines.
We manage, you grow. We handle every aspect of your social presence, so you can focus on your business while we build your brand's authority. This is about more than just posting; it's about strategic growth, audience engagement, and consistent results.
`,
  features: [
    `📈 Strategic social media management that drives real growth`,
    `🤝 Authentic influencer collaborations and PR placements`,
    `💬 User-generated content campaigns that build trust`,
    `🚀 Community-building strategies that create brand advocates`,
  ]
}

const { title, description, features } = hero_social_growth

const HeroSocialGrowth = () => {
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
                <Image src={banner_img} alt="social_community_growth_banner" style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
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

export default HeroSocialGrowth;
