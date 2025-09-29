"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

const services: ServiceItem[] = [
  { id: 1, title: 'Graphic Designing', image: '/assets/img/uidesign.png' },
  { id: 2, title: 'Video Editing', image: '/assets/img/Video editing.png' },
  { id: 3, title: 'Social Media Management', image: '/assets/img/Social media manager.png' },
  { id: 4, title: 'AI-Based Content Creation', image: '/assets/img/content creation.png' },
  { id: 5, title: 'Copywriting', image: '/assets/img/copywriter1.png' },
  { id: 6, title: 'WhatsApp Marketing', image: '/assets/img/Whatsapp marketer (2).png' },
  { id: 7, title: 'Performance Marketing', image: '/assets/img/performancemarketing.png' },
  { id: 8, title: 'Influencer Marketing & PR', image: '/assets/img/Influencer Marketer.png' },
  { id: 9, title: 'AI-SEO, GEO, AEO & Content Protection', image: '/assets/img/seo.png' },
  { id: 10, title: 'ONDC & Retail Media Operations', image: '/assets/img/ONDC.png' },
  { id: 11, title: 'CRO & Analytics Hub', image: '/assets/img/results.jpg' },
  { id: 12, title: 'UGC & Creator Commerce', image: '/assets/img/content creation.png' },
  { id: 13, title: 'AI Automations', image: '/assets/img/automation.png' },
  { id: 14, title: 'Web & App Development with Custom Solutions', image: '/assets/img/Web Developer.png' },
  { id: 15, title: 'Design (UI/UX & Branding)', image: '/assets/img/design_banner.jpg' },
  { id: 16, title: 'Web development', image: '/assets/img/modern_digital_need.jpg' },
];

const ServiceListSimple = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animEls = entry.target.querySelectorAll(
          '.anim_div_ShowDowns, .anim_heading_title, .anim_div_ShowZoom'
        );
        if (entry.isIntersecting) {
          animEls.forEach((el, idx) => setTimeout(() => el.classList.add('active'), idx * 120));
        } else {
          animEls.forEach((el) => el.classList.remove('active'));
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .cs_card { position: relative; overflow: hidden; }
        .cs_service_mascot { transition: all .35s ease; opacity: 0.9; }
        .cs_card:hover .cs_service_mascot { transform: translate(-50%, -54%) scale(1.06) rotate(1.5deg); opacity: 1; }

        .anim_div_ShowZoom{opacity:0;transform:scale(.9) translateY(20px);transition:all .7s ease}
        .anim_div_ShowZoom.active{opacity:1;transform:scale(1) translateY(0)}
        .anim_heading_title{opacity:0;transform:translateY(40px);transition:all .75s ease}
        .anim_heading_title.active{opacity:1;transform:translateY(0)}
        .anim_div_ShowDowns{opacity:0;transform:translateY(30px);transition:all .65s ease}
        .anim_div_ShowDowns.active{opacity:1;transform:none}

  /* Mascot sizing (match home style) */
  .cs_service_mascot{position:absolute; left:75%; top:50%; transform:translate(-50%, -50%); width:130px; height:130px; z-index:999; pointer-events:none}
        .cs_service_mascot_large{width:260px; height:260px}
        @media (max-width:1199px){ .cs_service_mascot{width:110px;height:110px} .cs_service_mascot_large{width:220px;height:220px} }
        @media (max-width:991px){ .cs_service_mascot{width:95px;height:95px} .cs_service_mascot_large{width:190px;height:190px} }
        @media (max-width:767px){ .cs_service_mascot{width:80px;height:80px} .cs_service_mascot_large{width:160px;height:160px} }
        @media (max-width:575px){ .cs_service_mascot{width:56px;height:56px; right:12px; left:auto; top:20px; transform:none} .cs_service_mascot_large{width:112px;height:112px; right:5px; top:10px} }
        @media (max-width:480px){ .cs_service_mascot{width:50px;height:50px; right:10px; top:18px} .cs_service_mascot_large{width:100px;height:100px; right:3px; top:8px} }

        /* Make title single prominent element */
        .only_title .cs_card_right_in{padding-right:140px}
        @media (max-width:575px){ .only_title .cs_card_right_in{padding-right:60px} }
      `}</style>

      <section className="cs_primary_bg" ref={sectionRef}>
        <div className="cs_height_135 cs_height_lg_70"></div>
        <div className="container">
          <div className="cs_section_heading_hr cs_style_1 cs_color_1">
            <div className="cs_hr_design"></div>
            <div className="cs_section_heading cs_style_1 cs_color_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">Our Services</h2>
              </div>
            </div>
            <div className="cs_hr_design"></div>
          </div>
          <div className="cs_height_60 cs_height_lg_30"></div>

          <div className="cs_card_1_list">
            {services.map((item, i) => (
              <div key={item.id} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns only_title" style={{ position:'relative', overflow:'hidden' }}>
                {/* Left number/extra intentionally removed */}
                <div className="cs_card_right" style={{ width:'100%' }}>
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">{item.title}</h2>
                  </div>
                  <div className={`cs_service_mascot ${(i === 0 || i === 5 || i === 9) ? 'cs_service_mascot_large' : ''}`}>
                    <Image
                      src={item.image}
                      alt={`${item.title} mascot`}
                      width={(i === 0 || i === 5 || i === 9) ? 224 : 112}
                      height={(i === 0 || i === 5 || i === 9) ? 224 : 112}
                      style={{ objectFit: 'contain', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,.15))' }}
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_60"></div>
      </section>
    </>
  );
};

export default ServiceListSimple;
