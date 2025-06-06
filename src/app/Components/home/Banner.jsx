"use client";
import React, { useRef, useState,useEffect } from "react";
import { useBannerAnimation } from "@/app/utils/SharedTimeline";
import { useModal } from "@/app/hooks/modaContext";
// import { MapPin } from 'lucide-react';


export default function Banner() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  // const { showText } = useBannerAnimation(videoRef, textRef);

// const { isOpen, openModal, closeModal } = useModal();

  let basePath=process.env.NEXT_PUBLIC_BASE_PATH
  let videoPath=process.env.NEXT_PUBLIC_BASE_PATH_VIDEO

  return (
    <section className="relative " id="home">
          <picture className="w-[100%] h-[100%] block">
                <source media="(min-width: 768px)" srcSet={basePath+`/banner.jpg`} />
                <source media="(max-width: 767px)" srcSet={basePath+`/banner-mobile.jpg`} />  
                <img
                  src= {basePath+`/assets/images/banner.jpg`}
                  alt="banner assets"
                  className="w-[100%] h-[100%] object-cover"
                />
          </picture>
              {/* <img src={basePath+"/blob_cicle_banner.svg"} alt="building banner" className="absolute w-full  top-[-122px] left-[0] md:hidden"  height={"500"} width={"500"} /> */}
                {/* <div
                  ref={textRef}
                  className={`z-[2] relative h-[calc(100%)] custom_container text-center flex flex-col  lg:pb-0 md:pt-0 pt-[20px]   justify-center lg:pb-10 place-items-center  ${
                    showText ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="bg-custom-gradient inline-block  md:pt-[0px]  tracking-[10px] text-transparent bg-clip-text lg:text-[120px] text-[60px] lg:m-auto lg:mb-auto lg:pb-0 pb-10 lg:font-[normal] font-[500]">
                    <span className="font-[cinzel] text-[#e8c183] relative">TRUMP<span className="text-[#e8c183] text-[70px] absolute md:top-[0] top-[-15px]">®</span></span>
                    <span className="block text-[24px] uppercase font-[cinzel] m-auto text-center lg:font-[normal] font-[500]">
                    Back  <span className="inline-block">In</span> Gurgaon
                    </span>
                  </h1>

                <div className="md:w-[90%] bottom-[3] left-1/2  z-[99] banner-new-design">
                
                <div className="banner-details flex flex-wrap rounded-[4px] justify-between p-2 border-[1px] border-[#e8c1833d] backdrop-blur-[2px] bg-black/30 z-[99]">
                  {[
                    {label:"Location",value:' SECTOR 69,GURGAON ',            
                    flex: "md:flex-[1]",
                    },
                    {
                      label: "CONFIGURATION",
                      value: "3, 4 & DOUBLE-HEIGHT 4 BED  RESIDENCES",
                      flex: "md:flex-[1.8] md:bg-transparent bg-[#e8c183]   md:text-white text-[#000]",

                    },
                    { label: "PRICE STARTING AT",icon:'₹', value: " 7.99 Cr*", flex: "md:flex-1" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${item.flex} relative basis-[100%]  transition-all duration-300 ease-in flex flex-col items-center justify-center gap-[15px] px-[5px] py-[20px] md:text-white   md:hover:bg-[#e8c183] group`}
                    >
                      <h5 className="text-[14px] tracking-[2px] tracking-[1px] font-medium   relative  md:group-hover:text-black">
                        {item.label}
                      </h5>
                      <span className={`w-[170px] mx-[auto] h-[1px] bg-[#e8c183]  md:group-hover:!bg-[#181818] ${idx==1&& 'md:!bg-[#e8c183] !bg-[#000]'}` }></span>

                      <h4 className="text-[18px]  md:text-[18px]  tracking-[normal] md:font-[medium] font-bold text-center tracking-[2px] font-[500] md:tracking-[1px]  md:group-hover:text-black group-hover:font-bold">
                      <span className="text-[16px]">{item.icon&&item.icon}</span>  {item.value}
                      </h4>
                      {idx < 2 && (
                        <div className="absolute top-0 right-0  md:block hidden h-full w-px bg-[#e8c1833d]"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

                  <div className="mb-10">
                    
                    <a href="#" onClick={() => openModal()} className="comment-button banner_btn mt-10 inline-block lg:tracking-[2px] tracking-[normal]  font-[500]">
                      Book Your Trump® Experience
                    </a> 
                
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
              </video> */}            
    </section>
  );
}



