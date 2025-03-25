"use client";
import { TfiPlus } from "react-icons/tfi";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { name: "Brand Strategy", img: "1.jpg", id: "brand_strategy" },
  {
    name: "Website Design & Development",
    id: "website_development",
    img: "5.jpg",
  },
  { name: "Paid Ads", id: "paid_ads", img: "3.jpg", video: "video_2.mp4" },
  { name: "Search Engine Optimization", id: "seo", img: "4.jpg" },
  { name: "Social Media Marketing", id: "social", img: "2.jpg" },
];

const HeroSection = () => {
  const [showLines, setShowLines] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperInstance = useRef(null);
  const containRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // Start animation once Swiper is fully loaded
  useEffect(() => {
    if (swiperReady) {
      gsap.fromTo(
        line1Ref.current,
        { width: "0%", opacity: 0, left: "17%" },
        {
          width: "25%",
          opacity: 1,
          left: "17%",
          duration: 1.5,
          ease: "power2.in",
        }
      );

      gsap.fromTo(
        line2Ref.current,
        { width: "0%", opacity: 0, right: "25%" },
        {
          width: "24%",
          opacity: 1,
          right: "25%",
          duration: 1.5,
          ease: "power2.in",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        line3Ref.current,
        { height: "0%", opacity: 0 },
        {
          height: "15px",
          opacity: 1,
          duration: 1.6,
          ease: "power2.in",
          delay: 0.2,
        }
      );

      setShowLines(true); // Ensures lines are shown only after animation starts
    }
  }, [swiperReady]); // Trigger animation when Swiper is ready

  return (
    <section className="px-[50px] pb-[20px]">
      <div className="flex justify-center mb-[11px]">
        <h1 className="uppercase text-center text-[42px] font-[700] font-[Oswald] leading-[50px] tracking-[1px] w-[60%]">
          <span className="block mb-[7px]">Branding, Digital Marketing</span>
          <span className="block">and Double-Digit Growth</span>
        </h1>
      </div>

      <div className="flex justify-between relative flex-wrap">
        {/* Background Shape */}
        <img
          src="/assets/home/hero/circle.svg"
          className="h-[330px] rotate-plus absolute top-[30%] opacity-[0.6] left-[10%]"
          alt="plus"
        />

        {/* Left Section */}
        <div className="basis-[14%] mt-[80px]">
          {data.map((_, index) => (
            <span
              key={index}
              className={`block border-b-[1px] border-black transition-all duration-500 ${
                index === activeIndex ? "w-[20%]" : "w-[15%]"
              } mb-[3px]`}
            />
          ))}
        </div>

        {/* Animated Lines (Appear Only After Swiper is Loaded) */}
        {swiperReady && (
          <>
            <div
              ref={line1Ref}
              className="h-[15px] w-[80%] absolute top-[40.4%] z-[-9999] bg-[#d93f92] opacity-0"
            ></div>
            <div
              ref={line2Ref}
              className="h-[15px] w-[80%] absolute top-[71.5%] right-[-196px] bg-[#FDE93D] opacity-0"
            ></div>
            <div
              ref={line3Ref}
              className="w-[41.56%] left-[28.6%] bottom-[-5%] z-[999] absolute bg-[#2AAEE4] opacity-0"
            ></div>
          </>
        )}

        {/* Swiper Section */}
        {
          <div
            className="basis-[52%] h-[418px] overflow-hidden relative"
            ref={containRef}
          >
            <Swiper
              direction="vertical"
              loop={true}
              slidesPerView={3}
              onSwiper={(swiper) => {
                swiperInstance.current = swiper;
                swiper.slideTo(0);
                setTimeout(() => setSwiperReady(true), 500); // Delay to ensure smooth load
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 0.5,
                thresholdDelta: 20,
              }}
              pagination={{ clickable: true }}
              modules={[Mousewheel, Pagination]}
              className="h-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {data.map((info, index) => (
                <SwiperSlide
                  key={index + info.name}
                  className="flex justify-center"
                >
                  <div className="br_line h-[30px] absolute w-[30px] top-[-12%] left-[-2.5%] border-t border-l border-black transition-all duration-500" />
                  <div className="br_line h-[30px] absolute w-[30px] top-[-12%] right-[-2.5%] border-t border-r border-black transition-all duration-500" />
                  <div className="br_line h-[30px] absolute w-[30px] bottom-[-12%] left-[-2.5%] border-b border-l border-black transition-all duration-500" />
                  <div className="br_line h-[30px] absolute w-[30px] bottom-[-12%] right-[-2.5%] border-b border-r border-black transition-all duration-500" />

                  <img
                    src={`/assets/home/hero/${info.img}`}
                    className="w-full h-[100%] z-[9999] object-cover transition-transform duration-500"
                    alt={info.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }

        {/* Right Section */}
        <div className="flex flex-col relative justify-between">
          <ul className="basis-[22%] mt-[40px]">
            {data.map((info, index) => (
              <li
                key={index}
                onClick={() => swiperInstance.current?.slideToLoop(index)}
                className={`font-[Oswald] text-[15px] uppercase font-[450] text-right transition-all duration-500 ${
                  index === activeIndex ? "text-black" : "text-[#b5b6b2]"
                }`}
              >
                {info.name}
              </li>
            ))}
          </ul>
          <div className="flex absolute bottom-0 right-0 w-[280px] items-center text-[14px]">
            <p className="font-[Oswald] font-[400] text-end text-[14px] mr-[12px]">
              <span className="font-medium ">GTF Technologies</span> is
              conceptualized from
              <span className="font-medium"> Gurukul The Foundation</span>
            </p>
            <img
              src="/assets/home/hero/map.png"
              className="h-[60px] object-contain w-[140px]"
              alt="map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
