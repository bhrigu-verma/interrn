import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const design_service_data: DataType[] = [
  {
    id: 'One',
    emoji: '',
    title: "Website & Landing Page Design",
    description: `Beautiful, conversion-focused designs that capture your brand essence and drive user engagement across all platforms.`,
    link: '/services/graphic-designing'
  },
  {
    id: 'Two',
    emoji: '',
    title: "Mobile App UI/UX Design",
    description: `Intuitive Android and iOS app designs that deliver exceptional user experiences with seamless navigation and interactions.`,
    link: '/services/design-ui-ux-branding'
  },
  {
    id: 'Three',
    emoji: '',
    title: "Dashboard & CRM Interface Design",
    description: `Professional enterprise interfaces that simplify complex workflows and enhance productivity for your business operations.`,
    link: '/services/design-ui-ux-branding'
  },
  {
    id: 'Four',
    emoji: '',
    title: "Wireframing & Prototyping",
    description: `Strategic planning through wireframes and interactive prototypes using Figma and Adobe XD to validate concepts before development.`,
    link: '/services/design-ui-ux-branding'
  },
]

const DesignAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Design Specializations & Process
            </h4>
            <p className="cs_mp0 anim_text">
              We design experiences, not just screens. Our UI/UX experts craft user-friendly, visually appealing, and brand-aligned 
              experiences that your audience loves. From websites to mobile apps and enterprise dashboards, we create designs that work.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {design_service_data.map((item, i) => (
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

export default DesignAreaDetails;
