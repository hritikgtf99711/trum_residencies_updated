  "use client"
  import React from 'react';
  import { useRef } from 'react';
  import Heading from '@/app/utils/Heading';
  import Small_title from '@/app/utils/Small_title';
  import Image from 'next/image';
import { useAboutProject } from '@/app/utils/SharedTimeline';


  export default function About() {
  const aboutProjectRef = useRef();
let basePath=process.env.NEXT_PUBLIC_BASE_PATH;
let videoPath=process.env.NEXT_PUBLIC_BASE_PATH_VIDEO

  useAboutProject(aboutProjectRef);
    return (
      <section className="relative frame_sec   py-section">
          <div className='custom_container relative'  ref={aboutProjectRef} >
              <div className='heading_container text-center'>
                {/* <Small_title small_title="About Project"/> */}
                <Heading heading={'The World of Trump®'}/>
              </div>
                <div className='video_sec lg:w-[70%] w-full m-auto mt-10'>
                <img src={basePath+"/bg-stick-left.webp"} alt="background blob" height={800} width={800} className='afterBeforeImage before' />
                  <img src={basePath+"/bg-stick-right.webp"} alt="background blob" height={800} width={800} className='afterBeforeImage after ' />
                    <video className="mt-[50px] lg:block hidden" autoPlay loop controls muted>
                    <source src={videoPath+"/about_us_banner.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                    <video className="mt-[50px] lg:hidden block" autoPlay loop controls muted>
                    <source src={videoPath+"/mobie_version_video.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>    
                  <div className='bg-[#E8C183] absolute h-[800px] z-[-1] w-full  rounded-[50%] opacity-[.2] blur-[50px] lg:top-[-84px] top-[135px]'></div>
                </div>
          </div>
      </section>
    );
  }
