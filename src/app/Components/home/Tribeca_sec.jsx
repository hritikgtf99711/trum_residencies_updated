import React from 'react';
import Image from 'next/image';

export default function Tribeca_sec() {
  return (
    <section className='py-section relative lg:black_texture_two'>
        <div className='custom_container'>
            <div className='grid lg:grid-cols-12 gap-[50px]'>
            <div className='col-span-4'>
                    <div className='flex flex-col lg:justify-between  relative  h-full lg:text-start text-center'>
                        <Image src={'/assets/images/logo-tribeca.png'} alt='smart world'  className='lg:mb-0 mx-auto lg:w-[auto] w-[200px] inline-block mb-8' height={'54'} width={'276'}/>
                        <div className='custom-text-gradient lg:text-left text-center tracking-[2] lg:text-[24px]'>
                        India’s Leading <span className='lg:block'></span>  Trophy Property Developer
                        </div>
                              <Image src="/assets/images/circle_blob.png"  alt="building blob" height={800} width={800} className='lg:hidden block absolute  right-[-80px] top-[-140px] opacity-[.4] w-full  w-[38%]' /> 
                    </div>
                </div>
                <div className='col-span-4'>
                    <Image src={'/assets/images/tribeca_banner.jpg'} className='rounded-lg' alt='smart world' height={'589'} width={'682'}/>   
                </div>
                <div className='col-span-4 m-auto'>
                     <p className='mb-3'> Founded in 2012, Tribeca is a premier design-driven real estate developer in India, dedicated to creating iconic landmarks that transform city skylines.</p>
                     <p>With every project, our mission is clear: to craft the most prestigious property in its market — a true “Trophy Property.” We set our standards against the world’s finest developments and proudly hold the distinction of being the largest developer of Trump-branded residences globally.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
