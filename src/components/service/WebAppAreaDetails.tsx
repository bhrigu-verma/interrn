'use client'
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const webapp_development_data: DataType[] = [
  {
    id: 'One',
    emoji: '',
    title: "Design (UI/UX & Branding)",
    description: `“Designing experiences, not just screens.”`,
    link: "/services/design-ui-ux-branding"
  },
  {
    id: 'Two',
    emoji: '',
    title: "Web Development",
    description: `“Websites that work as hard as you do.”`,
    link: "/services/web-development"
  },
];

const WebAppAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Web & App Development Solutions
            </h4>
            <p className="cs_mp0 anim_text">
              We deliver comprehensive web and app development services that combine innovative design with robust technology. 
              Our development approach ensures every project is built for performance, scalability, and long-term success.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {webapp_development_data.map((item, i) => (
                  <Link href={item.link} key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>
                    <h6 className="cs_work_title">{item.title}</h6>
                    <div className="cs_work_subtitle" style={{ whiteSpace: 'pre-line' }}>{item.description}</div>
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

export default WebAppAreaDetails;
