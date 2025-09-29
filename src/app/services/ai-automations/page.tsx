'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import { aiAutomationsFAQs } from '@/data/service_faqs';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title="AI Automations"
              tagline="AI that works while you sleep"
              image="/assets/img/aiautomation.png"
              intro="Automate the busywork and keep the human touch. We stitch tools together so ops run faster from lead capture to follow‑ups and reporting."
              description="Transform your business operations with intelligent automation solutions that handle repetitive tasks while preserving the human elements that matter most to your customers."
              sections={[
                {
                  title: "Automations we build",
                  content: [
                    'WhatsApp + CRM workflows and lead routing',
                    'AI chatbots, FAQs, and handoff to human',
                    'Reporting dashboards with alerts',
                    'Data syncs across marketing apps'
                  ]
                },
                {
                  title: "Stack",
                  content: ['Make/Zapier', 'Webhook + serverless', 'Meta/Google APIs', 'Sheets/BigQuery/Notion']
                }
              ]}
            />
            <ServiceFAQ faqs={aiAutomationsFAQs} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
