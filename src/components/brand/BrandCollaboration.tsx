import React from 'react';

const BrandCollaboration = () => {
  const brands = [
    'Astrowithasha',
    'drsaumya', 
    'Lalsa',
    'Saregamapa',
    'trayksh yoga'
  ];

  return (
    <>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <section className="cs_partner_logo_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Trusted Partnerships
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Brands We Collaborate With
              </h2>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_30"></div>
          <div className="cs_partner_logo_wrap">
            <div className="row justify-content-center">
              {brands.map((brand, index) => (
                <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                  <div className="cs_partner_logo anim_div_ShowDowns">
                    <div className="cs_partner_logo_in text-center">
                      <h4 className="cs_brand_name mb-0" style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--accent)',
                        textTransform: 'capitalize',
                        padding: '20px 10px',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {brand}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>
    </>
  );
};

export default BrandCollaboration;
