import React from 'react';
import Link from 'next/link';

const creative_services_data = [
  {
    id: 1,
    number: "01",
  emoji: "",
    title: "Graphic Designing",
    headline: "Designs That Define Your Brand's First Impression.",
    description: "We build a powerful visual identity with stunning graphics that speak for your brand. From foundational logos and comprehensive brand kits to engaging social media posts and professional marketing materials, we design everything that makes your business look credible and memorable.",
    services: [
      "Logos & Brand Kits: Crafting the visual foundation of your brand for lasting impact.",
      "Social Media Creatives: Designing eye-catching posts, stories, and banners for all your platforms.",
      "Marketing & Sales Collateral: Creating professional brochures, flyers, business cards, and presentations."
    ]
  },
  {
    id: 2,
    number: "02",
  emoji: "",
    title: "Video Editing & Motion Graphics",
    headline: "A Story That Moves Your Audience.",
    description: "We bring your brand's narrative to life with professional video editing and dynamic motion graphics. We transform raw footage into cinematic stories that captivate, engage, and convert, whether it's a short reel for social media or a polished corporate advertisement.",
    services: [
      "Reels & Shorts: Producing trendy, fast-paced videos optimized for maximum social media reach.",
      "2D/3D & Logo Animations: Adding a layer of professionalism with dynamic logo animations and graphics.",
      "Corporate Videos & Ads: Developing high-quality video content for ad campaigns, documentaries, and explainer videos."
    ]
  },
  {
    id: 3,
    number: "03",
  emoji: "",
    title: "Copywriting",
    headline: "From Captions to Campaigns-We Write It All.",
    description: "Our words are crafted to connect, sell, and inspire action. We develop a consistent and compelling brand voice across all your communications, from catchy social media captions to persuasive ad campaigns and value-driven website content.",
    services: [
      "Website Copy & Blogs: Writing SEO-friendly content that informs your audience and drives conversions.",
      "Ad & Sales Copy: Crafting persuasive copy for digital ads and sales funnels that gets results.",
      "Email & Social Media Content: Developing engaging captions, reel scripts, and email newsletters that build a loyal community."
    ]
  }
];

const CreativeContentServices = () => {
  return (
    <>
      <section className="cs_shape_wrap_4 cs_parallax">
        <div className="cs_shape_1"></div>
        <div className="cs_shape_2"></div>
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                  Our Specializations & Process
                </h3>
                <div className="cs_height_5 cs_height_lg_5"></div>
                <h2 className="cs_section_title anim_heading_title">
                  Here's how our creative engine works, breaking down our core services into a clear, four-step process.
                </h2>
              </div>
              <div className="cs_height_55 cs_height_lg_30"></div>
            </div>
          </div>
          
          <div className="row">
            {creative_services_data.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="cs_service cs_style_1 cs_pt_25 cs_pl_25 cs_pr_25 cs_pb_15 bg-white cs_transition_4 shadow cs_mb_25">
                  <div className="cs_service_iconbox d-flex align-items-center cs_mb_20">
                    <div className="cs_service_icon d-flex align-items-center justify-content-center cs_rounded_5 cs_mr_15 cs_transition_4 flex-none bg-accent">
                      {/* emoji removed sitewide */}
                    </div>
                    <div>
                      <h3 className="cs_lh_base cs_fs_20 cs_fs_lg_18 m-0">
                        <Link href="/service-details" className="inline-block">
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  
                  <h4 className="cs_service_title cs_fs_18 cs_mb_10" style={{ color: 'var(--accent-color)' }}>
                    {service.headline}
                  </h4>
                  
                  <p className="cs_service_subtitle cs_fs_14 cs_lh_base m-0 cs_mb_15">
                    {service.description}
                  </p>
                  
                  <div className="cs_service_features">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="cs_feature_item cs_mb_10">
                        <p className="cs_fs_14 cs_lh_base m-0" style={{ 
                          fontSize: '0.875rem',
                          lineHeight: '1.4',
                          color: '#666'
                        }}>
                          <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs_height_25 cs_height_lg_25"></div>
              </div>
            ))}
          </div>
          
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="cs_height_40 cs_height_lg_30"></div>
              <div className="cs_hero_btn_wrap d-inline-flex cs_column_gap_15 cs_row_gap_15 cs_transition_5">
                <Link href="/portfolio" className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                  <span>View Our Creative Portfolio</span>
                </Link>
                <Link href="/contact" className="cs_btn cs_style_2 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                  <span>Start Your Project Today</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_60"></div>
      </section>
    </>
  );
};

export default CreativeContentServices;
