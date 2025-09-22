'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Using proper public asset paths for Next.js
const testimonial_data = [
  {
    img: "/assets/img/asha.JPG",
    name: `Asha Jain`,
    subtitle: `(astrowithasha)`,
    location: `Astrologer`,
    des: `"Working with Shout Out of the Box has been an absolute game-changer for my social media presence. They helped me overcome challenges with my channel and brought fresh ideas that truly elevated my content. Their team is creative, professional, and always responsive. I couldn't have asked for better support!"`,
  },
  {
    img: "/assets/img/man.jpg",
    name: `Aman Singh`,
    subtitle: ``,
    location: `Video Client`,
    des: `"I really loved the service offered by Shout OUT OF THE BOX . I wanted to get my video edited and they did so well. The result was really good. They listen to your brief very carefully and work accordingly to it. They respond very fast as well. The pricing was also very genuine. Overall, I loved the service and for sure I would love to get my work done from here. Thank you"`,
  },
]

const Testimonial = ({ style_service }: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll(
          '.anim_fade_rotate, .anim_bounce_in, .anim_flip_in'
        );
        
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 250);
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
        .anim_fade_rotate {
          opacity: 0;
          transform: rotate(-15deg) scale(0.7);
          transition: all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_bounce_in {
          opacity: 0;
          transform: scale(0.3) translateY(150px);
          transition: all 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .anim_flip_in {
          opacity: 0;
          transform: perspective(1000px) rotateY(90deg) scale(0.8);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_fade_rotate.active {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }
        
        .anim_bounce_in.active {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .anim_flip_in.active {
          opacity: 1;
          transform: perspective(1000px) rotateY(0deg) scale(1);
        }
      `}</style>
      <section className={`${style_service ? 'cs_shape_wrap_3' : 'cs_primary_bg cs_shape_wrap_2'}`} ref={sectionRef}>
        {style_service ? null :
          <>
            <div className="cs_shape_1">
              <svg width="1041" height="1005" viewBox="0 0 1041 1005" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.3" cx="538.5" cy="502.5" r="501.5" stroke="#454545" strokeWidth="2" />
                <circle opacity="0.3" cx="501.5" cy="526.5" r="458.5" stroke="#454545" strokeWidth="2" />
                <circle opacity="0.3" cx="453" cy="570" r="424" stroke="#454545" strokeWidth="2" />
                <circle opacity="0.3" cx="396" cy="591" r="377" stroke="#454545" strokeWidth="2" />
                <circle opacity="0.3" cx="330" cy="630" r="329" stroke="#454545" strokeWidth="2" />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545" />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545" />
                </g>
              </svg>
            </div>
          </>
        }

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="anim_bounce_in">
                <Image
                  src={testimonial_data[activeSlide].img}
                  alt={testimonial_data[activeSlide].name}
                  className="w-100 cs_testimonial_main_image"
                  width={500}
                  height={500}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12px',
                    aspectRatio: '1/1',
                    objectPosition: activeSlide === 0 ? 'center top' : 'center center'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className={`cs_testimonial ${style_service ? 'cs_style_2' : 'cs_style_1 cs_color_1'} anim_flip_in`}>
                <h2 className="cs_testimonial_title anim_fade_rotate" style={{ fontSize: '1.8rem', color: 'white' }}>
                  Voices of Trust
                </h2>
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true
                  }}
                  onSlideChange={(swiper) => {
                    setActiveSlide(swiper.realIndex);
                  }}
                  onSwiper={(swiper) => {
                    setActiveSlide(swiper.realIndex);
                  }}
                  className="cs_slider cs_slider_4">
                  {testimonial_data.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="cs_testimonial_box">
                        <div className="cs_testimonial_quote_icon">
                          <svg width="61" height="44" viewBox="0 0 61 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0 28.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                              fill="#F33C52" />
                            <path
                              d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                              fill="#F33C52" />
                          </svg>
                        </div>
                        <blockquote className="cs_testimonial_text" style={{ 
                          fontSize: '0.95rem', 
                          lineHeight: '1.6', 
                          color: 'white' 
                        }}>
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta">
                          <div className="cs_testimonial_meta_right">
                            <h3 className="cs_testimonial_avatar_name" style={{ 
                              fontSize: '1.1rem', 
                              color: 'white' 
                            }}>
                              {item.name}
                              {item.subtitle && (
                                <div style={{ 
                                  fontSize: '0.95rem', 
                                  fontWeight: 'normal', 
                                  marginTop: '2px', 
                                  color: 'white' 
                                }}>
                                  {item.subtitle}
                                </div>
                              )}
                            </h3>
                            <div className="cs_testimonial_avatar_designation" style={{ fontSize: '0.9rem', color: '#F33C52' }}>
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="cs_pagination cs_style1"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {style_service ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
      </section>
      {style_service ? null : <div className="cs_height_115 cs_height_lg_60"></div>}

    </>
  );
};

export default Testimonial;