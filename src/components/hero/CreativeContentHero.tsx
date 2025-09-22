import React from 'react';
import Image from 'next/image';
import hero_img from '@/assets/img/creative_banner_img.jpg';

const hero_data = {
  title_1: "Creative",
  title_2: "& Content",
  tagline: "We design, write, and create content that builds strong brands.",
  des: `From striking visuals to compelling words, our creative team ensures your brand communicates with clarity, creativity, and consistency. We merge artistic vision with strategic marketing to produce content that not only captivates your audience but also achieves your business goals.`
}
const { title_1, title_2, tagline, des } = hero_data;

const CreativeContentHero = () => {
  return (
    <>
      <section>
        <div className="cs_hero cs_style3 cs_bg_color">
          <div className="cs_banner_img">
            <Image src={hero_img} className="h-100 w-100" alt="creative_content_banner" />
          </div>
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title anim_banner_text_left">{title_1}</h1>
              <h1 className="cs_hero_subTitle anim_banner_text_right">
                {title_2}
              </h1>
              <h3 className="cs_hero_tagline anim_banner_text_left" style={{ 
                fontSize: '1.5rem', 
                fontWeight: '500', 
                color: 'var(--accent-color)', 
                marginBottom: '1rem' 
              }}>
                {tagline}
              </h3>
              <p className="cs_hero_p cs_subtext anim_subtext">{des}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default CreativeContentHero;
