

import React, { useEffect, useRef } from 'react';

const MarqueeAreaHomeOne = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll('.anim_wave');
        
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 100);
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
        .anim_wave {
          opacity: 0;
          transform: translateY(60px) skewX(-10deg);
          transition: all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_wave.active {
          opacity: 1;
          transform: translateY(0) skewX(0deg);
        }
        
        .anim_wave:nth-child(1) { transition-delay: 0s; }
        .anim_wave:nth-child(2) { transition-delay: 0.2s; }
      `}</style>
      <div className="cs_moving_section_wrap cs_bold" ref={sectionRef}>
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_stroke_text anim_wave">
            Let's Shout Out Of The Box <span style={{ 
              color: '#F33C52', 
              fontSize: '1.2em', 
              margin: '0 20px',
              display: 'inline-block'
            }}>●</span> Let's Shout Out Of The Box <span style={{ 
              color: '#F33C52', 
              fontSize: '1.2em', 
              margin: '0 20px',
              display: 'inline-block'
            }}>●</span>
          </div>
          <div className="cs_moving_section cs_stroke_text anim_wave">
            Let's Shout Out Of The Box <span style={{ 
              color: '#F33C52', 
              fontSize: '1.2em', 
              margin: '0 20px',
              display: 'inline-block'
            }}>●</span> Let's Shout Out Of The Box <span style={{ 
              color: '#F33C52', 
              fontSize: '1.2em', 
              margin: '0 20px',
              display: 'inline-block'
            }}>●</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeAreaHomeOne;