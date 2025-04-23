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
     <img src={basePath+"/circle_blob.webp"}  alt="background blob" height={800} width={800} className='absolute z-[-1]   circle_blob bottom_blob lg:left-[48%]  lg:w-[90%] translate-x-[-50%] lg:top-[-100%] oplg:acity-[0.4]' /> 

        <div className="grid lg:grid-cols-9 gap-x-12 gap-y-6 items-center">
          <div className="col-span-3 left_content opacity-0 translate-x-[-100px]">
          <img src={basePath+"/circle_blob.webp"}  alt="background blob" height={800} width={800} className='absolute z-[-1]  lg:hidden block  bottom-[40px] right-[-52px] opacity-[0.3]' /> 

            <div className="heading_container text-start">
              <Heading heading="ABOUT US" classNames="lg:text-start text-center" />
            </div>
            <p className="lg:my-10 mb-0 mt-5">
            The Trump Organization and the Trump brand represent the most respected developments throughout the world, and at the most prestigious of addresses. The Trump signature is synonymous with the gold standard, with superior quality, detail and perfection being delivered in every project. From residential to resort, from hotel to golf, from commercial office to retail, the experience of owning a Trump property and living the Trump lifestyle is unparalleled.
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
            The touch of the Trump brand can be seen in every aspect of the properties that bear the Trump name, from the design driven, cutting edge facades created in collaboration with the world’s finest architects, to the flawless interiors designed specifically for each market, to the acclaimed world-class service. Virtually no detail is overlooked. With each of its properties, Trump consistently continues to raise the bar of super luxury living.
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}
