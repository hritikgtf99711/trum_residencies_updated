import React from 'react';
import Image from 'next/image';

export default function Smart_world() {
    let basePath=process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <section className='py-section relative lg:black_texture_three bg-[#181615]' id="about-developer">
        <div className='custom_container'>
            <div className='grid lg:grid-cols-12 gap-[50px]'>
                <div className='col-span-4 m-auto lg:order-[0] order-[1]'>
                     <p>Smartworld Developers has been smartly reshaping the real estate landscape with its vision of creating world-class realty assets in India. The company’s commitment to innovation, exceptional design, and on-time delivery has set new benchmarks in real estate development, shaping the future of the industry in India. Over the past four years, Smartworld Developers has created new benchmarks in Gurugram’s luxury real estate market, with developments such as Smartworld Sky Arc in Sector 69, Smartworld The Edition in Sector 66, and Smartworld One DXP, located on the Dwarka Expressway in Sector 113.</p>
                </div>
                <div className='col-span-4'>
                    <img src={basePath+'/smart_world_banner.webp'} className='rounded-md  w-full' alt='smart world' height={'86'} width={'400'}/>
                </div>
                <div className='col-span-4  lg:order-[1] order-[-2]'>
                    <div className='flex flex-col justify-between h-full relative lg:place-items-end'>
                    <img src={basePath+"/circle_blob.webp"} alt="building blob" height={800} width={800} className='lg:hidden block absolute  left-[-80px] top-[-140px] opacity-[.4] w-full  w-[38%]' /> 
                    <img src={basePath+'/logo_smart_world.webp'}  className='lg:w-[300px]  w-[200px] lg:mx-[0] mx-auto'  alt='smart world' height={'589'} width={'300'}/> 
                <div className='custom-text-gradient uppercase lg:text-right text-center lg:mt-o mt-[30px] tracking-[2] text-[18px] lg:text-[20px] font-[300] md:tracking-[2] tracking-[1px] changed-font'>
                    One of the Fastest-<span className='lg:block'></span>Growing Real Estate<span className='lg:block'></span> Developers in the <span className='lg:block'></span>Country
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
