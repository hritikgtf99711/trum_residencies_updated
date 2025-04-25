"use client";
import React, { useRef, useState, useEffect } from 'react';
import Heading from '@/app/utils/Heading';
import Bordered_button from '@/app/utils/Bordered_button';
import { useInteriorAnimation } from '@/app/utils/SharedTimeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap'; // Import GSAP for smooth animations

export default function Interiors() {
  const interiorRef = useRef(null);
  const swiperRef = useRef(null); 
  // useInteriorAnimation(interiorRef);

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsMobile(window.innerWidth < 991);
  //   };

  //   checkScreenSize();
  //   window.addEventListener('resize', checkScreenSize);

  //   return () => window.removeEventListener('resize', checkScreenSize);
  // }, []);

  // const scrollImages = (direction) => {
  //   const container = interiorContainerRef.current;
  //   const scrollAmount = container.offsetWidth * 0.5; // Adjust this value to control scroll speed

  //   if (!container) return;

  //   const maxScroll = container.scrollWidth - container.clientWidth;

  //   setDisableAnimation(true); 

  //   if (direction === 'next') {
  //     // Scroll to the right
  //     gsap.to(container, {
  //       scrollLeft: container.scrollLeft + scrollAmount,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //       onComplete: () => {
  //         // Check if we've reached the end, and reset to the start
  //         if (container.scrollLeft >= maxScroll - 5) {
  //           gsap.to(container, {
  //             scrollLeft: 0,
  //             duration: 0.5,
  //             ease: 'power2.inOut',
  //             onComplete: () => {
  //               setDisableAnimation(false); // Re-enable GSAP animation after scroll
  //             },
  //           });
  //         } else {
  //           setDisableAnimation(false); // Re-enable GSAP animation after scroll
  //         }
  //       },
  //     });
  //   } else {
  //     // Scroll to the left
  //     gsap.to(container, {
  //       scrollLeft: container.scrollLeft - scrollAmount,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //       onComplete: () => {
  //         // Check if we're at the start, and reset to the end
  //         if (container.scrollLeft <= 0) {
  //           gsap.to(container, {
  //             scrollLeft: maxScroll,
  //             duration: 0.5,
  //             ease: 'power2.inOut',
  //             onComplete: () => {
  //               setDisableAnimation(false); // Re-enable GSAP animation after scroll
  //             },
  //           });
  //         } else {
  //           setDisableAnimation(false); // Re-enable GSAP animation after scroll
  //         }
  //       },
  //     });
  //   }
  // };

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  const sliderData = [
    { image: 'slider_one', caption: 'Elevator entry' },
    { image: 'slider_two', caption: 'Living Area' },
    { image: 'slider_three', caption: 'Master Bedroom' },
    { image: 'slider_four', caption: 'Hall' },
    { image: 'slider_five', caption: 'Lobby' }
  ];


  return (
    <div className='relative py-section'>
      <img src={basePath + "/left_building_blob.svg"} alt="building blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob left-[0] bottom-[-80px] w-[38%]' />
      <section className="relative  lg:px-0 flex flex-col  justify-center md:place-items-center" ref={interiorRef}>
        <img src={basePath + "/circle_blob.png"} alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob left-[-50%] w-[100%] top-[-60%] opacity-[0.3]' />
        <img src={basePath + "/circle_blob.png"} alt="background blob" height={800} width={800} className='lg:block none absolute z-[-1] circle_blob bottom_blob right-[-48%] w-[90%] top-[-60%] opacity-[0.3]' />
        <div className=''>
          <div className='heading_container col-span-2 text-center'>
            <Heading heading={'Stunning interiors'} />
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
              <Bordered_button classNames={"lg:inline-block hidden"}>View More</Bordered_button>
            </div>
            <div className='lg:col-span-8 col-span-12 text-center relative overflow-hidden'>
              <div className="relative">
                <Swiper
                  loop={true}
                  centeredSlides={false}
                  slidesPerView={1.4}
                  spaceBetween={20}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  className="mySwiper pl-[31px!important]"
                  breakpoints={{
                    0: { slidesPerView: 1.3 },
                    600: { slidesPerView: 2.2 },
                    991: { slidesPerView: 2.2 },
                    1366: { slidesPerView: 2.5}, 
                    1800: { slidesPerView: 3.5}, 
                    1900: { slidesPerView: 3.6}, 


                  }}
                >
                  {sliderData.map(({ image, caption }, i) => (
                    <SwiperSlide key={i}>
                      <figure className="w-full mx-0 ml-0 mx-auto rounded-[6px] mb-[50px] overflow-hidden">
                        <div className="w-full">
                          <img
                            className="w-full h-[350px] rounded-[6px] object-cover"
                            src={`${basePath}/${image}.webp`}
                            alt={`Slide ${i}`}
                            width={600}
                            height={460}
                          />
                        </div>
                        <figcaption className="mt-5 tracking-[1px] custom-text-gradient text-center capitalize">
                          {caption}
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>


                {/* Custom Arrows */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
              {/* {isMobile ? (

              ): (
                  <div className = "relative">
                  <div
                    onClick = { () => scrollImages("prev") }
                    className = "absolute z-10 top-1/2 left-0 -translate-y-1/2 cursor-pointer p-2 bg-transparent rounded-full shadow-md"
                  >
                    <svg className = "w-6 h-6 text-gray-600" fill = "none" stroke = "currentColor" strokeWidth = "2" viewBox = "0 0 24 24">
                      <path strokeLinecap = "round" strokeLinejoin = "round" d = "M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div
            onClick={() => scrollImages("next")}
            className="absolute z-10 top-1/2 right-0 -translate-y-1/2 cursor-pointer p-2 bg-transparent rounded-full shadow-md"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className='flex lg:overflow-hidden img_container overflow-x-scroll gap-5 ps-10' ref={interiorContainerRef}>
            <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%]'>
              <img src={basePath + "/slider_one.webp"} alt="Elevator entry" width={487} height={460} />
            </figure>
            <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%]'>
              <img src={basePath + "/slider_two.webp"} alt="Living Area" width={487} height={460} />
            </figure>
            <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%]'>
              <img src={basePath + "/slider_three.webp"} alt="Master Bedroom" width={487} height={460} />
            </figure>
            <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%]'>
              <img src={basePath + "/slider_four.webp"} alt="Hall" width={487} height={460} />
            </figure>
            <figure className='grow-0 shrink-0 basis-[90%] sm:basis-[50%] md:basis-[30%]'>
              <img src={basePath + "/slider_five.webp"} alt="Lobby" width={487} height={460} />
            </figure>
          </div>
        </div>
              )} */}
            </div>
          </div >
        </div >
      </section >
    </div >
  );
}
