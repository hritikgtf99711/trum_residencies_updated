"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useGsapAnimation = (animationCallback, killDelay = 1) => {
  const container = useRef(null);

  useGSAP(() => {
    if (!animationCallback || !container.current) return;

    const ctx = gsap.context((self) => {
      animationCallback(gsap, self);
    }, container);

    const killTimeout = setTimeout(() => {
      ctx.revert();
    }, killDelay * 1000);

    return () => {
      clearTimeout(killTimeout);
      ctx.revert(); 
    };
  }, { scope: container });

  return container;
};

export default useGsapAnimation;
