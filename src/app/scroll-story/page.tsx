'use client'
import ScrollStorySection from '@/components/storytelling/ScrollStorySection';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ScrollStoryDemo = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero section before the story */}
            <section style={{ 
              height: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              color: 'white',
              textAlign: 'center'
            }}>
              <div>
                <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>
                  Scroll-Driven Storytelling
                </h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
                  Scroll down to experience our immersive pinned storytelling section powered by GSAP ScrollTrigger
                </p>
                <div style={{ marginTop: '3rem', fontSize: '2rem' }}>
                  ↓ Scroll Down ↓
                </div>
              </div>
            </section>

            {/* The main scroll story section */}
            <ScrollStorySection />

            {/* Additional content after the story */}
            <section style={{ 
              height: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: '#ffffff',
              color: '#333',
              textAlign: 'center',
              padding: '0 2rem'
            }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                  Ready to Get Started?
                </h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                  Experience the power of scroll-driven storytelling in your next project. 
                  This technique creates engaging, cinematic experiences that keep users immersed in your content.
                </p>
              </div>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default ScrollStoryDemo;
