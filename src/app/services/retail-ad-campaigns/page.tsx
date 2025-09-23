import React from 'react';
import Image from 'next/image';

export default function RetailAdCampaignsPage() {
  return (
    <section className="cs_primary_bg position-relative" style={{ minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1" style={{ marginBottom: 32 }}>
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle">Retail Ad Campaigns</div>
            <h1 className="cs_section_title" style={{ fontSize: 32, margin: '12px 0 8px' }}>
              Marketplace ads that drive sales.
            </h1>
            <div style={{ maxWidth: 600, fontSize: 18, color: '#eee', marginBottom: 24 }}>
              We run performance-focused ad campaigns on top retail platforms, ensuring every dollar spent leads to a sale. We manage and optimize your ad spend across all major marketplaces, including:
              <ul style={{ margin: '8px 0 0 18px', color: '#bbb', fontSize: 15 }}>
                <li>Marketplace Ad Management: We run targeted ad campaigns on platforms like Amazon, Flipkart, Myntra, Nykaa, and Meesho.</li>
                <li>Global Reach: We also manage ad operations on international platforms like Etsy and eBay.</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Image src="/assets/img/ONDC.png" alt="Retail mascot" width={160} height={160} style={{ objectFit: 'contain', borderRadius: 8 }} />
        </div>
      </div>
    </section>
  );
}
