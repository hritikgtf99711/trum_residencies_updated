'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const MOBILE_BREAKPOINT = 991;

export const useBannerAnimation = (videoRef, textRef) => {
    const [showText, setShowText] = useState(false);
  
    const animateBannerText = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.4, ease: "ease.in" }
      )
        .fromTo(
          ".stripe_txt",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "ease.in" },
          "-=0.3"
        )
        .fromTo(
          ".comment-button",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "ease.in" },
          "-=0.2"
        );
      return tl;
    };
  
    useEffect(() => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  
      if (isMobile) {
        setShowText(true);
        animateBannerText();
      } else {
                 const video = videoRef.current;
        const handleVideoEnd = () => {
          setShowText(true);
          animateBannerText();
        };
  
        if (video) {
          video.addEventListener("ended", handleVideoEnd);
          return () => video.removeEventListener("ended", handleVideoEnd);
        }
      }
    }, [videoRef, textRef]);
  
    return { showText };
  };

// About Us Animation Hook
export const useAboutAnimation = (containerRef) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "ease.in", duration: 2 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        // toggleActions: "play none none none",
        // markers: process.env.NODE_ENV === 'development',
      },
    });

    tl.to(".left_content", { x: "0", opacity: 1 })
      .to(".right_content", { x: "0", opacity: 1 }, "<")
      .to(".building_create", { 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
        duration: 3 
      }, "<");

    return () => tl.kill();
  }, { scope: containerRef });
};

export const useInteriorAnimation = (containerRef) => {
  useGSAP(() => {
    let animation;
    const figures = containerRef.current?.querySelectorAll("figure");
    const slides = figures?.length - 1;

    if (slides <= 0) return;

    const setupAnimation = () => {
      if (animation) animation.kill();

      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

      if (!isMobile && containerRef.current) {
        const totalWidth = containerRef.current.offsetWidth;

        animation = gsap.to(figures, {
          xPercent: -50 * slides,
          ease: "none",
          scrollTrigger: {
            trigger: ".amenities_container",
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / slides,
              duration: { min: 0.1, max: 0.3 },
              ease: "ease.in",
            },
            start:"bottom center",
            end: `+=${(totalWidth * slides * 0.1)}`,
            // markers:true,
          },
        });
      }
    };


    

    setupAnimation();
    window.addEventListener("resize", setupAnimation);

    return () => {
      window.removeEventListener("resize", setupAnimation);
      if (animation) animation.kill();
    };
    
  }, { scope: containerRef });
  
};


export const useAboutProject = (containerRef) => {
    useGSAP(() => {
      const tl = gsap.timeline({
        defaults: { ease: "ease-in", duration: 2 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          // markers: process.env.NODE_ENV === 'development',
        },
      });
  
      tl.to(".after", { x: "-50%" })
        .to(".before", { x: "50%" }, "<");
  
      return () => tl.kill();
    }, { scope: containerRef });
  };
  


  
  export const useBodySmoothScroll = () => {
    useGSAP(() => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
  
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener('resize', handleResize);
  
      const handleAnchorClick = (e) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('href');
        smoother.scrollTo(target, true, 'top top');
      };
  
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => link.addEventListener('click', handleAnchorClick));
  
      return () => {
        window.removeEventListener('resize', handleResize);
        links.forEach(link => link.removeEventListener('click', handleAnchorClick));
        smoother.kill();
      };
    }, []);
  };