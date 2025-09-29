"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

const services: ServiceItem[] = [
  { id: 1, title: 'AI-Based Content Creation', image: '/assets/img/copywriter1.png' },
  { id: 2, title: 'Social Media Management', image: '/assets/img/Social & Community Growth.png' },
  { id: 3, title: 'Performance Marketing', image: '/assets/img/performancemarketing.png' },
  { id: 4, title: 'WhatsApp Marketing', image: '/assets/img/Whatsapp marketer (2).png' },
  { id: 5, title: 'Content Ownership', image: '/assets/img/aiautomation.png' },
  { id: 6, title: 'Web development', image: '/assets/img/Web Developer.png' },
  { id: 7, title: 'ONDC & Retail Media Operations', image: '/assets/img/ONDC.png' },
  { id: 8, title: 'Design (UI/UX & Branding)', image: '/assets/img/uidesign.png' },
  { id: 9, title: 'Video Editing', image: '/assets/img/Video editing.png' },
  { id: 10, title: 'Graphic Designing', image: '/assets/img/Graphic design.png' },
  { id: 11, title: 'Copywriting', image: '/assets/img/copywriter1.png' },
  { id: 12, title: 'Influencer Marketing & PR', image: '/assets/img/Influencer Marketer.png' },
  { id: 13, title: 'UGC & Creator Commerce', image: '/assets/img/Social & Community Growth.png' },
  { id: 14, title: 'CRO & Analytics Hub', image: '/assets/img/Perfornmence and growth.png' },
  { id: 15, title: 'AI Automations', image: '/assets/img/aiautomation.png'},
  { id: 16, title: 'AI-SEO, GEO, AEO & Content Protection', image: '/assets/img/seo.png' },
];

// Service taglines mapping
const serviceTaglines: Record<string, string> = {
  'AI-Based Content Creation': 'We don\'t just create content, we craft experiences that make your brand unforgettable.',
  'Social Media Management': 'Grow your brand and community with authentic engagement',
  'Performance Marketing': 'Where every click counts',
  'WhatsApp Marketing': 'The fastest way to your customers\' hearts',
  'Content Ownership': 'Your invisible shield against AI misuse',
  'Web development': 'Websites that work as hard as you do.',
  'ONDC & Retail Media Operations': 'Retail ads that deliver real sales.',
  'Design (UI/UX & Branding)': 'Designing experiences, not just screens',
  'Video Editing': 'Story that moves your audience',
  'Graphic Designing': 'Designs so bold that your brand never whispers, it SHOUTS.',
  'Copywriting': 'From captions to campaigns we write it all ',
  'Influencer Marketing & PR': 'Collaborations that click, PR that puts you on the map',
  'UGC & Creator Commerce': 'Real voices, real growth',
  'CRO & Analytics Hub': 'Conversions aren\'t luck - they\'re strategy.',
  'AI Automations': 'AI that works while you sleep',
  'AI-SEO, GEO, AEO & Content Protection': 'Protect your brand in the AI landscape.',
};

type Props = {
  compact?: boolean;
  hideHeading?: boolean;
};

const ServiceHomeOneExtended = ({ compact = false, hideHeading = false }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll(
          '.anim_div_ShowZoom, .anim_heading_title, .anim_div_ShowDowns'
        );
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => element.classList.add('active'), index * 120);
          });
        } else {
          animElements.forEach((element) => element.classList.remove('active'));
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
  .cs_card { position: relative; overflow: hidden; padding-bottom: 5px; }
        .cs_card_right_in { padding-right: 140px; }
        .cs_service_mascot { transition: all .4s cubic-bezier(.4,0,.2,1); opacity: .9; }
        .cs_card:hover .cs_service_mascot { transform: translate(-50%, -54%) scale(1.06) rotate(1.5deg); opacity: 1; }

        /* Animations */
        .anim_div_ShowZoom{opacity:0;transform:scale(.9) translateY(20px);transition:all .8s cubic-bezier(.25,.46,.45,.94)}
        .anim_div_ShowZoom.active{opacity:1;transform:scale(1) translateY(0)}
        .anim_heading_title{opacity:0;transform:translateY(60px) translateX(-20px);transition:all .9s cubic-bezier(.25,.46,.45,.94)}
        .anim_heading_title.active{opacity:1;transform:none}
        .anim_div_ShowDowns{opacity:0;transform:translateY(60px) scale(.98);transition:all .85s cubic-bezier(.25,.46,.45,.94)}
        .anim_div_ShowDowns.active{opacity:1;transform:none}

        /* Service tagline styling */
        .cs_card_tagline {
          color: #7a7a7a;
          font-size: 14px;
          font-style: italic;
          margin-top: 8px;
          margin-bottom: 0;
          line-height: 1.4;
          font-weight: 400;
          opacity: 0.85;
        }

  /* Mascot sizing aligned with homepage */
  .cs_service_mascot{position:absolute; left:75%; top:50%; transform:translate(-50%, -50%); width:112px; height:112px; z-index:999; pointer-events:none}
  .cs_service_mascot_large{width:224px; height:224px}

  /* Reduced variant: apply to specific mascots (25% smaller) */
  .cs_service_mascot_reduced { width: 84px; height: 84px; }
  .cs_service_mascot_reduced.cs_service_mascot_large { width: 168px; height: 168px; }
  @media (max-width:1199px){ .cs_card_right_in{padding-right:120px} .cs_service_mascot{width:95px;height:95px} .cs_service_mascot_large{width:190px;height:190px} .cs_service_mascot_reduced{width:71.25px;height:71.25px} .cs_service_mascot_reduced.cs_service_mascot_large{width:142.5px;height:142.5px} }
  @media (max-width:991px){ .cs_card_right_in{padding-right:100px} .cs_service_mascot{width:82px;height:82px} .cs_service_mascot_large{width:164px;height:164px} .cs_service_mascot_reduced{width:61.5px;height:61.5px} .cs_service_mascot_reduced.cs_service_mascot_large{width:123px;height:123px} }
  @media (max-width:767px){ .cs_card_right_in{padding-right:84px} .cs_service_mascot{width:68px;height:68px} .cs_service_mascot_large{width:136px;height:136px} .cs_service_mascot_reduced{width:51px;height:51px} .cs_service_mascot_reduced.cs_service_mascot_large{width:102px;height:102px} .cs_card_tagline{font-size:13px;margin-top:6px} }
  @media (max-width:575px){ .cs_card_right_in{padding-right:60px} .cs_service_mascot{width:48px;height:48px; right:12px; left:auto; top:20px; transform:none} .cs_service_mascot_large{width:96px;height:96px; right:5px; top:10px} .cs_service_mascot_reduced{width:36px;height:36px} .cs_service_mascot_reduced.cs_service_mascot_large{width:72px;height:72px} .cs_card_tagline{font-size:12px;margin-top:5px;line-height:1.3} }
  @media (max-width:480px){ .cs_service_mascot{width:43px;height:43px; right:10px; top:18px} .cs_service_mascot_large{width:86px;height:86px; right:3px; top:8px} .cs_service_mascot_reduced{width:32px;height:32px} .cs_service_mascot_reduced.cs_service_mascot_large{width:64px;height:64px} .cs_card_tagline{font-size:11px;margin-top:4px} }
      `}</style>

      <section className="cs_primary_bg position-relative" ref={sectionRef}>
        <div className={compact ? 'cs_height_50 cs_height_lg_30' : 'cs_height_150 cs_height_lg_60'}></div>
        <div className="container">
          {!hideHeading && (
            <>
              <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">Our Services</div>
                  <h2 className="cs_section_title anim_heading_title">Services Your Brand Needs</h2>
                </div>
              </div>
              <div className="cs_height_50 cs_height_lg_10"></div>
            </>
          )}

          <div className="cs_card_1_list">
            {services.map((item, i) => (
              <div key={item.id} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns" style={{ position:'relative', overflow:'hidden' }}>
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url(/assets/img/hero_img_1.jpg)` }}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title"><Link href={
                      item.title === 'Graphic Designing' ? '/services/graphic-designing' :
                      item.title === 'Video Editing' ? '/services/video-editing' :
                      item.title === 'Social Media Management' ? '/services/social-media-management' :
                      item.title === 'Social & Community Growth' ? '/services/social-community-growth' :
                      item.title === 'AI-Based Content Creation' ? '/services/ai-based-content' :
                      item.title === 'Content Ownership' ? '/services/content-ownership' :
                      item.title === 'Copywriting' ? '/services/copywriting' :
                      item.title === 'WhatsApp Marketing' ? '/services/whatsapp-marketing' :
                      item.title === 'Performance Marketing' ? '/services/performance-marketing' :
                      item.title === 'Influencer Marketing & PR' ? '/services/influencer-marketing-pr' :
                      item.title === 'AI-SEO, GEO, AEO & Content Protection' ? '/services/ai-seo-geo-aeo-content-protection' :
                      item.title === 'ONDC & Retail Media Operations' ? '/services/ondc-retail-media-ops' :
                      item.title === 'CRO & Analytics Hub' ? '/services/cro-analytics' :
                      item.title === 'UGC & Creator Commerce' ? '/services/ugc-creator-commerce' :
                      item.title === 'AI Automations' ? '/services/ai-automations' :
                      item.title === 'Web & App Development with Custom Solutions' ? '/services/web-app-custom-solutions' :
                      item.title === 'Design (UI/UX & Branding)' ? '/services/design-ui-ux-branding' :
                      item.title === 'Web development' ? '/services/web-development' :
                      '/service'
                    }>{item.title}</Link></h2>
                      {/* Add tagline below heading for Social Media Management section */}
                      {item.title === 'Social Media Management'}
                    {/* Custom content for Content Ownership section removed, only tagline will show as tagline */}
                    {serviceTaglines[item.title] && (
                      <p className="cs_card_tagline">{serviceTaglines[item.title]}</p>
                    )}
                  </div>
                  {(() => {
                    const isLarge = (i === 0 || i === 5 || i === 9);
                    // Target mascots to reduce by 25%
                    const reducedTargets = ['Creative & Content', 'Web, App & Custom Development', 'Graphic Designing'];
                    const isReduced = reducedTargets.includes(item.title);
                    const imgBase = isLarge ? 224 : 112;
                    const imgWidth = isReduced ? Math.round(imgBase * 0.75) : imgBase;
                    const imgHeight = imgWidth;
                    const reducedClass = isReduced ? ' cs_service_mascot_reduced' : '';
                    const largeClass = isLarge ? ' cs_service_mascot_large' : '';

                    return (
                      <div className={`cs_service_mascot${largeClass}${reducedClass}`}>
                        <Image
                          src={item.image}
                          alt={`${item.title} mascot`}
                          width={imgWidth}
                          height={imgHeight}
                          style={{ objectFit: 'contain', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))', borderRadius: 8 }}
                          quality={85}
                        />
                      </div>
                    );
                  })()}
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

export default ServiceHomeOneExtended;
