import React from "react";

const ShoutCodeGrid = () => {
  // Correctly defined array of card objects
  const cards = [
    {
      title: "Curiosity Over Comfort",
      description: "We don't follow the obvious route - we chase the ones no one's mapped yet. Breakthroughs live where others don't dare to look."
    },
    {
      title: "Strategy With Edge", 
      description: "We don't gamble. Every bold move is backed by insight, testing, and a deep understanding of what actually works."
    },
    {
      title: "Human-First Automation",
      description: "We use tech to remove friction, not imagination. Machines handle the repeatable - people craft the remarkable."
    },
    {
      title: "Research at Light Speed",
      description: "We turn deep research into fast action - because the right opportunities don't wait."
    },
    {
      title: "24/7 Global Mindset",
      description: "Our team works across time zones, so momentum never stops. Innovation keeps moving, even while the world rests."
    },
    {
      title: "Results, Not Rituals",
      description: "No vanity metrics. Every campaign, every post, every ad exists to move the needle - clearly and measurably."
    }
  ];

  return (
    <div style={{ 
      background: '#181818',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Section Heading */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        maxWidth: '800px'
      }}>
        <h2 style={{
          fontSize: '55px',
          fontWeight: '900',
          color: '#ffffff',
          margin: '0',
          fontFamily: 'var(--heading-font-family, "Inter Tight", sans-serif)',
          lineHeight: '1.1'
        }}>
          The Shout Code
        </h2>
      </div>

      {/* Grid Container */}
      <div className="shout-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '32px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        {cards.map((card, index) => (
          <div key={index} className="shout-card">
            <div className="card-inner">
              <h3 className="card-title">
                {card.title}
              </h3>
              <p className="card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .shout-card {
          position: relative;
          background: transparent;
          border-radius: 20px;
          padding: 4px;
          min-height: 240px;
          cursor: pointer;
          transition: transform 0.3s ease;
          overflow: hidden;
        }

        .shout-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 4px;
          background: linear-gradient(45deg, #F8A39D, #F5B5B1, #F8A39D, #F29287);
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: shine 3s linear infinite;
        }

        .shout-card:hover::before {
          opacity: 1;
        }

        .shout-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: rgba(248, 163, 157, 0.05);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .shout-card:hover::after {
          opacity: 1;
        }

        .card-inner {
          position: relative;
          background: linear-gradient(135deg, #1f1f1f 0%, #181818 100%);
          border-radius: 16px;
          padding: 40px 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          z-index: 1;
          transition: background 0.3s ease;
          border: 1px solid rgba(248, 163, 157, 0.1);
        }

        .shout-card:hover .card-inner {
          background: linear-gradient(135deg, #222222 0%, #1a1a1a 100%);
          border: 1px solid rgba(248, 163, 157, 0.2);
        }

        .card-title {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          margin: 0;
          transition: color 0.3s ease;
          font-family: var(--heading-font-family, "Inter Tight", sans-serif);
          line-height: 1.3;
        }

        .shout-card:hover .card-title {
          color: #F8A39D;
        }

        .card-description {
          color: #999999;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
          transition: color 0.3s ease;
          font-family: var(--body-font-family, "Kanit", sans-serif);
        }

        .shout-card:hover .card-description {
          color: #cccccc;
        }

        .shout-card:hover {
          transform: translateY(-8px);
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .shout-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr) !important;
            gap: 24px !important;
          }
          
          .shout-card {
            min-height: 220px;
          }
          
          .card-inner {
            padding: 32px 24px;
          }
          
          h2[style*="fontSize"] {
            font-size: 45px !important;
          }
        }

        @media (max-width: 768px) {
          .shout-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 1fr) !important;
            gap: 20px !important;
          }
          
          .shout-card {
            min-height: 200px;
          }
          
          .card-inner {
            padding: 28px 20px;
          }
          
          h2[style*="fontSize"] {
            font-size: 38px !important;
          }
          
          div[style*="padding"] {
            padding: 60px 16px !important;
          }
          
          div[style*="marginBottom"] {
            margin-bottom: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .card-title {
            font-size: 20px;
          }
          
          .card-description {
            font-size: 15px;
          }
          
          h2[style*="fontSize"] {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ShoutCodeGrid;