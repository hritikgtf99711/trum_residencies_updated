"use client";
import React, { useRef } from "react";
import Heading from "@/app/utils/Heading";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutUs() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 2 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    tl.to(".left_content", { x: "0", opacity: 1 })
      .to(".right_content", { x: "0", opacity: 1 }, "<")    
      .to(".building_create", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 3 }, "<");
  }, { scope: container });

  return (
    <section className="relative building_blob lg:bg-[transparent] bg-[#181615] lg-[py-0] py-section">
      <div className="custom_container relative" ref={container}>
     <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='absolute z-[-1]   circle_blob bottom_blob left-[48%]  w-[90%] translate-x-[-50%] top-[-100%] opacity-[0.2]' /> 
<Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='absolute z-[-1]   bottom-0 opacity-[0.4]' /> 
     <Image src="/assets/images/building_right_blob.svg"  alt="background blob" height={800} width={800} className='absolute z-[-1]   lg:block hidden circle_blob bottom_blob right-[-100px] bottom-[-80px] w-[38%]  h-full' /> 
        <div className="grid lg:grid-cols-9 gap-x-12 gap-y-6 items-center">
          <div className="col-span-3 left_content opacity-0 translate-x-[-100px]">
          <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='absolute z-[-1]   bottom-[40px] right-[-52px] opacity-[0.4]' /> 

            <div className="heading_container text-start">
              <Heading heading="ABOUT US" classNames="lg:text-start text-center" />
            </div>
            <p className="lg:my-10 mb-0 mt-5 leading-relaxed">
              For over three decades, the Trump Organization has reshaped the landscape of luxury, 
              creating timeless masterpieces at the world’s most coveted addresses. Each project is 
              a sublime fusion of visionary design and impeccable craftsmanship. With an unwavering 
              dedication to perfection, Trump properties offer a rarefied experience.
            </p>
          </div>
          <div className="col-span-3">
            <Image
              src="/assets/images/center_building.png"
              alt="Building"
              className="w-full h-full relative building_create opacity-100"
              height={900}
              width={1200}
            />
          </div>

          <div className="col-span-3 right_content opacity-0 translate-x-[100px]">
            <p className="lg:my-10 leading-relaxed">
              An exclusive sanctuary where elegance, innovation, and meticulous attention to detail 
              converge for those who demand nothing less than the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
