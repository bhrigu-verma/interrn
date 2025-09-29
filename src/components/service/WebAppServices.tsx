import React from 'react';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const webapp_development_data: DataType[] = [
  {
    id: 'One',
  emoji: '',
    title: "Design (UI/UX & Branding)",
    description: `Designing experiences, not just screens . `,
  },
  {
    id: 'Two',
  emoji: '',
    title: "Web development",
    description: `Websites that work as hard as you do. Once designs are locked, our developers bring them to life with robust, scalable code. We ensure speed, security, and performance for every platform - from simple websites to complex applications.`,
  },
  {
    id: 'Three',
  emoji: '',
    title: "Custom Solutions & Integrations",
    description: `Technology that grows with your business. We build custom solutions that integrate seamlessly with your existing systems and scale as you grow. From automation to enterprise applications, we solve unique challenges.`,
  },
  {
    id: 'Four',
  emoji: '',
    title: "Performance & Optimization",
    description: `Fast, secure, and always accessible. We provide complete hosting solutions, performance optimization, and ongoing maintenance to ensure your digital platforms run smoothly and deliver exceptional user experiences.`,
  },
]

const WebAppServices = () => {
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
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebAppServices;
