import React from 'react';
import Image from 'next/image';

export default function OndcOnboardingPage() {
  return (
    <section className="cs_primary_bg position-relative" style={{ minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1" style={{ marginBottom: 32 }}>
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle">Onboarding & Catalog Optimization</div>
            <h1 className="cs_section_title" style={{ fontSize: 32, margin: '12px 0 8px' }}>
              Get your brand discovered everywhere.
            </h1>
            <div style={{ maxWidth: 600, fontSize: 18, color: '#eee', marginBottom: 24 }}>
              We handle the entire onboarding and cataloging process to ensure your products are discoverable and positioned for success on all major e-commerce platforms. This includes getting your brand on the ONDC network and optimizing your listings across platforms like Amazon, Flipkart, Myntra, Nykaa and others.
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Image src="/assets/img/ONDC.png" alt="ONDC mascot" width={160} height={160} style={{ objectFit: 'contain', borderRadius: 8 }} />
        </div>
      </div>
    </section>
  );
}
