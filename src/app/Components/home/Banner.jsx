"use client";
import React, { useRef, useState,useEffect } from "react";
import { useBannerAnimation } from "@/app/utils/SharedTimeline";
import { useModal } from "@/app/hooks/modaContext";
// import { MapPin } from 'lucide-react';


export default function Banner() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const { showText } = useBannerAnimation(videoRef, textRef);

const { isOpen, openModal, closeModal } = useModal();

  let basePath=process.env.NEXT_PUBLIC_BASE_PATH
  let videoPath=process.env.NEXT_PUBLIC_BASE_PATH_VIDEO

  return (
    <section className="relative md:h-[calc(100vh-137px)]  relative">
              <img src={basePath+"/blob_cicle_banner.svg"} alt="building banner" className="absolute w-full  top-[-122px] left-[0] md:hidden"  height={"500"} width={"500"} />

      <div
        ref={textRef}
        className={`z-[2] relative h-[calc(100%)] custom_container text-center flex flex-col  lg:pb-0 md:pt-0 pt-[60px]  lg:justify-between  justify-center lg:pb-10 place-items-center ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="bg-custom-gradient inline-block md:mb-[40px]  md:pt-[0px]  tracking-[10px] text-transparent bg-clip-text lg:text-[120px] text-[60px] lg:m-auto lg:mb-auto lg:pb-0 md:pb-10 lg:font-[normal] font-[500]">
          <span className="font-[cinzel] text-[#e8c183] relative">TRUMP<span className="text-[#e8c183] text-[70px] absolute md:top-[0] top-[-15px]">®</span></span>
          <span className="block text-[24px] uppercase font-[cinzel] m-auto text-center lg:font-[normal] font-[500]">
          Back  <span className="mb-3 inline-block">In</span> Gurgaon
          </span>
        </h1>

        <div className="md:w-[80%] lg:w-[60%] w-[100%] md:mt-[0] mt-[30px] p-6 flex justify-center">
      <div className="relative w-full max-w-4xl border-[1px] border-[#fff]">
        {/* Top Banner */}
        <div className="bg-[#e8c183] md:absolute md:w-[90%]  w-[100%] left-[50%] top-[-25px] md:translate-x-[-50%] inline-block mx-[auto] px-4 py-2 text-center">
          <h2 className="text-[16px] md:text-[20px] tracking-wider text-black">
           <strong> 3, 4 & DOUBLE-HEIGHT 4 BED</strong> <span className="font-medium"> RESIDENCES</span>
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col  md:flex-row justify-between place-items-center py-8 px-[40px] bg-black text-white">
          {/* Location */}
          <div className="flex items-center  text-4xl    m-[auto] md:pt-[25px] font-bold md:pb-[0] pb-6 md:mb-0 md:border-[0] border-b-[1px] border-dashed">
            <div className="flex item-center flex-col mr-2 justify-center gap-[4px]">
            <img src="/assets/images/location.png" alt="location" className="w-[30px] "/>
            <div className="h-[20px] w-[1px] bg-[#fff] mt-[5px] mx-auto"></div>
            </div>
            <div className="flex flex-col items-start leading-[normal]">
              <span className="md:text-[25px] text-[16px] font-[500] tracking-[normal]">SECTOR 69,</span>
              <span className="md:text-[25px] text-[16px] font-[500] tracking-[normal]">GURGAON</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block md:h-[40px]  mt-[25px] w-[1px] bg-[#fff] mx-[auto]"></div>
          
          {/* Price */}
          <div className="text-center  m-[auto] md:pt-[25px] pt-6 leading-[2px]">
            <p className="text-xl font-[cinzel] md:text-[18px] text-[12px] mb-0">PRICE STARTING AT</p>
            <div className="flex items-center md:justify-end justify-center">
              <span className="md:text-[25px] text-[16px]  mr-2">₹</span>
              <span className="md:text-[38px] text-[25px] tracking-[normal] capitalize font-bold">7.99 Cr</span>
              <span className="text-2xl align-top">*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="mb-10">
          
          <a href="#" onClick={() => openModal()} className="comment-button banner_btn mt-10 inline-block lg:tracking-[2px] tracking-[normal]  font-[500]">
            Book Your Trump® Experience
          </a> 
          <div className="stripe_txt invisible lg:bg-[#000] uppercase lg:px-10  py-2">
            <p className="text-[#D6D6D6] text-bold lg:tracking-[2px] lg:text-[18px] text-[16px] font-[cinzel] font-[500] lg:mb-0 mb-[10px]">
              Join the Elite – Experience the Trump® Legacy
            </p>
          </div>
        </div>
      </div>
      <img src={basePath+"/building_banner.svg"} alt="buildding"  className="md:hidden  absolute bottom-[-56px] block  opacity-[.5]  lg:mb-0 mb-[40px] w-full" width={"800"} height={"800"}/>
      <video
        ref={videoRef}
        className="mt-[50px] lg:w-full md:block hidden w-[800px] absolute lg:h-full opacity-[.7] bottom-[0] left-[0] w-full"
        autoPlay
        muted>
        <source src={videoPath+"/building_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
         
    </section>
  );
}
