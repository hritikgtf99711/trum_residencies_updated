"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const totalSlides = 10;
  const isMounted = useRef(false);
  const scrollDirection = useRef(0);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(totalSlides); 
  const [infiniteAmenities, setInfiniteAmenities] = useState([]);
  const [isAtStart, setIsAtStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const amenities = [
    { title: "Club", src: "/assets/images/amenities_1.jpg", alt: "Amenity 1" },
    { title: "Vault Library", src: "/assets/images/amenities_2.jpg", alt: "Amenity 2" },
    { title: "Gym", src: "/assets/images/amenities_3.jpg", alt: "Amenity 3" },
    { title: "Pool", src: "/assets/images/amenities_4.jpg", alt: "Amenity 4" },
    { title: "Spa", src: "/assets/images/amenities_5.jpg", alt: "Amenity 5" },
    { title: "Cinema", src: "/assets/images/amenities_6.jpg", alt: "Amenity 6" },
    { title: "Lounge", src: "/assets/images/amenities_7.jpg", alt: "Amenity 7" },
    { title: "Garden", src: "/assets/images/amenities_8.jpg", alt: "Amenity 8" },
    { title: "Lounge", src: "/assets/images/amenities_9.jpg", alt: "Amenity 9" },
    { title: "Cinema", src: "/assets/images/amenities_10.jpg", alt: "Amenity 10" },
  ];

  useEffect(() => {
    const paddedAmenities = [...amenities, ...amenities, ...amenities];
    setInfiniteAmenities(paddedAmenities);
    
    setCurrentIndex(totalSlides);
  }, []);

  const getSlideModuloIndex = (index) => {
    return index % totalSlides;
  };

  const animateSlider = (index) => {
    if (!slidesRef.current[0] || !sliderRef.current || infiniteAmenities.length === 0) return;

    const slideWidth = window.innerWidth < 767?(slidesRef.current[0].offsetWidth) :(slidesRef.current[0].offsetWidth + 100);
    const centerOffset = window.innerWidth / 2 - slideWidth / 2;
    
    setIsAtStart(index <= 0);
    setIsAtEnd(index >= infiniteAmenities.length - 1);
    
    const safeIndex = Math.max(0, Math.min(index, infiniteAmenities.length - 1));
    
    const targetX = -slidesRef.current[safeIndex].offsetLeft + centerOffset;

    gsap.to(sliderRef.current, {
      x: targetX,
      duration: 1.2,
      ease: "slow"
    });

    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;
      
      const currentModIndex = getSlideModuloIndex(safeIndex);
      const slideModIndex = getSlideModuloIndex(i);
      
      const distance = Math.min(
        Math.abs(slideModIndex - currentModIndex),
        totalSlides - Math.abs(slideModIndex - currentModIndex)
      );
      
      const waveAmplitude = 50;
      let waveOffset = 0;

      // Only apply waveOffset if screen is larger than 991px
      if (window.innerWidth > 991) {
        waveOffset = Math.sin(distance * Math.PI * 0.5) * waveAmplitude;
      }
      if (getSlideModuloIndex(i) === getSlideModuloIndex(safeIndex)) {
        gsap.to(slide, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "slow",
        });
      } else {
        gsap.to(slide, {
          scale: 0.6,
          opacity: 0.7,
          y: slideModIndex < currentModIndex ? -waveOffset - 20 : waveOffset,
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

    if (sectionRef.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom 80%",
        // onToggle: (self) => {
        //   if (self.isActive) {
        //     window.addEventListener("wheel", handleScroll, { passive: true });
        //   } else {
        //     window.removeEventListener("wheel", handleScroll);
        //   }
        // },
        markers: false 
      });

      return () => {
        window.removeEventListener("wheel", handleScroll);
        scrollTrigger.kill();
      };
    }
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
      className="relative black_texture_one py-section flex flex-col items-center justify-center"
    >
      <div className="heading_container text-center">
        <Small_title small_title="world class" />
        <Heading heading="Amenities" />
      </div>
      <div className="w-full lg:mt-[50px] mt-[30px] relative overflow-hidden">
        <div ref={sliderRef} className="flex">
          {infiniteAmenities.map((amenity, index) => (
            <div
              key={`slide-${index}`}
              ref={(el) => (slidesRef.current[index] = el)}
              className="relative wave-slide cursor-pointer flex-shrink-0 flex-grow-0 lg:basis-[calc(25%)] basis-[calc(60%)]"
              onClick={() => handleSlideClick(index)}
            >
              <Image
                className="object-cover lg:h-[520px] rounded-[5px] shadow-xl transition-all duration-700 ease-out"
                src={amenity.src}
                alt={amenity.alt}
                width={752}
                height={860}
                priority={index < 10}
              />  
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-center w-full lg:text-2xl text-md font-bold relative lg:mt-0 lg:hidden  mt-4   block">
          <div className="custom-text-gradient">{amenities[getSlideModuloIndex(currentIndex)].title}</div>
        </div> */}
       
      <div className="flex items-center justify-center mt-8 lg:mr-[110px]">
        <button 
          className={` ${isAtStart ? 'cursor-not-allowed' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtStart && setCurrentIndex(prev => prev - 1)}
          disabled={isAtStart}
        >
          <Image src={"/assets/images/right-arrow.png"} className="rotate-180 lg:w-[100px] w-[50px]" alt="left arrow" height={"50"} width={"100"}/>
        </button>
        <div className="text-center w-full lg:text-2xl text-md font-bold relative">
          <div className="custom-text-gradient">{amenities[getSlideModuloIndex(currentIndex)].title}</div>
        </div>
        <button 
          className={`${isAtEnd ? 'cursor-not-allowed opacity-[.4]' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtEnd && setCurrentIndex(prev => prev + 1)}
          disabled={isAtEnd}
        >
          <Image src={"/assets/images/right-arrow.png"} alt="right arrow" className="lg:w-[100px] w-[50px]" height={"50"} width={"100"}/>
        </button>
      </div>
        <div className='text-center lg:hidden block mt-[40px]'  >
        <Bordered_button >
                View More
            </Bordered_button>  
            </div>
    </section>
  );
}