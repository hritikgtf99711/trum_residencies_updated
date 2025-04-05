import React from 'react';
import Image from 'next/image';

export default function Smart_world() {
  return (
    <section className='py-section relative lg:black_texture_three bg-[#181615]'>
        <div className='custom_container'>
            <div className='grid lg:grid-cols-12 gap-[50px]'>
                <div className='col-span-4 m-auto lg:order-[0] order-[1]'>
                     <p>India's fastest growing real estate conglomerate with a reputation for identifying emerging real estate markets, recognizing aspirations in lifestyle evolution, perfecting the modulations of luxury and responding with projects that capture the unique spirit of changing India.</p>
                </div>
                <div className='col-span-4'>
                    <Image src={'/assets/images/smart_world_banner.jpg'} className='rounded-md  w-full' alt='smart world' height={'86'} width={'400'}/>
                    
                </div>
                <div className='col-span-4  lg:order-[1] order-[-2]'>
                    <div className='flex flex-col justify-between h-full relative lg:place-items-end'>
                          <Image src="/assets/images/circle_blob.png"  alt="building blob" height={800} width={800} className='lg:hidden block absolute  left-[-80px] top-[-140px] opacity-[.4] w-full  w-[38%]' /> 
             
                        <Image src={'/assets/images/logo_smart_world.png'}  className='lg:w-[300px] w-[200px] lg:mx-[0] mx-auto'  alt='smart world' height={'589'} width={'300'}/>
                      
               
                <div className='custom-text-gradient lg:text-right text-center lg:mt-o mt-[30px] tracking-[2] text-[18px] lg:text-[20px] font-[300] md:tracking-[2] tracking-[1px]'>
                    One of the Fastest-<span className='lg:block'></span>Growing Real Estate<span className='lg:block'></span> Developers in the <span className='lg:block'></span>Country
                    </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}
