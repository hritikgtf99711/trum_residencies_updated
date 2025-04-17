"use client";
import React, { useRef } from "react";
import Heading from "@/app/utils/Heading";
import Image from "next/image";
import { useAboutAnimation } from "@/app/utils/SharedTimeline";

export default function AboutUs() {
  const aboutRef = useRef(null);
  useAboutAnimation(aboutRef);
  let basePath=process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <>
    <section className="relative building_blob lg:bg-[transparent] lg:py-[0] py-section  bg-[#181615]"  ref={aboutRef}>
      <div className="custom_container relative">
     <img src={basePath+"/circle_blob.webp"}  alt="background blob" height={800} width={800} className='absolute z-[-1]   circle_blob bottom_blob left-[48%]  w-[90%] translate-x-[-50%] top-[-100%] opacity-[0.4]' /> 

        <div className="grid lg:grid-cols-9 gap-x-12 gap-y-6 items-center">
          <div className="col-span-3 left_content opacity-0 translate-x-[-100px]">
          <img src={basePath+"/circle_blob.webp"}  alt="background blob" height={800} width={800} className='absolute z-[-1]  lg:hidden block  bottom-[40px] right-[-52px] opacity-[0.3]' /> 

            <div className="heading_container text-start">
              <Heading heading="ABOUT US" classNames="lg:text-start text-center" />
            </div>
            <p className="lg:my-10 mb-0 mt-5">
              For over three decades, the Trump Organization has reshaped the landscape of luxury, 
              creating timeless masterpieces at the world’s most coveted addresses. Each project is 
              a sublime fusion of visionary design and impeccable craftsmanship. With an unwavering 
              dedication to perfection, Trump properties offer a rarefied experience.
            </p>
          </div>
          <div className="col-span-3">
            <img
              src={basePath+"/center_building.webp"}
              alt="Building"
              className="w-full h-full relative building_create opacity-100"
              height={1800}
              width={2200}
            />
          </div>
          <img
              src={basePath+"/right_building.svg"}
              alt="right building"
              className="w-[250px] absolute right-[-100px] bottom-[0]  opacity-100"
              height={1800}
              width={2200}
            />
          
          <div className="col-span-3 right_content lg:pr-[30px] opacity-0 translate-x-[100px] mt-auto lg:pb-[80px]">
            <p className="lg:my-10">
              An exclusive sanctuary where elegance, innovation, and meticulous attention to detail 
              converge for those who demand nothing less than the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}
