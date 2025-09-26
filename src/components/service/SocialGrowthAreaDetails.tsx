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
    id: '1',
    emoji: '',
    title: "Social Media Management",
    description: `We manage, you grow with smart strategy, and measurable growth`,
    link: '/services/social-media-management'
  },
  {
    id: '2',
    emoji: '',
    title: "Influencer Marketing & PR",
    description: `Collaborations that click & PR that puts you on the map`,
    link: '/services/influencer-marketing-pr'
  },
  {
    id: '3',
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
                  <Link href={item.link} key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 24 }}>
                    {/* Mascot area (if you want to add an image, place it here) */}
                    <div className="cs_card cs_style_1" style={{ flex: '0 0 72px', minWidth: 72, minHeight: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>
                    {/* Text content on the right */}
                    <div style={{ flex: 1 }}>
                      <h6 className="cs_work_title" style={{ marginBottom: 8 }}>{item.title}</h6>
                      <p className="cs_work_subtitle" style={{ margin: 0 }}>{item.description}</p>
                    </div>
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
