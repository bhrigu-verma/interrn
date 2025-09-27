
import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import AboutHomeFour from "@/components/about/AboutHomeFour";

const croAnalyticsData = {
  title: "CRO & Analytics Hub",
  tagline: "Conversions aren't luck—they're strategy.",
  image: "/assets/img/seo.png",
  intro: "We analyze funnels and fix leaks to maximize conversions.",
  description:
    "CRO ensures every visitor has the highest chance of converting into a customer. It's science + psychology.",
  sections: [
    {
      title: "Funnel Optimization",
      content: [
        "Map user journeys to identify conversion points",
        "UI/UX optimization for better user flow",
        "Form and checkout optimization"
      ]
    },
    {
      title: "Testing & Experimentation",
      content: [
        "A/B testing and multivariate testing",
        "Content and CTA experimentation",
        "Identify high-performing page versions"
      ]
    },
    {
      title: "Insights & Reporting",
      content: [
        "Advanced analytics dashboards and GA4 setup",
        "Heatmaps and user behavior analysis",
        "Attribution modeling and performance tracking"
      ]
    }
  ],
  cta: "Let's Turn Visitors into Buyers."
};

const croFaqs = [
  {
    question: "What tools do you use for analytics?",
    answer:
      "We use GA4, heatmapping tools, session replays, and custom dashboards to gather a full picture of user behavior."
  },
  {
    question: "How do you prioritize tests?",
    answer:
      "We prioritize tests based on impact and effort, focusing first on changes likely to deliver the largest conversion improvements."
  },
  {
    question: "Can you help with GA4 setup and attribution?",
    answer:
      "Yes - we provide GA4 setup, custom events, and tailored attribution models to ensure accurate measurement."
  }
];

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate {...croAnalyticsData} />
            <ServiceFAQ title="CRO & Analytics - FAQ" faqs={croFaqs} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
