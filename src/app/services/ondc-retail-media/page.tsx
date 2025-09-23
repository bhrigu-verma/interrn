
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function OndcRetailMediaPage() {
  return (
    <section className="cs_primary_bg position-relative" style={{ minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1" style={{ marginBottom: 32 }}>
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle">E-Commerce Operations Specialist</div>
            <h1 className="cs_section_title" style={{ fontSize: 38, margin: '12px 0 8px' }}>
              Retail ads that deliver real sales.
            </h1>
            <div className="cs_section_subtitle" style={{ fontWeight: 400, fontSize: 20, marginBottom: 12 }}>
              Expand your e-commerce reach with next-gen retail marketing.
            </div>
            <div style={{ maxWidth: 600, fontSize: 18, color: '#eee', marginBottom: 24 }}>
              Retail ads that deliver real sales. We expand your e-commerce reach with next-gen retail marketing, helping you tap into new marketplaces and drive measurable growth.
            </div>
          </div>
        </div>

        <div className="cs_card_1_list" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Onboarding & Catalog Optimization */}
          <div className="cs_card cs_style_1 cs_color_1" style={{ position: 'relative', overflow: 'hidden', minHeight: 180, padding: 32 }}>
            <div className="cs_card_right">
              <div className="cs_card_right_in">
                <h2 className="cs_card_title" style={{ fontSize: 24, marginBottom: 8 }}>
                  <Link href="/services/ondc-onboarding">Onboarding & Catalog Optimization</Link>
                </h2>
                <div className="cs_card_subtitle" style={{ fontSize: 16, color: '#ccc' }}>
                  We handle the entire onboarding and cataloging process to ensure your products are discoverable and positioned for success on all major e-commerce platforms. This includes getting your brand on the ONDC network and optimizing your listings across platforms like Amazon, Flipkart, Myntra, Nykaa and others.
                </div>
              </div>
            </div>
            <div className="cs_service_mascot" style={{ position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)', width: 120, height: 120, opacity: 0.8 }}>
              <Image src="/assets/img/ONDC.png" alt="ONDC mascot" width={120} height={120} style={{ objectFit: 'contain', borderRadius: 8 }} />
            </div>
          </div>

          {/* Retail Ad Campaigns */}
          <div className="cs_card cs_style_1 cs_color_1" style={{ position: 'relative', overflow: 'hidden', minHeight: 180, padding: 32 }}>
            <div className="cs_card_right">
              <div className="cs_card_right_in">
                <h2 className="cs_card_title" style={{ fontSize: 24, marginBottom: 8 }}>
                  <Link href="/services/retail-ad-campaigns">Retail Ad Campaigns</Link>
                </h2>
                <div className="cs_card_subtitle" style={{ fontSize: 16, color: '#ccc' }}>
                  We run performance-focused ad campaigns on top retail platforms, ensuring every dollar spent leads to a sale. We manage and optimize your ad spend across all major marketplaces, including:
                  <ul style={{ margin: '8px 0 0 18px', color: '#bbb', fontSize: 15 }}>
                    <li>Marketplace Ad Management: We run targeted ad campaigns on platforms like Amazon, Flipkart, Myntra, Nykaa, and Meesho.</li>
                    <li>Global Reach: We also manage ad operations on international platforms like Etsy and eBay.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cs_service_mascot" style={{ position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)', width: 120, height: 120, opacity: 0.8 }}>
              <Image src="/assets/img/ONDC.png" alt="Retail mascot" width={120} height={120} style={{ objectFit: 'contain', borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
