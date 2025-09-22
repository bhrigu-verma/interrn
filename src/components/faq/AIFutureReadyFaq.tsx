'use client'
import React, { useState } from 'react';

interface DataType {
  id: number;
  question: string;
  answer: string;
}

const ai_future_ready_faq_data: DataType[] = [
  {
    id: 1,
    question: "What's included in your AI-based content creation services?",
    answer: "Our AI-based content creation includes AI voiceovers & avatars, AI-generated blogs & creatives, text-to-image & video content, and AI-powered ad assets. We combine cutting-edge AI tools with human expertise to deliver scalable, high-quality content that maintains your brand voice and authenticity."
  }
];

const AIFutureReadyFaq = () => {
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
                  Frequently Asked Questions About AI & Future-Ready Solutions
                </h2>
                <div className="cs_height_35 cs_height_lg_20"></div>
                <p className="cs_section_subtitle anim_text m-0">
                  Got questions about our AI-powered solutions and future-ready services? Here are answers to help you understand 
                  how we leverage artificial intelligence to transform your business and protect your brand in the AI era.
                </p>
              </div>
              <div className="cs_height_55 cs_height_lg_30"></div>
            </div>
            <div className="col-lg-6">
              <div className="cs_accordians cs_style_1 anim_div_ShowDowns">
                {ai_future_ready_faq_data.map((item) => (
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
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIFutureReadyFaq;
