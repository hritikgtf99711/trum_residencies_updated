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
  const slides = document.querySelectorAll("figure").length-1; 
  const slideWidth = 388; 

  const tl = gsap.timeline({
    defaults: { ease: "power1.out", duration: 2 },
    scrollTrigger: {
      trigger: container.current,
      pin: true, 
      pinSpacing: false,
      start: "top top",
      end: `${slides * document.querySelector(".transform_slider").offsetWidth}`, 
      scrub: 1, 
      markers: true
    }
  });

  // Move slider dynamically based on number of slides
  tl.to(".transform_slider", { x: `-${slides * slideWidth}%` });

}, { scope: container });


  return (
    <section className="relative   pb-section">
        <div className='custom_container'   ref={container}>
            <div className='heading_container col-span-2 text-center' >
            <Heading heading={'Stunning interiors'}/> 
            <p className='font-[cinzel] tracking-[2] my-[30px]'>Stunning interiors that redefine elegance, luxury, comfort, <span className='lg:block none'></span> and timeless beauty</p>
            </div>
              <div className='grid grid-cols-12 gap-10  mt-10'>
                <div className='col-span-4 text-center m-auto'>
                  <p>Step into the world of Trump where every detail speaks of powerful design and timeless sophistication. At Trump Residences Gurgaon, the interiors are not just crafted—they are curated for the elite, blending legendary craftsmanship with priceless artistry.</p>
                    <Bordered_button>
                        View More
                    </Bordered_button>
                </div>
            
                    <div className='col-span-8 text-center relative overflow-hidden'>
                      <div className='flex gap-10 transform_slider'>
                        <figure className='grow-0 shrink-0 basis-[40%]'>
                          <Image className='rounded-lg' src="/assets/images/slider_one.jpg" alt="Slider One" width={"487"} height={"460"}/>
                          <figcaption className='mt-5 custom-text-gradient'>elevator entry</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[40%]'>
                           <Image className='rounded-lg' src="/assets/images/slider_two.jpg" alt="Slider One" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 custom-text-gradient'>living area</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[40%]'>
                          <Image className='rounded-lg' src="/assets/images/slider_one.jpg" alt="Slider One" width={"487"} height={"460"}/>
                          <figcaption className='mt-5 custom-text-gradient'>elevator entry</figcaption>

                        </figure>
                        <figure className='grow-0 shrink-0 basis-[40%]'>
                           <Image className='rounded-lg' src="/assets/images/slider_two.jpg" alt="Slider One" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 custom-text-gradient'>elevator entry</figcaption>

                        </figure>
                        </div>
                </div>
              </div>
        </div>
    </section>
  );
}
