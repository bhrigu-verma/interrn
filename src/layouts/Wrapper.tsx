'use client';

import { useEffect } from "react";  
import { gsap } from 'gsap';

import animationTitle from "@/utils/animationTitle";

import ScrollToTop from "@/components/common/ScrollToTop";
import LogoCursor from "@/components/common/LogoCursor";
import FloatingContactButton from "@/components/common/FloatingContactButton";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";


import { ScrollSmoother, } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);


const Wrapper = ({ children }: any) => {  

  // Enable GSAP ScrollSmoother only on desktop to avoid blocking touch scroll on mobile
  useEffect(() => {
    if (typeof window === "undefined") return;

    let smoother: any | undefined;

    const ensureNativeScroll = () => {
      // Make sure native scrolling is enabled
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      (document.documentElement as any).style.touchAction = 'auto';
      (document.body as any).style.touchAction = 'auto';
    };

    const setup = () => {
      if (window.innerWidth >= 1025) {
        // Desktop: enable smoother
        smoother = ScrollSmoother.create({
          smooth: 1.35,
          effects: true,
          // Use a tiny smoothTouch instead of false to avoid iOS locking in some cases
          smoothTouch: 0.1,
          normalizeScroll: true,
          ignoreMobileResize: true,
        });
      } else {
        // Mobile/tablet: disable smoother and ensure native scroll
        if (smoother) {
          try { smoother.kill(); } catch { /* noop */ }
          smoother = undefined;
        }
        ensureNativeScroll();
      }
    };

    setup();
    const onResize = () => {
      // Re-evaluate on breakpoint changes
      setup();
      if (smoother) {
        try { smoother.refresh(); } catch { /* noop */ }
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (smoother) {
        try { smoother.kill(); } catch { /* noop */ }
      }
      ensureNativeScroll();
    };
  }, []);

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    // Disable custom scrollSmother to avoid conflicts with GSAP and touch scrolling
    // scrollSmother(window);
  }, [])



  return <>
  <LogoCursor />
    {children}
    <ScrollToTop />

    <FloatingContactButton />

  </>;
};

export default Wrapper;

