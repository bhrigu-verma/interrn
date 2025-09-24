import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const social_growth_data: DataType[] = [
  {
    id: 'One',
    emoji: '',
    title: "Social Media Management",
    description: `We manage, you grow with smart strategy, and measurable growth`,
    link: '/services/social-media-management'
  },
  {
    id: 'Two',
    emoji: '',
    title: "Influencer Marketing & PR",
    description: `Collaborations that click & PR that puts you on the map`,
    link: '/services/influencer-marketing-pr'
  },
  {
    id: 'Three',
    emoji: '',
    title: "UCG & Creator Commerce",
    description: `Turn every purchase into content that builds your brand`,
    link: '/services/ugc-creator-commerce'
  }
];

const SocialGrowthAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Core Services & Growth Strategy
            </h4>
            <p className="cs_mp0 anim_text">
              We offer a comprehensive suite of services designed to grow your brand's presence and foster a thriving online community. 
              Our approach combines authentic engagement with strategic growth tactics to build lasting relationships with your audience.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {social_growth_data.map((item, i) => (
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

export default SocialGrowthAreaDetails;
