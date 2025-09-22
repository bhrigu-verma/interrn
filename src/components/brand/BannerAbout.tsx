
import React from 'react';
import Image from 'next/image';

const BannerAbout = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_text_writting">
              From Startup to Success: <br/>We Build the Bridge
            </h2>
          </div>
          <div className="cs_section_heading_right" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="cs_animated_badge">
              <div className="rounded_text rotating">
                <svg viewBox="0 0 200 200">
                  <path id="textPath" d="M 100,15 A 85,85 0 1 1 99.9,15"
                    fill="none" strokeWidth="0"></path>
                  <g fontSize="20px" fontWeight="600">
                    <text textAnchor="start">
                      <textPath className="coloring" href="#textPath" startOffset="0%">
                        SHOUT OTB • SHOUT OTB • SHOUT OTB • SHOUT OTB • 
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="position-absolute cs_ceneter_text" style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image 
                  src="/assets/img/logoheader.png" 
                  alt="Shout OTB Logo" 
                  width={70}
                  height={70}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BannerAbout;