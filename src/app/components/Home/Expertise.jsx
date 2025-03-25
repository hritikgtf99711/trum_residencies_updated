// import Link from "next/link";
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MdArrowOutward } from "react-icons/md";

import "../../globals.css";

const Expertise = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            lineRef.current,
            { width: "0%" }, // Start at 20% width
            {
              width: "100%", // Expand to 100%
              duration: 1.5,
              ease: "power2.in",
            }
          );
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.4 } // Trigger when 20% of the element is visible
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section className="px-[50px] py-[140px]">
      <div className="flex justify-between flex-wrap">
        <h2 className="uppercase leading-[70px] basis-[50%]">
          <span className="bartino-outline tracking-[2px] text-[72px] block">
            Boutique concepts
          </span>
          <span className="font-[Oswald]  block font-medium text-[65px] ">
            innovation market
          </span>
          <div className="flex justify-end z-[-9]">
            <div className="h-[20px] w-[60%] z-[-9] mt-[-1.1rem] bg-[#d93f92] text-end"></div>
          </div>
        </h2>
        <div className="basis-[35%] border-b-[1px] border-b-solid border-b-[#666666] pb-[50px]">
          <p className="text-[14px] font-[400]">
            GTF Technologies is conceptualized from Gurukul The Foundation. We
            are a 16-year-old branding and digital media planning agency
            headquartered in Noida, Mumbai, Pune, and an upcoming office in
            Bangalore. We create innovative brands, attract customers, and offer
            comprehensive solutions.
          </p>
          <div className="flex mt-[20px] items-center">
            <p className=" mr-[10px] uppercase font-[Oswald] ">meet now</p>
            <MdArrowOutward className="bg-[#ddd]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap relative">
        <div className="basis-[60%] relative">
          {/* 1 */}
          <div ref={lineRef} className="relative w-0 top-[46%] left-[29%]">
            {/* top */}
            <div className="origin-left rotate-[-15.5deg] h-[1px] w-[75%] border-dashed border-b-[1px]  absolute bottom-0 "></div>
            <div className="origin-left rotate-[-12deg] h-[1px] w-[73%] border-dashed border-b-[1px]  absolute bottom-[0px]"></div>

            {/* middle */}
            <div className="h-[1px] w-[70%] border-dashed border-b-[1px] origin-left rotate-[1.4deg] absolute  "></div>
            <div className="h-[1px] w-[70%] border-dashed border-b-[1px]  absolute origin-left rotate-[-2deg] "></div>

            {/* third */}
            <div className="h-[1px] w-[73%] origin-left rotate-[12deg] border-dashed border-b-[1px]  absolute  "></div>
            <div className="h-[1px] w-[75%] origin-left rotate-[16deg] border-dashed border-b-[1px]  absolute  "></div>
          </div>
          <div className="h-[250px] w-[250px] left-[8%] relative top-[21%] z-[-1] bg-[#FDE93D] rounded-full"></div>
          <p className="absolute bottom-[50px] left-[4.5%]">
            <span className="font-[Oswald] text-[75px] font-medium">16 +</span>
            <br />
            <span className="bartino-outline leading-[76px] text-[70px] tracking-[2px] uppercase">
              Years Of <br /> Expertise
            </span>
          </p>
        </div>
        <div className="basis-[35%] pt-[38px]">
          <p className="uppercase flex flex-col mb-[65px]">
            <span className="font-[Oswald] text-[40px] font-[600]">1500 +</span>
            <span className="text-[14px] font-[400] tracking-wide">
              PROJECTS DONE
            </span>
          </p>
          <p className="uppercase flex flex-col mb-[65px]">
            <span className="font-[Oswald] text-[40px] font-[600]">50k +</span>
            <span className="text-[14px] font-[400] tracking-wide">
              Queries generated from Google per month
            </span>
          </p>
          <p className="uppercase flex flex-col mb-[65px]">
            <span className="font-[Oswald] text-[40px] font-[600]">
              1000k +
            </span>
            <span className="text-[14px] font-[400] tracking-wide">
              Queries generated from Facebook & Instagram per month
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Expertise;
