'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import RevealOnScroll from '@/components/common/RevealOnScroll';
import React from 'react';

const BlogPage = () => {
  const slides = [
    {
      id: 1,
      title: "AI Innovation Hub",
      subtitle: "Transforming Ideas into Reality",
      description: "Discover how artificial intelligence is reshaping the future of technology and business. Our cutting-edge solutions bring your wildest dreams to life.",
      background: "/assets/img/AI Developer.png",
      accent: "rgba(118, 75, 162, 0.8)"
    },
    {
      id: 2,
      title: "Feature-Ready Solutions",
      subtitle: "Built for Tomorrow",
      description: "Experience next-generation features that adapt to your needs. Our platform grows with your business, ensuring scalability and performance.",
      background: "/assets/img/AI Developer.png",
      accent: "rgba(102, 126, 234, 0.8)"
    },
    {
      id: 3,
      title: "Automation Excellence",
      subtitle: "Streamline Your Workflow",
      description: "Automate complex processes with intelligent systems that learn and evolve. Boost productivity while reducing manual overhead.",
      background: "/assets/img/automation.png",
      accent: "rgba(255, 99, 132, 0.8)"
    },
    {
      id: 4,
      title: "Content Creation",
      subtitle: "Powered by Intelligence",
      description: "Generate compelling content with AI-assisted tools. From copywriting to design, create professional materials in minutes.",
      background: "/assets/img/content creation.png",
      accent: "rgba(54, 162, 235, 0.8)"
    },
    {
      id: 5,
      title: "Service Excellence",
      subtitle: "Customer-Centric Approach",
      description: "Delivering exceptional service through intelligent automation and personalized experiences that exceed expectations.",
      background: "/assets/img/content creation.png",
      accent: "rgba(255, 206, 86, 0.8)"
    },
    {
      id: 6,
      title: "Future Vision",
      subtitle: "Beyond Imagination",
      description: "Join us on a journey to the future where technology meets creativity. Together, we'll build solutions that matter.",
      background: "/assets/img/astrowithasha.png",
      accent: "rgba(75, 192, 192, 0.8)"
    }
  ];

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <section className="hero-reveal-section" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}>
              <div className="hero-content">
                <RevealOnScroll delay={0.2} duration={0.8}>
                  <h1 style={{ 
                    fontSize: 'clamp(3rem, 8vw, 6rem)', 
                    marginBottom: '1rem',
                    fontWeight: 'bold',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                  }}>
                    Scroll Into Innovation
                  </h1>
                </RevealOnScroll>
                
                <RevealOnScroll delay={0.4} duration={0.8}>
                  <p style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '2rem',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto 2rem'
                  }}>
                    Experience our revolutionary scroll-triggered reveal system
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.6} duration={0.8}>
                  <div style={{ 
                    fontSize: '1.2rem',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <span>Scroll down to explore</span>
                    <div style={{
                      animation: 'bounce 2s infinite',
                      fontSize: '1.5rem'
                    }}>↓</div>
                  </div>
                </RevealOnScroll>
              </div>
            </section>

            {/* Animated Slides */}
            {slides.map((slide, index) => (
              <section 
                key={slide.id}
                className="slide-section"
                style={{
                  backgroundImage: `url(${slide.background})`,
                  minHeight: '100vh'
                }}
              >
                <div className="slide-overlay" style={{ background: slide.accent }}></div>
                <div className="slide-content">
                  <RevealOnScroll delay={0.1} duration={0.7} distance={60}>
                    <h2 style={{ 
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                      marginBottom: '1rem',
                      color: 'white',
                      fontWeight: 'bold',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {slide.title}
                    </h2>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.3} duration={0.7} distance={40}>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      marginBottom: '2rem',
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: '300'
                    }}>
                      {slide.subtitle}
                    </h3>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.5} duration={0.7} distance={30}>
                    <p style={{ 
                      fontSize: '1.3rem', 
                      lineHeight: '1.6',
                      color: 'rgba(255,255,255,0.8)',
                      maxWidth: '700px',
                      margin: '0 auto 2rem'
                    }}>
                      {slide.description}
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.7} duration={0.7} distance={20}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1rem',
                      marginTop: '3rem'
                    }}>
                      {[1, 2, 3].map((cardNum) => (
                        <RevealOnScroll 
                          key={cardNum} 
                          delay={0.8 + cardNum * 0.1} 
                          duration={0.6}
                          className="reveal-card"
                        >
                          <div style={{ color: 'white' }}>
                            <h4 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                              Feature {cardNum}
                            </h4>
                            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>
                              Advanced capability that enhances your experience with intelligent automation and seamless integration.
                            </p>
                          </div>
                        </RevealOnScroll>
                      ))}
                    </div>
                  </RevealOnScroll>
                </div>
              </section>
            ))}

            {/* Final Call-to-Action Section */}
            <section style={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated background elements */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
              }}></div>
              
              <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite reverse'
              }}></div>

              <div style={{ zIndex: 2, position: 'relative' }}>
                <RevealOnScroll delay={0.2} duration={0.8}>
                  <h2 style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                    marginBottom: '2rem',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                  }}>
                    Ready to Get Started?
                  </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={0.4} duration={0.8}>
                  <p style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '3rem',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                  }}>
                    Join thousands of users who are already experiencing the future
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.6} duration={0.8}>
                  <button style={{
                    padding: '1rem 3rem',
                    fontSize: '1.3rem',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    border: 'none',
                    borderRadius: '50px',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    fontWeight: 'bold'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                  >
                    Get Started Now
                  </button>
                </RevealOnScroll>
              </div>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes float {
          0% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
          100% { 
            transform: translateY(0px) rotate(360deg); 
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #764ba2, #667eea);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slide-content {
            padding: 2rem 1rem !important;
          }
          
          .reveal-card {
            margin: 0.5rem 0 !important;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default BlogPage;
