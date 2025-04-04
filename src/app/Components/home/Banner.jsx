"use client";
import React, { useRef, useState,useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Banner() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [showText, setShowText] = useState(false);

  const handleVideoEnd = () => {
    setShowText(true);
      if (window.innerWidth > 991) {
      animateWithGSAP();
    }
  };

  useEffect(() => {
    if ( window.innerWidth <= 991) {
      animateWithGSAP();
    }
  }, [showText]);
  
  
  const animateWithGSAP = () => {
    const tl = gsap.timeline();
  
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
    .fromTo(
      ".stripe_txt",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(
      ".comment-button",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );
  };
  
  return (
    <section className="relative h-[calc(100vh-137px)] relative">
      <div
        ref={textRef}
        className={`z-[2] relative h-[calc(100%)] custom_container text-center flex flex-col  lg:pb-0 pb-[200px]  lg:justify-between  justify-center lg:pb-10 place-items-center ${
          showText ? "opacity-100" : "opacity-0"
        }`}

      >
        <Image src={"/assets/images/blob_cicle_banner.svg"} alt="building banner" className="absolute  top-[-122px] lg:hidden"  height={"500"} width={"500"} />
        <h1 className="bg-custom-gradient inline-block tracking-[10px] text-transparent bg-clip-text lg:text-[80px] text-[60px] lg:m-auto lg:mb-auto lg:pb-0 pb-10 lg:font-[normal] font-[500]">
          <span>TRUMP</span>
          <span className="block lg:text-[30px] text-[24px] lg:w-[100px] m-auto text-center lg:font-[normal] font-[500]">
            <span className="mb-3 inline-block">IS</span> BACK
          </span>
        </h1>
        <div className="mb-10">
          <div className="stripe_txt  lg:bg-[#000] uppercase lg:px-10 py-2">
            <p className="text-[#D6D6D6] text-bold lg:tracking-[2px] lg:text-[18px] text-[16px] font-[cinzel] font-[500] lg:mb-0 mb-[10px]">
              Join the Elite – Experience the Trump Legacy
            </p>
          </div>
          <a href="" className="comment-button lg:mt-10 inline-block lg:tracking-[2px] tracking-[normal] lg:font-[200] font-[500]">
            Reserve Your Trump Home
          </a>
        </div>
      </div>

      <Image src={"/assets/images/building_banner.svg"} alt="buildding"  className="lg:hidden absolute bottom-[-56px] block lg:mb-0 mb-[40px] w-full" width={"800"} height={"800"}/>
      <video
        ref={videoRef}
        className="mt-[50px] lg:w-full lg:block hidden w-[800px] absolute lg:h-full bottom-[0] left-[0] w-full"
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src="/assets/video/building_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
