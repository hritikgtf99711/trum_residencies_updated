"use client"; // Ensure it's a client-only component
import "./globals.css";
import { Montserrat, Cinzel } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";
import Sidemenu from "./utils/Sidemenu";
import SmoothScroll from "./utils/SmoothScroller";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","300","500", "700","200","100"], variable: "--font-montserrat" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500", "700"], variable: "--font-cinzel" });

export default function RootLayout({ children }) {
  // const smootherRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     try {
  //       smootherRef.current = ScrollSmoother.create({
  //         wrapper: "#smooth-wrapper",
  //         content: "#smooth-content",
  //         smooth: 2,
  //         effects: true,
  //       });
  //     } catch (error) {
  //       console.error("ScrollSmoother initialization failed:", error);
  //     }
  //   }

  //   return () => {
  //     if (smootherRef.current) {
  //       smootherRef.current.kill();
  //       smootherRef.current = null;
  //     }
  //   };
  // }, []);

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cinzel.variable} bg-[#000]`} id="smooth-wrapper">
    
      <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
