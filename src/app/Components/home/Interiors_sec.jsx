"use client"
import React from 'react';
import { useRef } from 'react';
import Heading from '@/app/utils/Heading';
import Image from 'next/image';
import Bordered_button from '@/app/utils/Bordered_button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(useGSAP); 
  gsap.registerPlugin(ScrollTrigger);
export default function Interiors() {
  const container = useRef();
  useGSAP(() => {
    let animation;
    const figures = document.querySelectorAll("figure");
    const slides = figures.length - 1;
    if (!slides) return;
  
    const setupAnimation = () => {
      if (animation) {
        animation.kill();
      }
  
      const isMobile = window.matchMedia("(max-width: 991px)").matches;
  
      if (!isMobile && container.current) {
        const totalWidth = container.current.offsetWidth;
  
        animation = gsap.to(figures, {
          xPercent: -50 * slides,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / slides,
              duration: { min: 0.1, max: 0.3 },
              ease: "easeIn",
            },        
           end: () => `+=${(totalWidth * slides) - 400}`,
          },
        });
      }
    };
  
    setupAnimation();
  
    window.addEventListener("resize", setupAnimation);
  
    return () => {
      window.removeEventListener("resize", setupAnimation);
      if (animation) {
        animation.kill();
      }
    };
  }, { scope: container });

  return (
    <section className="py-[100px] relative lg:px-0 h-[100vh] flex flex-col justify-center"   ref={container}  >
        <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1]  circle_blob bottom_blob left-[-50%]  w-[100%] top-[-60%] opacity-[0.3]' /> 
        <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='lg:block none  absolute z-[-1]  circle_blob bottom_blob right-[-48%]  w-[90%] top-[-60%] opacity-[0.3]' /> 
        <Image src="/assets/images/left_building_blob.svg"  alt="building blob" height={800} width={800} className='lg:block none  absolute z-[-1]  circle_blob bottom_blob left-[0] bottom-[-80px] w-[38%]' /> 

        <div className=''>
            <div className='heading_container col-span-2 text-center' >
            <Heading heading={'Stunning interiors'}/> 
            <h6 className='font-[cinzel] tracking-[2] lg:my-[30px]  mt-[30px] lg:px-0 px-5'>Stunning interiors that redefine elegance, luxury, comfort, <span className='lg:block none'></span> and timeless beauty</h6>
            </div>
              <div className='lg:grid  lg:grid-cols-12   gap-10  lg:mt-[60px] mt-[30px] lg:w-[90%] lg:ml-auto  relative'>
                <div className='lg:col-span-4 col-span-12  lg:text-center m-auto  px-[30px]'>
                <Image src="/assets/images/circle_blob.png"  alt="building blob" height={800} width={800} className='lg:hidden block absolute  left-[0] top-[-297px] opacity-[.4] w-full  w-[38%]' /> 
                  <p className='mb-10 font-[400]'>Step into the world of Trump where every detail speaks of powerful design and timeless sophistication. At Trump Residences Gurgaon, the interiors are not just crafted—they are curated for the elite, blending legendary craftsmanship with priceless artistry.</p>
                    <Bordered_button classNames={"lg:inline-block hidden"}>
                        View More
                    </Bordered_button>
                </div>
                    <div className='lg:col-span-8 col-span-12 text-center relative lg:overflow-hidden overflow-x-scroll'>
                      <div className='flex gap-5 ps-10'>
                        <figure className='grow-0 shrink-0 basis-[90%] md:basis-[50%] lg:basis-[40%]'>
                          <Image className='w-[100%] rounded-lg' src="/assets/images/slider_one.jpg" alt="Slider One" width={"487"} height={"460"}/>
                          <figcaption className='mt-5 text-[24px] tracking-[1px] custom-text-gradient'>elevator entry</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] md:basis-[50%] lg:basis-[40%]'>
                           <Image className='w-[100%] rounded-lg' src="/assets/images/slider_two.jpg" alt="Slider One" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 text-[24px] tracking-[1px] custom-text-gradient'>living area</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] md:basis-[50%] lg:basis-[40%]'>
                          <Image className='w-[100%] rounded-lg' src="/assets/images/slider_one.jpg" alt="Slider One" width={"487"} height={"460"}/>
                          <figcaption className='mt-5 text-[24px] tracking-[1px] custom-text-gradient'>elevator entry</figcaption>

                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] md:basis-[50%] lg:basis-[40%] ms-5'>
                           <Image className='w-[100%] rounded-lg' src="/assets/images/slider_two.jpg" alt="Slider One" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 text-[24px] tracking-[1px] custom-text-gradient'>elevator entry</figcaption>

                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] md:basis-[50%] lg:basis-[40%] ms-5'>
                           <Image className='w-[100%] rounded-lg' src="/assets/images/slider_two.jpg" alt="Slider One" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 text-[24px] tracking-[1px] custom-text-gradient'>elevator entry</figcaption>

                        </figure>
                        </div>
                </div>
                <div className='text-center lg:hidden block mt-[40px]'  >
                    <Bordered_button >
                        View More
                    </Bordered_button>  
                </div>
              </div>
        </div>
    </section>
  );
}
