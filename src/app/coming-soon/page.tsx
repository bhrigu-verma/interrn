'use client'

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const ComingSoonPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleVideoLoad = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Silently handle autoplay failures
      });
    }
  };

  return (
    <div className="coming-soon-container">
      {/* Back Button */}
      <button 
        onClick={handleGoBack}
        className="back-button"
        aria-label="Go back"
      >
        <ArrowLeft size={24} />
        <span className="back-text">Back</span>
      </button>

      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
      >
        <source src="/assets/img/coming_soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <style jsx>{`
          .coming-soon-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 10;
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 12px 16px;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 500;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .back-button:active {
            transform: translateY(0);
          }

          .back-text {
            display: inline;
          }

          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .back-button {
              top: 15px;
              left: 15px;
              padding: 10px 14px;
              font-size: 13px;
            }

            .back-text {
              display: none;
            }

            .background-video {
              object-fit: cover;
              min-height: 100vh;
            }
          }

          @media (max-width: 480px) {
            .back-button {
              top: 10px;
              left: 10px;
              padding: 8px 12px;
            }

            .coming-soon-container {
              height: 100vh;
              height: 100svh; /* Safe area viewport height for mobile browsers */
            }
          }

          /* Tablet Styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .back-button {
              top: 25px;
              left: 25px;
              padding: 14px 18px;
            }
          }

          /* Large Screen Styles */
          @media (min-width: 1440px) {
            .back-button {
              top: 30px;
              left: 30px;
              padding: 16px 20px;
              font-size: 16px;
            }
          }

          /* Landscape Mobile */
          @media (max-height: 500px) and (orientation: landscape) {
            .back-button {
              top: 10px;
              left: 10px;
              padding: 8px 10px;
              font-size: 12px;
            }

            .back-text {
              display: none;
            }
          }

          /* Ultra-wide screens */
          @media (min-width: 1920px) {
            .background-video {
              object-fit: cover;
            }
          }

          /* High DPI displays */
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .back-button {
              border-width: 0.5px;
            }
          }
        `}</style>
    </div>
  );
};

export default ComingSoonPage;