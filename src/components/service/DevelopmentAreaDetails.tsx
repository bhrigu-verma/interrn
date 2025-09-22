import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const development_service_data: DataType[] = [
  {
    id: 'One',
    emoji: '',
    title: "Website Development",
    description: `From corporate sites to e-commerce platforms and high-converting landing pages. We build fast, secure, and scalable web solutions.`,
    link: '/services/web-app-development'
  },
  {
    id: 'Two',
    emoji: '',
    title: "Mobile App Development",
    description: `Native Android, iOS, and hybrid applications that deliver exceptional user experiences across all devices and platforms.`,
    link: '/services/web-app-development'
  },
  {
    id: 'Three',
    emoji: '',
    title: "Custom CRM & ERP Solutions",
    description: `Tailored business management systems that streamline your operations and boost productivity with automation.`,
    link: '/services/web-app-custom-solutions'
  },
  {
    id: 'Four',
    emoji: '',
    title: "API Integration & Automation",
    description: `Seamless third-party integrations, workflow automation, and performance optimization to scale your business efficiently.`,
    link: '/services/development-coding-technology'
  },
]

const DevelopmentAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Development Specializations & Tech Stack
            </h4>
            <p className="cs_mp0 anim_text">
              We build robust, scalable solutions using cutting-edge technologies. From web platforms to mobile apps and custom enterprise systems, 
              our development team delivers code that's built for speed, security, and scale.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {development_service_data.map((item, i) => (
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

export default DevelopmentAreaDetails;
