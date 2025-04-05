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

  const amenities = [
    { title: "Meeting Room", src: "/assets/images/meeting_room.jpg", alt: "Meeting Room" },
    { title: "Gym", src: "/assets/images/gym.jpg", alt: "Gym" },
    { title: "Cigar Room", src: "/assets/images/cigar_room.jpg", alt: "Cigar Room" },
    { title: "Billiards Room", src: "/assets/images/billiard_room.jpg", alt: "Billiards Room" },
    { title: "Theatre", src: "/assets/images/theatre.jpg", alt: "Theatre" },
    { title: "Club", src: "/assets/images/club.jpg", alt: "Club" },
    { title: "Vault Library", src: "/assets/images/vault_library.jpg", alt: "Vault Library" },
    { title: "Business Lounge", src: "/assets/images/business_launge.jpg", alt: "Business Launge" },
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
    const slideGap = 20;
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
      className="relative black_texture_one  py-section flex flex-col items-center justify-center"
    >
      <div className="heading_container text-center">
        <Small_title small_title="world class" />
        <Heading heading="Amenities" />
      </div>
      <div className="w-full lg:mt-[50px] mt-[30px] relative overflow-hidden">
        <div 
          ref={sliderRef} 
          className="flex"
          style={{ gap: '20px' }}
        >
          {infiniteAmenities.map((amenity, index) => (
            <div
              key={`slide-${index}`}
              ref={(el) => (slidesRef.current[index] = el)}
              className="relative wave-slide cursor-pointer flex-shrink-0 flex-grow-0 lg:basis-[calc(25%)]  md:basis-[calc(30%-15px)]  md:basis-[calc(30%-15px)] basis-[calc(60%-15px)]"
              onClick={() => handleSlideClick(index)}
            >
              <Image
                className="object-cover md:h-[480px] h-[350px] rounded-[6px]  transition-all duration-700 ease-out"
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
        <div className="text-center w-full   text-md relative">
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