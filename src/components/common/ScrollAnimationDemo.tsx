'use client'

import RevealOnScroll from '@/components/common/RevealOnScroll';
import React from 'react';

const ScrollAnimationDemo = () => {
  const demoCards = [
    { title: "Fade In Up", description: "Classic fade in with upward movement" },
    { title: "Slide From Left", description: "Element slides in from the left side" },
    { title: "Slide From Right", description: "Element slides in from the right side" },
    { title: "Fade In Down", description: "Fade in with downward movement" },
    { title: "Delayed Animation", description: "Animation with custom delay timing" },
    { title: "Custom Duration", description: "Longer animation duration for dramatic effect" }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealOnScroll delay={0.2}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '3rem',
            color: '#333',
            fontWeight: 'bold'
          }}>
            Animation Demo Gallery
          </h2>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Different animation directions */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div className="demo-card">
              <h3>{demoCards[0].title}</h3>
              <p>{demoCards[0].description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={0.2}>
            <div className="demo-card">
              <h3>{demoCards[1].title}</h3>
              <p>{demoCards[1].description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.3}>
            <div className="demo-card">
              <h3>{demoCards[2].title}</h3>
              <p>{demoCards[2].description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="down" delay={0.4}>
            <div className="demo-card">
              <h3>{demoCards[3].title}</h3>
              <p>{demoCards[3].description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8} duration={0.8}>
            <div className="demo-card">
              <h3>{demoCards[4].title}</h3>
              <p>{demoCards[4].description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll duration={1.2} distance={60}>
            <div className="demo-card">
              <h3>{demoCards[5].title}</h3>
              <p>{demoCards[5].description}</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Sequential list animation */}
        <RevealOnScroll delay={0.2}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#333'
          }}>
            Sequential List Animation
          </h3>
        </RevealOnScroll>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {Array.from({ length: 5 }, (_, i) => (
            <RevealOnScroll key={i} delay={0.1 * (i + 1)} duration={0.6}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                margin: '1rem 0',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                  List Item {i + 1}
                </h4>
                <p style={{ margin: 0, color: '#666' }}>
                  This item appears {i === 0 ? 'first' : `${i + 1}${['', 'nd', 'rd', 'th', 'th'][i]} in sequence`} with a staggered delay.
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style jsx>{`
        .demo-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .demo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }

        .demo-card h3 {
          margin: 0 0 1rem 0;
          color: #333;
          font-size: 1.5rem;
        }

        .demo-card p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default ScrollAnimationDemo;
