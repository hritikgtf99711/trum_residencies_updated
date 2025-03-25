"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SparkleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const noiseDataRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createNoise = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);

      for (let i = 0; i < buffer32.length; i++) {
        buffer32[i] = Math.random() < 0.5 ? 0xfe000000 : 0;
      }

      noiseDataRef.current.push(idata);
    };

    const setup = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      noiseDataRef.current = [];
      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    const paintNoise = () => {
      if (!ctx) return;

      frameRef.current = frameRef.current === 9 ? 0 : frameRef.current + 1;
      ctx.putImageData(noiseDataRef.current[frameRef.current], 0, 0);
    };

    const loop = () => {
      paintNoise();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);

      resizeTimeoutRef.current = setTimeout(() => {
        cancelAnimationFrame(animationFrameRef?.current);
        setup();
      }, 200);
    };

    // Initial setup
    setup();
    window.addEventListener("resize", handleResize);

    // GSAP animation for text elements
    gsap.fromTo(
      ".main-title, .link",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2 }
    );

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center h-screen text-center text-white">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 "
      />
    </main>
  );
};

export default SparkleBackground;
