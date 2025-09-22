'use client'
import React, { useState } from 'react';

interface DataType {
  id: number;
  question: string;
  answer: string;
}

const webapp_development_faq_data: DataType[] = [
  {
    id: 1,
    question: "What types of websites and apps do you develop?",
    answer: "We develop all types of digital solutions including corporate websites, e-commerce platforms, mobile apps (Android/iOS), custom CRM systems, and web applications. Our solutions are tailored to your specific business needs, from simple landing pages to complex enterprise applications."
  },
  {
    id: 2,
    question: "Do you provide both design and development services?",
    answer: "Yes! We offer complete end-to-end services from UI/UX design and wireframing to full development and deployment. Our design-first approach ensures that every application we build is both beautiful and functional, with seamless user experiences."
  },
  {
    id: 3,
    question: "Can you integrate with our existing systems and tools?",
    answer: "Absolutely! We specialize in API integrations and can connect your new applications with existing CRM systems, payment gateways, inventory management, marketing tools, and any third-party services your business relies on."
  },
  {
    id: 4,
    question: "Do you provide hosting and ongoing maintenance?",
    answer: "Yes, we offer complete hosting solutions including domain registration, SSL certificates, performance optimization, and ongoing maintenance. We ensure your applications are fast, secure, always accessible, and updated with the latest features."
  },
  {
    id: 5,
    question: "How long does a typical development project take?",
    answer: "Timeline depends on project complexity. Simple websites take 2-4 weeks, e-commerce platforms take 6-12 weeks, mobile apps take 8-16 weeks, and custom enterprise applications can take 3-6 months. We provide detailed project timelines during our planning phase."
  },
  {
    id: 6,
    question: "What technologies and frameworks do you use?",
    answer: "We use modern, scalable technologies including React, Next.js, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your specific requirements and long-term goals."
  }
];

const WebAppFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id);
  };

  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                  FAQ
                </h3>
                <div className="cs_height_5 cs_height_lg_5"></div>
                <h2 className="cs_section_title anim_heading_title">
                  Frequently Asked Questions About Our Web & App Development Services
                </h2>
                <div className="cs_height_35 cs_height_lg_20"></div>
                <p className="cs_section_subtitle anim_text m-0">
                  Got questions about our development process? Here are answers to the most common questions 
                  our clients ask about web development, mobile apps, and custom solutions.
                </p>
              </div>
              <div className="cs_height_55 cs_height_lg_30"></div>
            </div>
            <div className="col-lg-6">
              <div className="cs_accordians cs_style_1 anim_div_ShowDowns">
                {webapp_development_faq_data.map((item) => (
                  <div 
                    key={item.id} 
                    className={`cs_accordian ${openFaq === item.id ? 'active' : ''}`}
                  >
                    <div 
                      className="cs_accordian_head" 
                      onClick={() => toggleFaq(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <h2 className="cs_accordian_title">{item.question}</h2>
                      <span className="cs_accordian_toggle cs_accent_color">
                        <svg
                          width={15}
                          height={8}
                          viewBox="0 0 15 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 0L7.5 7.5L15 0H0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className={`cs_accordian_body ${openFaq === item.id ? 'cs_accordian_body_active' : ''}`}>
                      <div className="cs_accordian_body_in">
                        <p style={{ fontWeight: 400, fontSize: '0.95rem', lineHeight: '1.6' }}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default WebAppFAQ;
