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
  const isCreativeContent = title && title.toString().trim().toLowerCase() === 'creative & content';

  return (
    <>
      <style jsx>{`
        .service-back-btn-wrapper {
          margin-bottom: 1.5rem;
        }

        .service-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .service-back-btn:hover {
          opacity: 0.7;
        }

        .back-arrow {
          font-size: 1.2rem;
        }
      `}</style>

      {/* Hero Section */}
      <div className="service-hero">
        <div className="hero-content">
          <div className="hero-text">
            {/* Back Button */}
            <div className="service-back-btn-wrapper">
              <button
                className="service-back-btn"
                onClick={() =>
                  window.history.length > 1
                    ? window.history.back()
                    : (window.location.href = '/services')
                }
              >
                <span className="back-arrow">←</span> Back
              </button>
            </div>

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
          <h2 className="section-title">
            Our <span className="highlight-text">{title}</span> Services
          </h2>
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
