"use client";
import React, { useRef, useState, useEffect } from 'react';
import Heading from '@/app/utils/Heading';
import Image from 'next/image';
import Bordered_button from '@/app/utils/Bordered_button';
import { useInteriorAnimation } from '@/app/utils/SharedTimeline';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Add navigation styles
// Import required Swiper modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Interiors() {
  const interiorRef = useRef(null);
  const interiorContainerRef = useRef(null);
  const swiperRef = useRef(null); // Ref for Swiper instance
  const [isMobile, setIsMobile] = useState(false);
  useInteriorAnimation(interiorRef);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollImages = (direction) => {
    if (interiorContainerRef.current) {
      const scrollAmount = interiorContainerRef.current.offsetWidth * 0.5; // Adjust scroll distance
      interiorContainerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <div className='relative changemargin'>  
      <img src={basePath + "/left_building_blob.svg"} alt="building blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob left-[0] bottom-[-80px] w-[38%]' /> 
      <section className="relative lg:h-[100vh] lg:px-0 flex flex-col my-section justify-center md:place-items-center" ref={interiorRef}>
        <img src={basePath + "/circle_blob.png"} alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob left-[-50%] w-[100%] top-[-60%] opacity-[0.3]' /> 
        <img src={basePath + "/circle_blob.png"} alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob right-[-48%] w-[90%] top-[-60%] opacity-[0.3]' />  
        <div className=''>
          <div className='heading_container col-span-2 text-center'>
            <Heading heading={'Stunning interiors'}/> 
            <h6 className='font-[cinzel] md:tracking-[2] tracking-[1px] lg:my-[30px] mt-[30px] lg:px-0 px-5'>
              Stunning interiors that redefine elegance, luxury, comfort, <span className='lg:block none'></span> and timeless beauty
            </h6>
          </div>
          <div className='lg:grid lg:grid-cols-12 gap-10 lg:mt-[60px] mt-[30px] lg:w-[90%] lg:ml-auto relative'>
            <div className='lg:col-span-4 col-span-12 lg:text-center m-auto px-[30px]'>
              <img src={basePath + "/circle_blob.png"} alt="building blob" height={800} width={800} className='lg:hidden block absolute left-[0] top-[-297px] opacity-[.4] w-full w-[38%]' /> 
              <p className='mb-10'>
                Step into the world of Trump where every detail speaks of powerful design and timeless sophistication. At Trump Residences Gurgaon, the interiors are not just crafted—they are curated for the elite, blending legendary craftsmanship with priceless artistry.
              </p>
              <Bordered_button classNames={"lg:inline-block hidden"}>
                View More
              </Bordered_button>
            </div>
            <div className='lg:col-span-8 col-span-12 text-center relative'>
              {isMobile ? (
                <div className="relative">
                  <Swiper
                    slidesPerView={1.4}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper pl-[31px!important]"
                    breakpoints={{
                      0: {
                        slidesPerView: 1.5,
                      },
                      600: {
                        slidesPerView: 3,
                      },
                      991: {
                        slidesPerView: 3,
                      },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                  >
                    <SwiperSlide>
                      <figure>
                        <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_one.webp"} alt="Elevator entry" width={487} height={460} />
                        <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Elevator entry</figcaption>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure>
                        <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_two.webp"} alt="Living Area" width={487} height={460}/>
                        <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Living area</figcaption>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure>
                        <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_three.webp"} alt="Master Bedroom" width={487} height={460}/>
                        <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Master Bedroom</figcaption>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure>
                        <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_four.webp"} alt="Hall" width={487} height={460}/>
                        <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Hall</figcaption>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure>
                        <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_five.webp"} alt="Lobby" width={487} height={460}/>
                        <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Lobby</figcaption>
                      </figure>
                    </SwiperSlide>
                  </Swiper>
                  {/* Navigation Arrows */}
                  <div className="swiper-button-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </div>
                  <div className="swiper-button-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className='flex lg:overflow-hidden img_container overflow-x-scroll gap-5 ps-10' ref={interiorContainerRef}>
                    <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                      <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_one.webp"} alt="Elevator entry" width={487} height={460} />
                      <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Elevator entry</figcaption>
                    </figure>
                    <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                      <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_two.webp"} alt="Living Area" width={487} height={460}/>
                      <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Living area</figcaption>
                    </figure>
                    <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                      <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_three.webp"} alt="Master Bedroom" width={487} height={460}/>
                      <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Master Bedroom</figcaption>
                    </figure>
                    <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                      <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_four.webp"} alt="Hall" width={487} height={460}/>
                      <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Hall</figcaption>
                    </figure>
                    <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%] lg:basis-[40%]'>
                      <img className='w-[100%] rounded-[6px]' src={basePath + "/slider_five.webp"} alt="Lobby" width={487} height={460}/>
                      <figcaption className='mt-5 tracking-[1px] custom-text-gradient'>Lobby</figcaption>
                    </figure>
                  </div>
                  <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer" onClick={() => scrollImages('prev')}>
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer" onClick={() => scrollImages('next')}>
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className='text-center lg:hidden block mt-[40px]'>
              <Bordered_button>
                View More
              </Bordered_button>  
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}