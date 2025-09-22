'use client'
import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import saregamapa from "@/../../public/assets/img/saregamapa.png"
import lalsa from "@/../../public/assets/img/lalsa.png"
import astrowithasha from "@/../../public/assets/img/astrowithasha.png"
import magikmoments from "@/../../public/assets/img/Magik Moments.png"
import drsoumya from "@/../../public/assets/img/Dr Soumya Gupta.png"

const brand_data: DataType = [
  saregamapa,
  lalsa,
  astrowithasha,
  magikmoments,
  drsoumya,
]

const brand_thumb_data: DataType = [
  saregamapa,
  lalsa,
  astrowithasha,
  magikmoments,
  drsoumya,
]


const BrandHomeOne = ({ style_2 }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll(
          '.anim_cascade, .anim_ripple'
        );
        
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 200);
          });
        } else {
          animElements.forEach((element) => {
            element.classList.remove('active');
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
        .anim_cascade {
          opacity: 0;
          transform: translateY(100px) rotateY(90deg) scale(0.3);
          transition: all 1.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .anim_ripple {
          opacity: 0;
          transform: translateY(120px) rotateX(45deg) scale(0.2);
          transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .anim_cascade.active {
          opacity: 1;
          transform: translateY(0) rotateY(0deg) scale(1);
        }
        
        .anim_ripple.active {
          opacity: 1;
          transform: translateY(0) rotateX(0deg) scale(1);
        }
      `}</style>
      <div ref={sectionRef}> 
      
      {style_2 ?
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
        :
        <div className="cs_height_140 cs_height_lg_70"></div>
      }
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push anim_cascade">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
        <div className="cs_height_70 cs_height_lg_40"></div>
      </div>
    </>
  );
};export default BrandHomeOne;