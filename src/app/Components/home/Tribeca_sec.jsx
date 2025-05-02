import React from 'react';
import Image from 'next/image';

export default function Tribeca_sec() {
    let basePath=process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <section className='py-section relative lg:black_texture_two'>
        <div className='custom_container'>
            <div className='grid lg:grid-cols-12 gap-[50px]'>
            <div className='col-span-4'>
                    <div className='flex flex-col lg:justify-between  relative  h-full lg:text-start text-center'>
                        <img src={basePath+'/logo-tribeca.webp'} alt='tribeca logo'  className='lg:mb-0 md:mx-[0] mx-auto   w-[200px]  inline-block mb-8' height={'54'} width={'276'}/>
                        <div className='custom-text-gradient uppercase changed-font lg:text-left text-center md:tracking-[2] tracking-[1px] lg:text-[20px]'>
                        India’s Leading <span className='lg:block'></span>  Trophy Property <span className='lg:block'></span>Developer
                        </div>
                              <img src={basePath+"/circle_blob.webp"}  alt="building blob" height={800} width={800} className='lg:hidden block absolute  right-[-80px] top-[-140px] opacity-[.4] w-full  w-[38%]' /> 
                    </div>
                </div>
                <div className='col-span-4'>
                    <img src={basePath+'/tribeca_banner.webp'} className='rounded-lg' alt='tribeca banner' height={'589'} width={'682'}/>   
                </div>
                <div className='col-span-4 m-auto'>
                     <p className='mb-3'> Founded in 2012, Tribeca is India's leading design-focused real estate developer, committed to crafting iconic landmarks that redefine cityscapes.</p>
                     <p>With each project our simple goal is to make it the most prestigious property in its market – a “Trophy Property”. We benchmark our projects against the world’s best and are the largest developer of Trump® branded residences in the world. Our portfolio boasts of the largest collection of luxury branded residences in India.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
