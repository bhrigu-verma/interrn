import React, { useState, useRef, useEffect } from 'react';

interface FloatingServiceImageProps {
  image: string;
  children: React.ReactNode;
}

const FloatingServiceImage: React.FC<FloatingServiceImageProps> = ({ image, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setCoords({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      console.log('Mouse entered, showing image:', image);
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      console.log('Mouse left, hiding image');
      setVisible(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      const touch = e.touches[0];
      setCoords({ x: touch.clientX, y: touch.clientY });
      setVisible(true);
      console.log('Touch started, showing image:', image);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setVisible(false);
      console.log('Touch ended, hiding image');
    }
  };

  const handleClick = () => {
    if (isMobile) {
      // Toggle visibility on click for mobile
      setVisible(!visible);
      console.log('Clicked, toggling image:', image);
    }
  };

  return (
    <>
      <span
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          cursor: isMobile ? 'pointer' : 'pointer', 
          display: 'inline-block',
          padding: isMobile ? '4px' : '0',
          borderRadius: isMobile ? '4px' : '0',
          backgroundColor: isMobile && visible ? 'rgba(243, 60, 82, 0.1)' : 'transparent',
          transition: 'background-color 0.3s ease'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        {children}
      </span>
      
      {/* Mobile floating indicator */}
      {visible && isMobile && (
        <div
          style={{
            position: 'fixed',
            left: '50%',
            top: '20px',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 9999,
            background: 'rgba(243, 60, 82, 0.9)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          📱 {image.split('/').pop()?.replace('.png', '')} Mascot
        </div>
      )}
      
      {/* Floating Image */}
      <div
        style={{
          position: 'fixed',
          left: isMobile ? '50%' : coords.x + 20,
          top: isMobile ? '50%' : coords.y - 120,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: visible ? 1 : 0,
          transform: visible 
            ? (isMobile ? 'translate(-50%, -50%) scale(1)' : 'scale(1) translateY(0)') 
            : (isMobile ? 'translate(-50%, -50%) scale(0.8)' : 'scale(0.8) translateY(10px)'),
          zIndex: 9998,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: visible ? '0 12px 40px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        {visible && (
          <img
            src={image}
            alt="Service Preview"
            style={{
              width: isMobile ? '200px' : '150px',
              height: 'auto',
              display: 'block',
              borderRadius: '12px',
              backgroundColor: '#fff',
            }}
            onError={(e) => {
              console.error('Image failed to load:', image);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', image);
            }}
          />
        )}
      </div>
      
      {/* Mobile instruction overlay */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            zIndex: 9999,
            opacity: visible ? 0 : 0.8,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          👆 Tap service titles to see mascots
        </div>
      )}
    </>
  );
};

export default FloatingServiceImage;
