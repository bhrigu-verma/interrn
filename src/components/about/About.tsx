import React from 'react';

interface DataType {
  subtitle: string;
  title: string;
  des: string;
}
const about_content: DataType = {
  subtitle: `Our Story`,
  title: `Sharp Strategies, Bold Moves, Real Results</br> Redefining Marketing & Branding Excellence`,
  des: ` We handle the hustle while you handle the results.
At Shout, every idea starts with a question, every move is backed by proof. We don’t just create - we research, test, refine, and deliver campaigns built to win. Bold, yes. Reckless, never.
We were born out of a gap we couldn’t ignore. Big agencies moved too slow. Freelancers worked in silos. Brands were stuck waiting while opportunities passed. We built a model that solved it: always-on, insight-driven, fully human creativity - backed by automation that never misses a beat.
From day one, our goal has been the same: make marketing bold, fast, and smart - helping brands not just keep up with change, but stay ahead of it.
`,
}
const { subtitle, title, des } = about_content

const About = () => {
  return (
    <>
      <style jsx>{`
        .cs_section_title_3 {
          font-size: 2.2rem !important;
          line-height: 1.3 !important;
        }
        
        @media (max-width: 768px) {
          .cs_section_title_3 {
            font-size: 1.8rem !important;
            line-height: 1.4 !important;
          }
        }
        
        @media (max-width: 480px) {
          .cs_section_title_3 {
            font-size: 1.5rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text" style={{ textAlign: 'center' }}>
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide" 
                          style={{ 
                            fontSize: '2.2rem', 
                            lineHeight: '1.3',
                            margin: '0 auto'
                          }}
                          dangerouslySetInnerHTML={{ __html: title }}>
                      </h3>
                    </div>
                  </div>

                  <div className="anim_div_ShowRightSide" style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                    <p className="cs_ternary_color" style={{ marginBottom: '1.5rem', fontWeight: '500', fontSize: '1rem', maxWidth: '900px', textAlign: 'justify' }}>
                      {des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;