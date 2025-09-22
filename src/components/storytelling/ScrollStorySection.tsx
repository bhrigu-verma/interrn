'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollStorySection = () => {
  const storySectionRef = useRef<HTMLDivElement>(null);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storySection = storySectionRef.current;
    const storyContainer = storyContainerRef.current;
    const slides = slidesRef.current;

    if (!storySection || !storyContainer || slides.length === 0) return;

    // Create GSAP Timeline for sequencing animations
    const tl = gsap.timeline();

    // Animation sequencing for slides
    slides.forEach((slide, index) => {
      if (index === 0) {
        // First slide is already visible, animate its content
        const textContent = slide.querySelector('.slide-content');
        gsap.set(textContent, { opacity: 1, y: 0 });
        return;
      }

      // For each subsequent slide, create crossfade effect
      const currentSlide = slide;
      const previousSlide = slides[index - 1];
      const currentContent = currentSlide.querySelector('.slide-content');

      // Add slide transition to timeline
      tl.to(currentSlide, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, index * 2) // Stagger the timing
      .to(previousSlide, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, index * 2) // Start at same time for crossfade
      .to(currentContent, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, index * 2 + 0.3); // Slight delay for text animation
    });

    // Create ScrollTrigger for the entire animation sequence
    ScrollTrigger.create({
      trigger: storySection,
      pin: storyContainer,
      scrub: 1, // Smooth scrubbing with 1 second delay
      start: "top top",
      end: "bottom bottom", // End when the bottom of the trigger hits the bottom of the viewport
      animation: tl,
      anticipatePin: 1, // Prevents "jump" on pin
      onUpdate: (self) => {
        // Optional: Add any additional scroll-based effects
        console.log("Animation progress:", self.progress);
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add slides to refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  return (
    <>
      {/* Story Section - Acts as scroll trigger */}
      <section 
        ref={storySectionRef}
        className="story-section"
        style={{
          height: '400vh', // Set to 4x viewport height to create a "scroll runway"
          position: 'relative'
        }}
      >
        {/* Story Container - Gets pinned to viewport */}
        <div 
          ref={storyContainerRef}
          className="story-container"
          style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          {/* Slide 1 - Our Vision */}
          <div 
            ref={addToRefs}
            className="slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 1, // First slide starts visible
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <div 
              className="slide-content"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                maxWidth: '800px',
                padding: '0 2rem'
              }}
            >
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Vision
              </h1>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                We believe in creating digital experiences that transform businesses and inspire audiences.
              </p>
            </div>
          </div>

          {/* Slide 2 - Our Process */}
          <div 
            ref={addToRefs}
            className="slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0, // Hidden initially
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <div 
              className="slide-content"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                maxWidth: '800px',
                padding: '0 2rem'
              }}
            >
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Process
              </h1>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                From strategy to execution, we follow a proven methodology that delivers exceptional results.
              </p>
            </div>
          </div>

          {/* Slide 3 - Our Impact */}
          <div 
            ref={addToRefs}
            className="slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0, // Hidden initially
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <div 
              className="slide-content"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                maxWidth: '800px',
                padding: '0 2rem'
              }}
            >
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Impact
              </h1>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                Measurable results that drive growth and create lasting value for our clients.
              </p>
            </div>
          </div>

          {/* Slide 4 - Your Success */}
          <div 
            ref={addToRefs}
            className="slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0, // Hidden initially
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <div 
              className="slide-content"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                maxWidth: '800px',
                padding: '0 2rem'
              }}
            >
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', fontWeight: 'bold' }}>
                Your Success
              </h1>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                Together, we'll build something extraordinary that exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional content section to demonstrate unpinning */}
      <section style={{ height: '100vh', background: '#f8f9fa', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#333' }}>
            Continue Your Journey
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#666' }}>
            This section demonstrates that normal scrolling resumes after the pinned storytelling section completes.
            The GSAP ScrollTrigger automatically unpins the previous section and allows natural page flow to continue.
          </p>
        </div>
      </section>
    </>
  );
};

export default ScrollStorySection;
