"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const WhoWeAre = () => {
  const words = [
    "GTF",
    " ",
    "Technologies",
    " ",
    "is",
    " ",
    "conceptualized",
    " ",
    "from",
    " ",
    "Gurukul",
    " ",
    "The",
    " ",
    "Foundation.",
    " ",
    "We",
    " ",
    "are",
    " ",
    "a",
    " ",
    "16-year-old",
    " ",
    "branding",
    " ",
    "and",
    " ",
    "digital",
    " ",
    "media",
    " ",
    "planning",
    " ",
    "agency",
    " ",
    "headquartered",
    " ",
    "in",
    " ",
    "Noida,",
    " ",
    "Mumbai,",
    " ",
    "Pune,",
    " ",
    "and",
    " ",
    "an",
    " ",
    "upcoming",
    " ",
    "office",
    " ",
    "in",
    " ",
    "Bangalore.",
    " ",
    "GTF",
    " ",
    "Technologies",
    " ",
    "is",
    " ",
    "conceptualized",
    " ",
    "from",
    " ",
    "Gurukul",
    " ",
    "The",
    " ",
    "Foundation.",
    " ",
  ];
  const textRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register the SplitText plugin
    gsap.registerPlugin(SplitText);

    // Create an array to hold the split text instances
    const splitInstances = textRef.current.map(
      (ref) => ref && new SplitText(ref, { type: "chars" })
    );

    // Flatten the array of all characters
    const allChars = splitInstances.flatMap((split) => split?.chars || []);

    // Fix reflow issue by animating opacity & scale instead of direct font change
    gsap.fromTo(
      allChars,
      {
        opacity: 0.3,

        fontSize: "38px",
        fontWeight: "500",
        position: "relative", // Fixes shifting
      },
      {
        fontWeight: 500,
        fontSize: "38px",
        duration: 1,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      }
    );

    // Cleanup function to revert changes on unmount
    return () => {
      splitInstances.forEach((split) => split?.revert());
    };
  }, []);

  //   useLayoutEffect(() => {
  //     // if (!data.length || !valuesRef.current) return;

  //     let ctx = gsap.context(() => {
  //       const valuesContainer = valuesRef.current;
  //       const scrollAmount = valuesContainer.scrollWidth - window.innerWidth;
  //       if (scrollAmount <= 0) return;

  //       gsap.to(valuesContainer, {
  //         x: -scrollAmount,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top-=50px top",
  //           end: `+=${scrollAmount + 200}`,
  //           scrub: 1,
  //           pin: true,
  //         },
  //       });

  //       // 🔥 This is the fix: Delay ScrollTrigger refresh 🔥
  //       setTimeout(() => {
  //         ScrollTrigger.refresh();
  //       }, 500); // Adjust timing if necessary
  //     }, sectionRef);

  //     const handleResize = () => ScrollTrigger.refresh();
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       ctx.revert();
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-scroll no-scrollbar flex flex-col flex-wrap justify-between uppercase h-[100vh] "
    >
      <div className="bg-[#d93f92]">
        {" "}
        <div className="basis-[50%] flex flex-wrap justify-between min-h-[100vh] ">
          <div className="basis-[60%] pt-[20px] pl-[40px]">
            <h2 className="font-[Oswald] mb-[35px] text-[25px] text-left">
              Who We Are?
            </h2>
            <div>
              {words.map((word, index) => (
                <p
                  ref={(el) => (textRef.current[index] = el)}
                  key={index}
                  style={{ whiteSpace: "nowrap" }}
                  className={`font-[Oswald] pr-[8px] font-[500] text-[38px] inline-block`}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
          <div className="basis-[30%]">
            {" "}
            <img
              src="/assets/home/who_we_are/bg.png"
              className="h-[100vh] basis-[29%] object-cover w-full"
              alt="who_we_are"
            />
          </div>
        </div>
      </div>{" "}
      <div className="flex  items-center pl-[3rem] pr-[2.5rem] h-[100vh]">
        <img
          className="h-[55vh] w-[265px] border-[4px] border-solid mt-[1.6rem] mr-[0.9rem] rotate-[-6deg] border-black"
          src="/assets/home/who_we_are/1.png"
          alt="1.png"
        />
        <img
          className="h-[55vh] w-[265px] border-[4px] border-solid  border-black"
          src="/assets/home/who_we_are/1.png"
          alt="1.png"
        />
        <img
          className="h-[55vh] w-[265px] border-[4px] ml-[2.5rem] border-solid  border-black"
          src="/assets/home/who_we_are/1.png"
          alt="1.png"
        />
        <div className="ml-[4rem] min-w-[600px]">
          <h3 className="font-[Oswald] text-[37px] mb-[1rem] font-bold">
            WHEN UNKNOW PRINTER <br /> TOOK A GALLERY
          </h3>
          <p className="font-[Oswald] font-medium mb-[1rem]">
            MAKE A TYPE SPICEMEN BOOK
          </p>
          <div className="text-right">
            <p className="text-[14px] text-justify">
              MAKE A TYPE SPICEMEN BOOK MAKE A TYPE <br /> SPICEMEN BOOKMAKE A
              TYPE SPICEMEN BOOK MAKE A TYPE SPICEMEN BOOK
            </p>
          </div>
        </div>
        <img
          className="h-[55vh] w-[265px] border-[4px] border-solid mt-[0.85rem] mr-[0.9rem] rotate-[-6deg] border-black"
          src="/assets/home/who_we_are/1.png"
          alt="1.png"
        />
        <img
          className="h-[55vh] mr-[30px] w-[265px] border-[4px] border-solid  border-black"
          src="/assets/home/who_we_are/1.png"
          alt="1.png"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
