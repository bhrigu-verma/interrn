import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DataType {
  id: number;
  title: string;
  des: string;
  link: string;
}

// Image mapping for services
const serviceImages: Record<string, string> = {
  'Creative & Content': '/assets/img/content creation.png',
  'Social & Community Growth': '/assets/img/Social & Community Growth.png',
  'Performance & Growth Marketing': '/assets/img/Whatsapp marketer (2).png',
  'AI & Future-Ready Solutions': '/assets/img/AI Developer.png',
  'Web, App & Custom Development': '/assets/img/Web Developer.png',
  'E-commerce & Retail Media': '/assets/img/ONDC.png'
};

// Smart mascot mapping based on service content
const serviceMascots: Record<string, string> = {
  'Creative & Content': '/assets/img/Graphic design.png', // UI design mascot for creative content
  'Social & Community Growth': '/assets/img/Social & Community Growth.png', // Social growth mascot
  'Performance & Growth Marketing': '/assets/img/Whatsapp marketer (2).png', // WhatsApp mascot for performance marketing
  'AI & Future-Ready Solutions': '/assets/img/AI Developer.png', // AI developer mascot for AI solutions
  'Web, App & Custom Development': '/assets/img/Web Developer.png', // Web developer mascot
  'E-commerce & Retail Media': '/assets/img/ONDC.png' // ONDC mascot for e-commerce
};

const service_data: DataType[] = [
  {
    id: 1,
    title: `Creative & Content`,
    des: `1. Graphic Designing<br/>
2. Video Editing <br/>
3. Copywriting<br/>
`,
    link: `/services/creative-content`
  },
  {
    id: 2,
    title: `Social & Community Growth`,
    des: `1. Social Media Management<br/>
2. Influencer Marketing and PR<br/>
3. UGC & Creator Commerce`,
    link: `/services/social-community-growth`
  },
  {
    id: 3,
    title: `Performance & Growth Marketing`,
    des: `1. Performance Marketing (Paid Ads)<br/>
2. Conversion Rate Optimization (CRO) & Analytics<br/>
3. WhatsApp Marketing`,
    link: `/services/performance-growth`
  },
  {
    id: 4,
    title: `AI & Future-Ready Solutions`,
    des: `1. AI Automations & Workflows<br/>
2. AI Search Optimization (GEO & AEO)<br/>
3. Digital Content Ownership & Protection<br/>
4. AI-based Content Creation`,
    link: `/services/ai-future-ready`
  },
  {
    id: 5,
    title: `Web, App & Custom Development`,
    des: `1. Web Development<br/>
2. Website & App Development<br/>
3. Custom Software Development (CRM/ERP)`,
    link: `/services/web-app-development`
  },
  {
    id: 6,
    title: `E-commerce & Retail Media`,
    des: `1. E-commerce & Marketplace Management (ONDC)<br/>
2. Retail Media Advertising`,
    link: `/services/ondc-retail-media`
  }
];


const ServiceHomeOne = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate heading first
          const headingElement = entry.target.querySelector('.anim_heading_title');
          if (headingElement) {
            setTimeout(() => {
              headingElement.classList.add('active');
            }, 200);
          }

          // Then animate service cards one by one with longer delays
          const serviceCards = entry.target.querySelectorAll('.anim_div_ShowDowns');
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('active');
              // Show mascot when card animates in
              const mascot = card.querySelector('.cs_service_mascot');
              if (mascot) {
                (mascot as HTMLElement).style.opacity = '0.8';
              }
            }, 600 + (index * 400)); // Start after heading, then 400ms between each card
          });

          // Finally animate the button
          const buttonElement = entry.target.querySelector('.cs_btn_anim');
          if (buttonElement) {
            setTimeout(() => {
              buttonElement.classList.add('active');
            }, 600 + (serviceCards.length * 400) + 300);
          }
        } else {
          // Reset animations when scrolling out of view
          const allAnimElements = entry.target.querySelectorAll(
            '.anim_div_ShowZoom, .anim_heading_title, .anim_div_ShowDowns, .cs_btn_anim'
          );
          allAnimElements.forEach((element) => {
            element.classList.remove('active');
          });
          
          // Hide mascots when out of view
          const mascots = entry.target.querySelectorAll('.cs_service_mascot');
          mascots.forEach((mascot) => {
            (mascot as HTMLElement).style.opacity = '0';
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .cs_card {
          position: relative;
          overflow: hidden;
        }
        
        .cs_card:hover .cs_service_mascot {
          opacity: 0.9 !important;
          transform: translateY(-50%) scale(1.1) rotate(2deg) !important;
        }
        
        .cs_service_mascot {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .anim_div_ShowDowns {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          visibility: hidden;
        }
        
        .cs_btn_anim {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          visibility: hidden;
        }
        
        .anim_div_ShowZoom {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          visibility: hidden;
        }
        
        .anim_heading_title {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          visibility: hidden;
        }
        
        /* Remove the nth-child delays since we're controlling timing with JavaScript */
        
        /* Active state when in view */
        .anim_div_ShowDowns.active {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
        
        .cs_btn_anim.active {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
        
        .anim_div_ShowZoom.active {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
        
        .anim_heading_title.active {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
        
        /* Tablet optimization */
        @media (max-width: 1199px) {
          .cs_service_mascot {
            width: 110px !important; /* Increased size */
            height: 110px !important; /* Increased size */
            left: 75% !important;
          }
          
          .cs_service_mascot_large {
            width: 220px !important; /* Increased size for bundles 1, 3, 4 */
            height: 220px !important; /* Increased size for bundles 1, 3, 4 */
          }
        }
        
        /* Mobile landscape */
        @media (max-width: 991px) {
          .cs_service_mascot {
            width: 95px !important; /* Increased size */
            height: 95px !important; /* Increased size */
            left: 75% !important;
          }
          
          .cs_service_mascot_large {
            width: 190px !important; /* Increased size for bundles 1, 3, 4 */
            height: 190px !important; /* Increased size for bundles 1, 3, 4 */
          }
          
          .cs_card:hover .cs_service_mascot {
            transform: translate(-50%, -50%) scale(1.05) !important;
          }
        }
        
        /* Mobile portrait */
        @media (max-width: 767px) {
          .cs_card_1_list {
            display: flex;
            flex-direction: column;
            gap: 25px !important;
          }
          
          .cs_card {
            margin-bottom: 0 !important;
            min-height: 140px;
            padding: 20px !important;
          }
          
          .cs_card_right {
            padding-right: 90px !important;
          }
          
          .cs_service_mascot {
            width: 70px !important;
            height: 70px !important;
            right: 15px !important;
            top: 50% !important;
            left: auto !important;
            transform: translateY(-50%) !important;
            opacity: 0.7 !important;
            position: absolute !important;
          }
          
          .cs_service_mascot_large {
            width: 80px !important;
            height: 80px !important;
            right: 10px !important;
            top: 50% !important;
            left: auto !important;
            transform: translateY(-50%) !important;
            opacity: 0.7 !important;
            position: absolute !important;
          }
          
          .cs_card:hover .cs_service_mascot {
            opacity: 0.9 !important;
            transform: translateY(-50%) scale(1.05) !important;
          }
          
          .cs_card:hover .cs_service_mascot_large {
            opacity: 0.9 !important;
            transform: translateY(-50%) scale(1.02) !important;
          }
        }
        
        /* Small mobile */
        @media (max-width: 575px) {
          .cs_card_1_list {
            gap: 20px !important;
          }
          
          .cs_card {
            min-height: 120px;
            padding: 15px !important;
          }
          
          .cs_card_right {
            padding-right: 70px !important;
          }
          
          .cs_card_title {
            font-size: 18px !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
          }
          
          .cs_card_subtitle {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }
          
          .cs_service_mascot {
            width: 55px !important;
            height: 55px !important;
            right: 10px !important;
            top: 50% !important;
            left: auto !important;
            transform: translateY(-50%) !important;
            opacity: 0.6 !important;
          }
          
          .cs_service_mascot_large {
            width: 65px !important;
            height: 65px !important;
            right: 8px !important;
            top: 50% !important;
            left: auto !important;
            transform: translateY(-50%) !important;
            opacity: 0.6 !important;
          }

          .cs_card:hover .cs_service_mascot {
            opacity: 0.8 !important;
            transform: translateY(-50%) scale(1.05) !important;
          }
          
          .cs_card:hover .cs_service_mascot_large {
            opacity: 0.8 !important;
            transform: translateY(-50%) scale(1.02) !important;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 480px) {
          .cs_card_1_list {
            gap: 18px !important;
          }
          
          .cs_card {
            min-height: 110px;
            padding: 12px !important;
          }
          
          .cs_card_right {
            padding-right: 60px !important;
          }
          
          .cs_card_title {
            font-size: 16px !important;
            line-height: 1.2 !important;
            margin-bottom: 6px !important;
          }
          
          .cs_card_subtitle {
            font-size: 12px !important;
            line-height: 1.3 !important;
          }
          
          .cs_service_mascot {
            width: 45px !important;
            height: 45px !important;
            right: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            opacity: 0.6 !important;
          }
          
          .cs_service_mascot_large {
            width: 55px !important;
            height: 55px !important;
            right: 5px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            opacity: 0.6 !important;
          }

          .cs_card:hover .cs_service_mascot {
            opacity: 0.8 !important;
            transform: translateY(-50%) scale(1.03) !important;
          }
          
          .cs_card:hover .cs_service_mascot_large {
            opacity: 0.8 !important;
            transform: translateY(-50%) scale(1.02) !important;
          }
        }
        
        /* Ultra small screens */
        @media (max-width: 360px) {
          .cs_card_1_list {
            gap: 15px !important;
          }
          
          .cs_card {
            min-height: 100px;
            padding: 10px !important;
          }
          
          .cs_card_right {
            padding-right: 50px !important;
          }
          
          .cs_card_title {
            font-size: 15px !important;
            margin-bottom: 4px !important;
          }
          
          .cs_card_subtitle {
            font-size: 11px !important;
          }
          
          .cs_service_mascot {
            width: 40px !important;
            height: 40px !important;
            right: 6px !important;
          }
          
          .cs_service_mascot_large {
            width: 48px !important;
            height: 48px !important;
            right: 3px !important;
          }
        }
      `}</style>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative" ref={sectionRef}>
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Services
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Services Your Brand Needs
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>View Services</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url(/assets/img/hero_img_1.jpg)` }}>
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle" dangerouslySetInnerHTML={{ __html: item.des }}>
                    </div>
                  </div>
                  {/* Service Mascot - Positioned at 75% from left */}
                  <div 
                    className={`cs_service_mascot ${(i === 2 || i === 3) ? 'cs_service_mascot_large' : ''}`}
                    style={{
                      position: 'absolute',
                      left: '75%',
                      top: (i === 2 || i === 3) ? '60%' : '50%',
                      transform: 'translate(-50%, -50%)',
                      /* Reduce the Creative & Content mascot (i===0) so it fits better */
                      width: i === 0 ? '200px' : ((i === 2 || i === 3) ? '260px' : '130px'),
                      height: i === 0 ? '200px' : ((i === 2 || i === 3) ? '260px' : '130px'),
                      opacity: 0,
                      zIndex: 999,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'block',
                      pointerEvents: 'none'
                    }}
                  >
                    <Image
                      src={serviceMascots[item.title] || '/assets/img/content creation.png'}
                      alt={`${item.title} mascot`}
                      width={i === 0 ? 172 : ((i === 2 || i === 3) ? 224 : 112)}
                      height={i === 0 ? 172 : ((i === 2 || i === 3) ? 224 : 112)}
                      style={{
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
                        borderRadius: '8px'
                      }}
                      priority={false}
                      quality={85}
                    />
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href={item.link} className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>

    </>
  );
};

export default ServiceHomeOne;