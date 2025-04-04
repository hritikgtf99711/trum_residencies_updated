  "use client"
  import React from 'react';
  import Heading from '@/app/utils/Heading';
  import Image from 'next/image';
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useRef } from 'react';



  gsap.registerPlugin(useGSAP); 
  gsap.registerPlugin(ScrollTrigger);

  export default function AboutUs() {
    const container = useRef();

    useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "ease-in", duration: 2 },scrollTrigger: {trigger: container.current, start: "top center", end: "bottom top",duration:2} })
    tl.to(".left_content", { x: "0" }).to(".right_content", { x: "0" }, "<").to(".building_create", {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",duration:3}, "<") 
    },{ scope: container }); 
    

    return (
      <section className="relative  pb-section relative">
            <div className='custom_container relative'   ref={container}>
                 <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='absolute z-[1]  circle_blob bottom_blob left-[48%]  w-[90%] translate-x-[-50%] top-[-100%] opacity-[0.4]' /> 
            <div className='grid grid-cols-9 gap-x-[50px] gap-y-4'>
            <div className='col-span-3 left_content translate-x-[-200%]'>
                <div className='heading_container   text-start'>
                    <Heading heading={'ABOUT US'}/>
                </div>
                 <p className='my-[80px] '>For over three decades, the Trump Organization has reshaped the landscape of luxury, creating timeless masterpieces at the world’s most coveted addresses. Each project is a sublime fusion of visionary design and impeccable craftsmanship. With an unwavering dedication to perfection, Trump properties offer a rarefied experience.</p>
            </div>
            <div className='col-span-3'>
                 <Image src={'/assets/images/center_building.png'} alt=""  className='w-full z-[-1] relative   building_create' height={'900'} width={'1200'}/> 
            </div>
            <div className='col-span-3 mt-auto mb-[30px] right_content translate-x-[200%]'>
                 <p className='my-[50px]'>An exclusive sanctuary where elegance, innovation and meticulous attention to detail converge for those who demand nothing less than the extraordinary.</p>
            </div>
         </div>
      </div>          
  </section>
      
    );
  }
