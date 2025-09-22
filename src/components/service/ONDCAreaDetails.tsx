import React from 'react';
import Link from 'next/link';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const ondc_service_data: DataType[] = [
  {
    id: 'One',
    emoji: '',
    title: "ONDC Integration & Setup",
    description: `Complete ONDC network integration, seller onboarding, and marketplace optimization to get your business visible on India's open digital commerce platform.`,
    link: '/services/ondc-retail-media'
  },
  {
    id: 'Two',
    emoji: '',
    title: "Retail Media Advertising",
    description: `Strategic advertising campaigns across major retail platforms and marketplaces to maximize product visibility and drive sales through targeted media placements.`,
    link: '/services/ondc-retail-media-ops'
  },
  {
    id: 'Three',
    emoji: '',
    title: "E-commerce Operations",
    description: `End-to-end e-commerce management including inventory optimization, order fulfillment, customer service, and platform management for seamless operations.`,
    link: '/services/ondc-retail-media'
  },
  {
    id: 'Four',
    emoji: '',
    title: "Analytics & Performance Tracking",
    description: `Comprehensive tracking and analytics for your ONDC and retail media performance with actionable insights to optimize sales and ROI across all channels.`,
    link: '/services/cro-analytics'
  },
]

const ONDCAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our ONDC & Retail Media Solutions
            </h4>
            <p className="cs_mp0 anim_text">
              We provide comprehensive ONDC integration and retail media operations to help your business succeed in the open digital commerce ecosystem. 
              From setup to optimization, we handle every aspect of your e-commerce journey.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {ondc_service_data.map((item, i) => (
                  <Link href={item.link} key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                      {/* emoji removed per site cleanup */}
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
      <section>
        <div className="container">
          <div className="cs_height_50"></div>
          <h4>ONDC & Retail Media - FAQ</h4>
          <div className="cs_faq">
            <div>
              <strong>Can you onboard our store to ONDC?</strong>
              <p>Yes - we manage integration, cataloging, and operations to help you reach customers through ONDC.</p>
            </div>
            <div>
              <strong>Which retail platforms do you support?</strong>
              <p>We support Amazon, Flipkart, Myntra, Nykaa, Etsy, and others, tailoring strategies to each platform.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ONDCAreaDetails;
