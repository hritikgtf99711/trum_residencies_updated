"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Small_title from "@/app/utils/Small_title";
import Heading from "@/app/utils/Heading";
import Bordered_button from "@/app/utils/Bordered_button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Amenities() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);
  const totalSlides = 8;
  const isMounted = useRef(false);
  const scrollDirection = useRef(0);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(totalSlides); 
  const [infiniteAmenities, setInfiniteAmenities] = useState([]);
  const [isAtStart, setIsAtStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
let basePath=process.env.NEXT_PUBLIC_BASE_PATH
  const amenities = [
    { title: "Trump® Tower, Jeddah", src:basePath+"/meeting_room.webp", alt: "Meeting Room" },
    // { title: "Gym", src:basePath+"/gym.webp", alt: "Gym" },
    // { title: "Cigar Room", src:basePath+"/cigar_room.webp", alt: "Cigar Room" },
    { title: "Albemarle Estate at Trump® Winery, Charlottesville", src:basePath+"/billiard_room.webp", alt: "Billiards Room" },
    // { title: "Theatre", src:basePath+"/theatre.webp", alt: "Theatre" },
    // { title: "Club", src:basePath+"/club.webp", alt: "Club" },
    // { title: "Vault Library", src:basePath+"/vault_library.webp", alt: "Vault Library" },
    // { title: "Business Lounge", src:basePath+"/business_launge.webp", alt: "Business Launge" },
    { title: "Trump® National Doral, Miami", src:basePath+"/trump_doral.webp", alt: "Trump Doral" },
    { title: "Trump® Tower, Kolkata", src:basePath+"/trump_tower_kolkata.webp", alt: "Trump Tower Kolkata" },
    { title: "40 Wall Street -  The Trump® Building, New York", src:basePath+"/40_wall_street.webp", alt: "40 Wall Street" },
    { title: "Trump® International Hotel, Las Vegas", src:basePath+"/trump_international_hotel.webp", alt: "Trump® International Hotel" },
    { title: "Trump® International Hotel and Tower, New York", src:basePath+"/trump_international_hotel_tower.webp", alt: "Trump® International Hotel and Tower" },
    { title: "Trump® International Hotel and Tower , Chicago", src:basePath+"/trump_international_hotel_tower_chicago.webp", alt: "Trump International Hotel and Tower , Chicago" },
  ];

  useEffect(() => {
    const paddedAmenities = [...amenities, ...amenities, ...amenities];
    setInfiniteAmenities(paddedAmenities);
    setCurrentIndex(totalSlides);
  }, []);

  const getSlideModuloIndex = (index) => {
    return ((index % totalSlides) + totalSlides) % totalSlides;
  };

  const animateSlider = (index) => {
    if (!slidesRef.current[0] || !sliderRef.current || infiniteAmenities.length === 0) return;

    const slideWidth = slidesRef.current[0].offsetWidth;
    const slideGap = window.innerWidth<991?0:20;
    const centerOffset = window.innerWidth / 2 - slideWidth / 2;
    
    setIsAtStart(index <= 0);
    setIsAtEnd(index >= infiniteAmenities.length - 1);
    
    const safeIndex = Math.max(0, Math.min(index, infiniteAmenities.length - 1));
    const targetX = -(safeIndex * (slideWidth + slideGap)) + centerOffset;

    gsap.to(sliderRef.current, {
      x: targetX,
      duration: 1.2,
      ease: "slow"
    });

    const initialWaveSetup = !isMounted.current;

    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;
      
      const currentModIndex = getSlideModuloIndex(safeIndex);
      const slideModIndex = getSlideModuloIndex(i);
      
      const distance = Math.min(
        Math.abs(slideModIndex - currentModIndex),
        totalSlides - Math.abs(slideModIndex - currentModIndex)
      );
      
      const waveAmplitude = initialWaveSetup ? 50 : 25;
      let waveOffset = 0;

      if (window.innerWidth > 991) {
        waveOffset = Math.sin(distance * Math.PI * 0.25) * waveAmplitude;
      }

      // Remove existing position classes
      slide.classList.remove('center-slide', 'prev-slide', 'next-slide');

      // Add position classes
      if (i === safeIndex) {
        slide.classList.add('center-slide');
      } else if (i === safeIndex - 1) {
        slide.classList.add('prev-slide');
      } else if (i === safeIndex + 1) {
        slide.classList.add('next-slide');
      }

      if (getSlideModuloIndex(i) === getSlideModuloIndex(safeIndex)) {
        gsap.to(slide, {
          scale: 1,
          opacity: 1,
          y: initialWaveSetup ? 0 : waveOffset * 0.2,
          duration: 0.8,
          ease: "slow",
        });
      } else {
        gsap.to(slide, {
          scale: 0.7,
          opacity: 0.6,
          y: slideModIndex < currentModIndex ? waveOffset : -waveOffset,
          duration: 0.8,
          ease: "slow",
        });
      }
    });

    gsap.fromTo(
      ".custom-text-gradient",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
    );
  };

  useEffect(() => {
    if (!isMounted.current && typeof window !== "undefined" && infiniteAmenities.length > 0) {
      animateSlider(currentIndex);
      isMounted.current = true;
    }

    const handleScroll = (e) => {
      if (isScrolling.current) return;
      
      const currentScrollY = window.scrollY;
      scrollDirection.current = currentScrollY > lastScrollY.current ? 1 : -1;
      lastScrollY.current = currentScrollY;
      
      isScrolling.current = true;
      
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 50);
      
      if (scrollDirection.current > 0 && !isAtEnd) {
        setCurrentIndex(prev => prev + 1);
      } else if (scrollDirection.current < 0 && !isAtStart) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    // if (sectionRef.current) {
    //   const scrollTrigger = ScrollTrigger.create({
    //     trigger: sectionRef.current,
    //     start: "top 20%",
    //     end: "bottom 80%",
    //     markers: false,
    //     onEnter: () => {
    //       isMounted.current = false;
    //       animateSlider(currentIndex);
    //     }
    //   });

    //   return () => {
    //     window.removeEventListener("wheel", handleScroll);
    //     scrollTrigger.kill();
    //   };
    // }
  }, [infiniteAmenities, isAtStart, isAtEnd]);

  useEffect(() => {
    if (infiniteAmenities.length > 0) {
      animateSlider(currentIndex);
    }
  }, [currentIndex, infiniteAmenities]);

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative black_texture_one  py-section relative flex flex-col items-center justify-center"
      id="amenities"
    >
      <div className="heading_container text-center">
        <Small_title small_title="world-class" />
        <Heading heading="Amenities" />
      </div>
      <div className="w-full lg:mt-[50px] mt-[30px] relative overflow-hidden">
        <div 
          ref={sliderRef} 
          className="flex  md:gap-[20px]"
         
        >
          {infiniteAmenities.map((amenity, index) => (
            <div
              key={`slide-${index}`}
              ref={(el) => (slidesRef.current[index] = el)}
              className="relative wave-slide cursor-pointer flex-shrink-0 flex-grow-0 lg:basis-[calc(45%)]  md:basis-[calc(30%-15px)]  md:basis-[calc(50%-15px)] 4xl:basis-[calc(20%-15px)] basis-[calc(85%-15px)]"
              onClick={() => handleSlideClick(index)} 
            >
              <img
                className="object-cover w-full md:h-[480px] h-[250px] rounded-[6px]  transition-all duration-700 ease-out"
                src={amenity.src}
                alt={amenity.alt}
                width={1000}
                height={667}  
              />  
            </div>
          ))}
        </div> 
      </div>       
      <div className="flex items-center justify-center mt-8 lg:px-0 px-[10px]">
        <button 
          className={`${isAtStart ? 'cursor-not-allowed' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtStart && setCurrentIndex(prev => prev - 1)}
          disabled={isAtStart}
        >
          <img src={basePath+"/right-arrow.png"} className="rotate-180 opacity-[.4] w-[50px]" alt="left arrow" height={50} width={100}/>
        </button>
        <div className="text-center w-full text-[14px]  md:text-[16px] relative">
          <div className="custom-text-gradient">{amenities[getSlideModuloIndex(currentIndex)].title}</div>
        </div>
        <button 
          className={`${isAtEnd ? 'cursor-not-allowed opacity-[.4]' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtEnd && setCurrentIndex(prev => prev + 1)}
          disabled={isAtEnd}
        >
          <img src={basePath+"/right-arrow.png"} alt="right arrow" className="opacity-[.4] w-[50px]" height={50} width={100}/>
        </button>
      </div>
      <div className='text-center lg:hidden block mt-[40px]'>
        <Bordered_button>
          View More
        </Bordered_button>  
      </div>
    <img src={basePath+"/left_building_blob.svg"}  alt="building blob" height={800} width={800} className='  absolute md:hidden block  circle_blob bottom_blob right-[0] bottom-[0] w-[38%]' />       
    </section>
  );
} 