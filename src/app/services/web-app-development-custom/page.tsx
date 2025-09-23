'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
         <ServiceDetailTemplate
  title="Web & App Development with Custom Solutions"
  tagline="Faster, cleaner, smarter websites."
  image="/assets/img/Web Developer.png"
  
  // Add the missing required props below
  intro="We build high-performance, scalable, and secure web and mobile applications tailored to your unique business needs, ensuring a seamless user experience across all devices."
  description="Our full-stack development process covers everything from initial strategy and UI/UX design to front-end and back-end engineering, deployment, and ongoing maintenance. We specialize in modern frameworks to deliver robust custom solutions."
/>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
