  "use client"
  import React from 'react';
  import { useRef } from 'react';
  import Heading from '@/app/utils/Heading';
  import Small_title from '@/app/utils/Small_title';
  import Image from 'next/image';
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';
  import { ScrollTrigger } from "gsap/ScrollTrigger";


  gsap.registerPlugin(useGSAP); 
  gsap.registerPlugin(ScrollTrigger);

  export default function About() {
  const container = useRef();

  useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "ease-in", duration: 2 },scrollTrigger: {trigger: container.current, start: "top center", end: "bottom top",duration:2} })
  tl.to(".after", { x: "-50%" }).to(".before", { x: "50%" }, "<"); 
  },{ scope: container }); 

    return (
      <section className="relative frame_sec   py-section">
          <div className='custom_container relative'  ref={container} >
              <div className='heading_container text-center'>
                <Small_title small_title="About Project"/>
                <Heading heading={'The World of Trump'}/>
              </div>
                <div className='video_sec lg:w-[70%] w-full m-auto mt-10'>
                <Image src="/assets/images/bg-stick-left.png" alt="background blob" height={800} width={800} className='afterBeforeImage before' />
                  <Image src="/assets/images/bg-stick-right.png" alt="background blob" height={800} width={800} className='afterBeforeImage after ' />
                    <video className="mt-[50px] " autoPlay loop controls muted>
                    <source src="/assets/video/about_us_banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                    <div className='bg-[#E8C183] absolute h-[500px] z-[-1] w-full  rounded-[50%] opacity-[.2] blur-[50px] top-[-5]'></div>
                  {/* <Image src="/assets/images/circle_blob.png" alt="background blob" height={600} width={600} className='absolutez-[-1] w-full  lg:block  w-full circle_blob bottom_blob  lg:top-[-155px] top-[-220px] lg:opacity-[1] opacity-[.2]' /> */}
                  {/* <Image src="/assets/images/circle_blob.png" alt="background blob" height={600} width={600} className='absolute z-[-1] w-[300px]  lg:block  w-full circle_blob bottom_blob  lg:top-[-155px] top-[60px] lg:opacity-[1] opacity-[.2]' /> */}

                </div>
          </div>
      </section>
    );
  }
