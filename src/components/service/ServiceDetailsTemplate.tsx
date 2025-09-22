'use client'

import React from 'react';
import Image from 'next/image';

export interface ServiceDetailData {
  tag: string;
  title: string;
  tagline: string;
  description: string;
  mascotImage: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

interface ServiceDetailsTemplateProps {
  serviceData: ServiceDetailData;
}

const ServiceDetailsTemplate: React.FC<ServiceDetailsTemplateProps> = ({ serviceData }) => {
  const { tag, title, tagline, description, mascotImage, services, stats } = serviceData;
  // Reduce mascot size specifically for the "Creative & Content" service detail to prevent overflow
  const isCreativeContent = title && title.toString().trim().toLowerCase() === 'creative & content';

  return (
    <>
      <style jsx>{`
        .service-hero {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
          padding: 6rem 0 4rem;
        }

        .service-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(243, 60, 82, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(243, 60, 82, 0.08) 0%, transparent 50%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-text {
          flex: 1;
          color: white;
        }

        .hero-mascot {
          flex: 0 0 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 999; /* ensure mascot sits above overlays */
          pointer-events: none;
        }

        .mascot-image {
          width: 250px !important;
          height: 250px !important;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(243, 60, 82, 0.3));
          z-index: 1000; /* image itself should be highest */
          pointer-events: none;
        }

        /* Reduced mascot for Creative & Content dedicated page */
        .mascot-reduced {
          width: 188px !important; /* ~25% smaller than 250px */
          height: 188px !important;
        }

        .service-tag {
          display: inline-block;
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: #F33C52;
          font-weight: 600;
          margin-bottom: 2rem;
          line-height: 1.3;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          opacity: 0.85;
          margin-bottom: 3rem;
          color: #e0e0e0;
        }

        .services-section {
          background: #fafafa;
          padding: 6rem 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(243, 60, 82, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(243, 60, 82, 0.15);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .service-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .highlight-text {
          color: #F33C52;
          font-weight: 600;
        }

        .stats-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
          padding: 4rem 0;
          color: white;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #F33C52;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-size: 1rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2rem;
          }

          .hero-mascot {
            flex: none;
          }

          .mascot-image {
            width: 200px !important;
            height: 200px !important;
          }

          /* Mobile rule for reduced mascot */
          .mascot-reduced {
            width: 150px !important;
            height: 150px !important;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .service-card {
            padding: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .service-hero {
            padding: 4rem 0 3rem;
          }

          .services-section {
            padding: 4rem 0;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="service-hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="service-tag">{tag}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-tagline">{tagline}</p>
            <p className="hero-description">{description}</p>
          </div>
          <div className="hero-mascot">
            <Image 
              src={mascotImage} 
              alt={`${title} Mascot`} 
              width={isCreativeContent ? 188 : 250}
              height={isCreativeContent ? 188 : 250}
              className={isCreativeContent ? 'mascot-image mascot-reduced' : 'mascot-image'}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our <span className="highlight-text">{title}</span> Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetailsTemplate;
