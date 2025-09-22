import React from 'react';

const ai_future_ready_data = [
  {
    id: '01',
    title: 'AI-Based Content Creation',
    description:
      'AI tools with human touch. Leverage AI to scale your content faster with AI voiceovers, avatars, generated blogs & creatives, text-to-image & video content, and AI-powered ad assets.',
  },
  {
    id: '02',
    title: 'AI Automations',
    description:
      'AI that works while you sleep. Automate your workflows and customer journeys with WhatsApp + CRM workflows, AI chatbots for support, real-time reporting dashboards, and marketing automations.',
  },
  {
    id: '03',
    title: 'AI SEO, GEO, AEO',
    description:
      'Protect your brand in the AI landscape. We optimize for Google AI Overviews, Bing Copilot, ChatGPT, and all major AI search engines with structured schema, authority content, and AI-optimized strategies.',
  },
  {
    id: '04',
    title: 'Content Protection',
    description:
      'Your invisible shield against AI misuse. We protect your valuable content with watermarking & monitoring, copyright & licensing, attribution in AI answers, and strategic publishing approaches.',
  },
];

const AIFutureReadyArea: React.FC = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50" />
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">Our AI & Future-Ready Solutions</h4>
            <p className="cs_mp0 anim_text">
              We offer comprehensive AI-powered solutions designed to future-proof your
              business. Our cutting-edge technology and strategic approach ensure your
              brand stays ahead in the rapidly evolving AI landscape.
            </p>
          </div>

          <div className="cs_height_80 cs_height_lg_40" />

          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {ai_future_ready_data.map((item) => (
                  <div key={item.id} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1" />
                        <div className="cs_work_style_2" />
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">{item.description}</p>
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

export default AIFutureReadyArea;
