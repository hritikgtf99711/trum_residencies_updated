"use client"
import React from 'react';
import { useRef } from 'react';
import Heading from '@/app/utils/Heading';
import Image from 'next/image';
import Bordered_button from '@/app/utils/Bordered_button';
import { useInteriorAnimation } from '@/app/utils/SharedTimeline';

export default function Interiors() {
  const interiorRef = useRef(null);
  useInteriorAnimation(interiorRef);  
return (
  <div className='relative'>  
          <Image src="/assets/images/left_building_blob.svg"  alt="building blob" height={800} width={800} className='lg:block none  absolute z-[-1]  circle_blob bottom_blob left-[0] bottom-[-80px] w-[38%]' /> 
    <section className="relative lg:px-0 flex flex-col  my-section  justify-center"   ref={interiorRef}  >
    <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1]  circle_blob bottom_blob left-[-50%]  w-[100%] top-[-60%] opacity-[0.3]' /> 
    <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='lg:block none  absolute z-[-1]  circle_blob bottom_blob right-[-48%]  w-[90%] top-[-60%] opacity-[0.3]' />  
        <div className=''>
            <div className='heading_container col-span-2 text-center' >
            <Heading heading={'Stunning interiors'}/> 
            <h6 className='font-[cinzel] md:tracking-[2] tracking-[1px] lg:my-[30px]  mt-[30px] lg:px-0 px-5'>Stunning interiors that redefine elegance, luxury, comfort, <span className='lg:block none'></span> and timeless beauty</h6>
            </div>
              <div className='lg:grid  lg:grid-cols-12   gap-10  lg:mt-[60px] mt-[30px] lg:w-[90%] lg:ml-auto  relative'>
                <div className='lg:col-span-4 col-span-12  lg:text-center m-auto  px-[30px]'>
                <Image src="/assets/images/circle_blob.png"  alt="building blob" height={800} width={800} className='lg:hidden block absolute  left-[0] top-[-297px] opacity-[.4] w-full  w-[38%]' /> 
                  <p className='mb-10 '>Step into the world of Trump where every detail speaks of powerful design and timeless sophistication. At Trump Residences Gurgaon, the interiors are not just crafted—they are curated for the elite, blending legendary craftsmanship with priceless artistry.</p>
                    <Bordered_button classNames={"lg:inline-block hidden"}>
                        View More
                    </Bordered_button>
                </div>
                    <div className='lg:col-span-8 col-span-12 text-center  relative'>
                      <div className='flex lg:overflow-hidden img_container overflow-x-scroll gap-5 ps-10'>
                        <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                          <Image className='w-[100%] rounded-[6px]' src="/assets/images/slider_one.jpg" alt="Elevator entry" width={"487"} height={"460"} />
                          <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Elevator entry</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                           <Image className='w-[100%] rounded-[6px]' src="/assets/images/slider_two.jpg" alt="Living Area" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>living area</figcaption>
                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                          <Image className='w-[100%] rounded-[6px]' src="/assets/images/slider_three.jpg" alt="Master Bedroom" width={"487"} height={"460"}/>
                          <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Master Bedroom</figcaption>

                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                           <Image className='w-[100%] rounded-[6px]' src="/assets/images/slider_four.jpg" alt="Hall" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Hall</figcaption>

                        </figure>
                        <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                           <Image className='w-[100%] rounded-[6px]' src="/assets/images/slider_five.jpg" alt="Lobby" width={"487"} height={"460"}/>
                           <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Lobby</figcaption>

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
    <div className='md:pb-[100px]'></div>
    </div>
  );
}
