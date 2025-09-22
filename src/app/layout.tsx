'use client';

import "@/styles/index.scss";
import Script from 'next/script';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Shout OTB</title>
      </head>

      <body className="dark">
        {children}

        <Script
          src="//code.tidio.co/0rxzl3nzg5zvdi2uyhttskr1hwdtgbm7.js"
          strategy="afterInteractive"
        />
        
        <style>{`
          /* Removed custom cursor and special Tidio z-index overrides to
             restore default system cursor behavior and equalize chat icon
             stacking. Keep only text justification here. */

          

          /* Tidio chat: nudge the widget up slightly (5-10px) to avoid overlap with other UI */
          /* Target common Tidio selectors; use transform and bottom fallback with !important to override injected styles */
          #tidio-chat,
          .tidio-chat-iframe,
          .tidio-launcher,
          .tidio-floating-button,
          .tidio-iframe-container,
          .tidio-chat-wrapper {
            transform: translateY(-8px) !important;
            /* fallback if transform is not desired: increase bottom offset */
            bottom: calc( (var(--tidio-bottom, 16px)) + 8px ) !important;
          }
        `}</style>
      </body>
    </html>
  );
}