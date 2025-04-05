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
  // Define a constant for spacing to ensure consistency throughout the component
  const SLIDE_GAP = 20;
  
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);
  const totalSlides = 6;
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
    { title: "Pool", src: "/assets/images/amenities_4.jpg", alt: "Amenity 4" },
    { title: "Spa", src: "/assets/images/amenities_5.jpg", alt: "Amenity 5" },
    { title: "Lounge", src: "/assets/images/amenities_7.jpg", alt: "Amenity 7" },
    { title: "Garden", src: "/assets/images/amenities_8.jpg", alt: "Amenity 8" },
  ];

  useEffect(() => {
    // Create a triple set of amenities for infinite scrolling effect
    const paddedAmenities = [...amenities, ...amenities, ...amenities];
    setInfiniteAmenities(paddedAmenities);
    
    // Set initial slide to middle set
    setCurrentIndex(totalSlides);
  }, []);

  const getSlideModuloIndex = (index) => {
    return ((index % totalSlides) + totalSlides) % totalSlides;
  };

  const animateSlider = (index) => {
    if (!slidesRef.current[0] || !sliderRef.current || infiniteAmenities.length === 0) return;

    const slideWidth = slidesRef.current[0].offsetWidth;
    
    // Use the constant SLIDE_GAP for consistent spacing
    const centerOffset = window.innerWidth / 2 - slideWidth / 2;
    
    setIsAtStart(index <= 0);
    setIsAtEnd(index >= infiniteAmenities.length - 1);
    
    const safeIndex = Math.max(0, Math.min(index, infiniteAmenities.length - 1));
    
    // Calculate target position with consistent spacing using SLIDE_GAP
    const targetX = -(safeIndex * (slideWidth + SLIDE_GAP)) + centerOffset;

    gsap.to(sliderRef.current, {
      x: targetX,
      duration: 1.2,
      ease: "slow"
    });

    // Create wave effect on initial view
    const initialWaveSetup = !isMounted.current;

    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;
      
      const currentModIndex = getSlideModuloIndex(safeIndex);
      const slideModIndex = getSlideModuloIndex(i);
      
      const distance = Math.min(
        Math.abs(slideModIndex - currentModIndex),
        totalSlides - Math.abs(slideModIndex - currentModIndex)
      );
      
      // Wave effect parameters
      const waveAmplitude = initialWaveSetup ? 50 : 25; // More pronounced on initial load
      let waveOffset = 0;

      if (window.innerWidth > 991) {
        // Sine wave pattern for vertical offset
        waveOffset = Math.sin(distance * Math.PI * 0.25) * waveAmplitude;
      }

      if (getSlideModuloIndex(i) === getSlideModuloIndex(safeIndex)) {
        // Current slide
        gsap.to(slide, {
          scale: 1,
          opacity: 1,
          y: initialWaveSetup ? 0 : waveOffset * 0.2, // Subtle wave for current slide
          duration: 0.8,
          ease: "slow",
        });
      } else {
        // Other slides - apply wave pattern
        gsap.to(slide, {
          scale: 0.7,
          opacity: 0.6,
          y: initialWaveSetup ? 
            (slideModIndex < currentModIndex ? waveOffset : -waveOffset) : 
            (slideModIndex < currentModIndex ? waveOffset : -waveOffset + 20),
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
        markers: false,
        onEnter: () => {
          isMounted.current = false;
          animateSlider(currentIndex);
        }
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
        <div 
          ref={sliderRef} 
          className="flex"
          style={{ gap: `${SLIDE_GAP}px` }} // Use the constant for consistent spacing
        >
          {infiniteAmenities.map((amenity, index) => (
            <div
              key={`slide-${index}`}
              ref={(el) => (slidesRef.current[index] = el)}
              className="relative wave-slide cursor-pointer flex-shrink-0 flex-grow-0 lg:basis-[calc(25%-15px)] basis-[calc(80%-15px)]"
              style={{ marginRight: `${SLIDE_GAP}px` }} // Additional spacing to ensure consistency
              onClick={() => handleSlideClick(index)}
            >
              <Image
                className="object-cover lg:h-[480px] rounded-[6px] shadow-xl transition-all duration-700 ease-out"
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
      <div className="flex items-center justify-center mt-8">
        <button 
          className={`${isAtStart ? 'cursor-not-allowed' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtStart && setCurrentIndex(prev => prev - 1)}
          disabled={isAtStart}
        >
          <Image src={"/assets/images/right-arrow.png"} className="rotate-180 opacity-[.4] w-[50px]" alt="left arrow" height={50} width={100}/>
        </button>
        <div className="text-center w-full lg:text-2xl text-md relative">
          <div className="custom-text-gradient">{amenities[getSlideModuloIndex(currentIndex)].title}</div>
        </div>
        <button 
          className={`${isAtEnd ? 'cursor-not-allowed opacity-[.4]' : ''} text-white rounded-lg transition-colors`}
          onClick={() => !isAtEnd && setCurrentIndex(prev => prev + 1)}
          disabled={isAtEnd}
        >
          <Image src={"/assets/images/right-arrow.png"} alt="right arrow" className="opacity-[.4] w-[50px]" height={50} width={100}/>
        </button>
      </div>
      <div className='text-center lg:hidden block mt-[40px]'>
        <Bordered_button>
          View More
        </Bordered_button>  
      </div>
    </section>
  );
}