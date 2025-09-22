'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ServiceMascotType {
  id: number;
  img: string;
  name: string;
  description: string;
  link: string;
}

const service_mascots: ServiceMascotType[] = [
  {
    id: 1,
    img: '/assets/img/content creation.png',
    name: 'Content & Design Specialist',
    description: 'Creative Content & Design Solutions',
    link: '/services/creative-content'
  },
  {
    id: 2,
    img: '/assets/img/uidesign.png',
    name: 'Social Growth Expert',
    description: 'Social Media & Community Building',
    link: '/services/social-community-growth'
  },
  {
    id: 3,
    img: '/assets/img/Whatsapp marketer (2).png',
    name: 'Performance Growth Manager',
    description: 'Performance Marketing & Analytics',
    link: '/services/performance-growth'
  },
  {
    id: 4,
    img: '/assets/img/Video editing.png',
    name: 'AI Solutions Architect',
    description: 'AI & Future-Ready Technologies',
    link: '/services/ai-future-ready'
  },
  {
    id: 5,
    img: '/assets/img/Web Developer.png',
    name: 'Development Specialist',
    description: 'Web, App & Custom Development',
    link: '/services/web-app-development'
  },
  {
    id: 6,
    img: '/assets/img/ONDC.png',
    name: 'E-Commerce Expert',
    description: 'ONDC & Retail Media Operations',
    link: '/services/ondc-retail-media'
  }
];

type DataType = {
  sub_title: string;
  title: string;
}

const team_content: DataType = {
  sub_title: "Our Services",
  title: "Our Excellence Team That Can Digitalize Your Brand"
}

const { sub_title, title } = team_content;

const ServiceMascots = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {title}
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1">
                <span>View All Services</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>

          <div className="cs_team_section anim_blog" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {service_mascots.map((item) =>
              <div key={item.id} className="cs_team_img" style={{
                textAlign: 'center',
                background: '#fff',
                borderRadius: '20px',
                padding: '30px 20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <Link href={item.link} style={{ textDecoration: 'none' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <Image 
                      src={item.img} 
                      alt={item.name}
                      width={80}
                      height={80}
                      style={{
                        objectFit: 'contain',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                </Link>
                <div className="cs_team_text">
                  <Link href={item.link} style={{ textDecoration: 'none' }}>
                    <h6 className="cs_team_text_title" style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: '#333'
                    }}>{item.name}</h6>
                  </Link>
                  <p className="cs_team_subtitle" style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.4'
                  }}>{item.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceMascots;
