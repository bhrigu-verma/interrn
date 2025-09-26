'use client'

import React from 'react';
import Image from 'next/image';

export type ServiceDetailProps = {
  title: string;
  tagline: string;
  image: string;
  intro: string;
  description: string;
  sections?: {
    title: string;
    content: string[];
  }[];
  cta?: string;
};

const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({ 
  title, 
  tagline, 
  image, 
  intro, 
  description,
  sections = [],
  cta
}) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      {/* Back Button */}
      <div className="service-back-btn-wrapper">
        <button className="service-back-btn" onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/services'}>
          <span className="back-arrow">←</span> Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="tagline anim_div_ShowZoom">
                {tagline}
              </div>
              <h1 className="hero-title anim_text_writting">
                {title}
              </h1>
              <p className="hero-intro anim_text">
                {intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="container">
          <div className="content-wrapper">
            
            {/* Image Section */}
            <div className="image-section">
              <div className="image-container anim_div_ShowLeft">
                <div className="floating-image">
                  {(() => {
                    // Double mascot size for all dedicated service pages (480px), except WhatsApp/ONDC (320px)
                    const imgLower = (image || '').toLowerCase();
                    const isSmallMascot = imgLower.includes('whatsapp') || imgLower.includes('ondc');
                      const size = isSmallMascot ? 400 : 600;
                    return (
                      <Image
                        src={image}
                        alt={title}
                          width={size}
                          height={size}
                        className="service-image"
                        style={{ maxHeight: `${size}px`, width: 'auto', objectFit: 'contain' }}
                      />
                    );
                  })()}
                </div>
                <div className="image-glow"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-section">
              <div className="text-content anim_div_ShowRight">
                
                {/* Description Card */}
                <div className="description-card">
                  <p className="main-description">
                    {description}
                  </p>
                </div>

                {/* Service Sections */}
                <div className="sections-container">
                  {sections.map((section, index) => (
                    <div key={index} className="service-section">
                      <h3 className="section-title">
                        <span className="title-accent"></span>
                        {section.title}
                      </h3>
                      <div className="section-content">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="feature-item">
                            <div className="feature-bullet">
                              <div className="bullet-inner"></div>
                            </div>
                            <span className="feature-text">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                {cta && (
                  <div className="cta-section">
                    <div className="cta-card">
                      <h3 className="cta-text">{cta}</h3>
                      <div className="cta-decoration"></div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-back-btn-wrapper {
          position: absolute;
          top: 5.5rem;
          left: 2rem;
          z-index: 100;
        }
        .service-back-btn {
          display: flex;
          align-items: center;
          background: rgba(243, 60, 82, 0.12);
          color: #fff;
          border: 1px solid #F33C52;
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
          box-shadow: 0 2px 8px rgba(243, 60, 82, 0.08);
        }
        .service-back-btn:hover {
          background: #F33C52;
          color: #fff;
          border-color: #fff;
        }
        .back-arrow {
          font-size: 1.3rem;
          margin-right: 0.5rem;
        }
        /* Animations */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-25px) rotate(2deg); 
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05); 
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Hero Section */
        .hero-section {
          padding: 4rem 0 6rem;
          background: linear-gradient(135deg, rgba(243, 60, 82, 0.03) 0%, rgba(243, 60, 82, 0.01) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(243, 60, 82, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .tagline {
          display: inline-block;
          color: #F33C52;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          padding: 0.5rem 1.5rem;
          border: 2px solid rgba(243, 60, 82, 0.3);
          border-radius: 50px;
          background: rgba(243, 60, 82, 0.05);
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-intro {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #ccc;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.9;
        }

        /* Main Content Section */
        .main-content-section {
          padding: 6rem 0;
          position: relative;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          min-height: 600px;
        }

        /* Image Section */
        .image-section {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .floating-image {
          animation: float 6s ease-in-out infinite;
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-image {
          width: 100% !important;
          height: auto !important;
          max-width: 350px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
          transition: all 0.3s ease;
          display: block;
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(243, 60, 82, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: glow 4s ease-in-out infinite;
          z-index: 1;
        }

        /* Text Content */
        .text-section {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .text-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2.5rem;
        }

        /* Description Card */
        .description-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .description-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #F33C52, rgba(243, 60, 82, 0.5));
        }

        .main-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ddd;
          margin: 0;
          font-weight: 400;
        }

        /* Sections Container */
        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-section {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-section:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(243, 60, 82, 0.2);
          transform: translateY(-2px);
        }

        .section-title {
          font-size: 1.4rem;
          color: #F33C52;
          margin-bottom: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .title-accent {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #F33C52, rgba(243, 60, 82, 0.5));
          border-radius: 2px;
        }

        .section-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .feature-bullet {
          margin-top: 0.5rem;
          position: relative;
          width: 12px;
          height: 12px;
          background: rgba(243, 60, 82, 0.2);
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bullet-inner {
          width: 6px;
          height: 6px;
          background: #F33C52;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .feature-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #bbb;
          flex: 1;
        }

        /* CTA Section */
        .cta-section {
          margin-top: 1rem;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(243, 60, 82, 0.1) 0%, rgba(243, 60, 82, 0.05) 100%);
          border: 2px solid rgba(243, 60, 82, 0.3);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(243, 60, 82, 0.1), transparent);
          animation: rotate 3s linear infinite;
          z-index: 1;
        }

        .cta-text {
          font-size: 1.5rem;
          color: #F33C52;
          font-weight: 700;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-wrapper {
            gap: 4rem;
          }
          
          .hero-section {
            padding: 3rem 0 4rem;
          }
          
          .main-content-section {
            padding: 4rem 0;
          }
        }

        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .image-section {
            order: 2;
          }

          .text-section {
            order: 1;
          }

          .image-container {
            max-width: 350px;
            margin: 0 auto;
          }

          .hero-section {
            padding: 2rem 0 3rem;
          }

          .main-content-section {
            padding: 3rem 0;
          }

          .tagline {
            font-size: 0.9rem;
          }

          .section-title {
            justify-content: center;
          }

          .feature-item {
            justify-content: center;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 1.5rem 0 2rem;
          }

          .main-content-section {
            padding: 2rem 0;
          }

          .content-wrapper {
            gap: 2rem;
          }

          .description-card,
          .service-section,
          .cta-card {
            padding: 1.5rem;
          }

          .image-container {
            max-width: 280px;
          }

          .service-image {
            max-width: 250px;
          }

          .tagline {
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
          }

          .hero-intro {
            font-size: 1.1rem;
          }

          .main-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.2rem;
          }

          .cta-text {
            font-size: 1.3rem;
          }
        }

        /* Container responsiveness */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 576px) {
          .container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding: 0 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceDetailTemplate;