import React from 'react';

export default function Banner() {
  return (
    <section className="relative h-[calc(100vh-137px)]">
      <div className="z-[2] relative h-[calc(100%)] custom_container text-center flex flex-col justify-between pb-10 place-items-center">
          <h1 className="bg-custom-gradient inline-block tracking-[10px]  text-transparent bg-clip-text text-[80px] m-auto"><span>TRUMP</span><span className='lg:block  text-[30px]  w-[100px] m-auto text-center'><span className='mb-3 inline-block'>IS</span> BACK</span></h1>
       <div className="mb-10">
       <div className='stripe_txt text-[18px] bg-[#000]  uppercase px-10 py-2'> 
          <p className='text-[#D6D6D6] text-bold tracking-[1px] font-[cinzel]'>Join the Elite – Experience the Trump Legacy</p>
      </div>
        <a href=""  className="comment-button mt-10 inline-block tracking-[2px] ">Reserve Your Trump Home</a>
      </div>
    </div>

    <video className="mt-[50px] w-full absolute h-full bottom-[0] left-[0] w-full" autoPlay loop muted>
      <source src="/assets/video/building_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </section>
  );
}
