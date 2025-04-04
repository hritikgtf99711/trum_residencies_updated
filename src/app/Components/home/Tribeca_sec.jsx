import React from 'react';
import Image from 'next/image';

export default function Tribeca_sec() {
  return (
    <section className='py-section relative black_texture_two'>
        <div className='custom_container'>
            <div className='grid grid-cols-12 gap-[50px]'>
            <div className='col-span-4'>
                    <div className='flex flex-col justify-between h-full'>
                        <Image src={'/assets/images/logo-tribeca.png'} alt='smart world' height={'54'} width={'276'}/>
                        <div className='custom-text-gradient text-left tracking-[2] text-[28px]'>
                        India’s Leading <span className='lg:block'></span>  Trophy Property Developer
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <Image src={'/assets/images/tribeca_banner.jpg'} className='rounded-lg' alt='smart world' height={'589'} width={'682'}/>   
                </div>
                <div className='col-span-4 m-auto'>
                     <p className='mb-3 font-[300] '> Founded in 2012, Tribeca is a premier design-driven real estate developer in India, dedicated to creating iconic landmarks that transform city skylines.</p>
                     <p className='font-[300] '>With every project, our mission is clear: to craft the most prestigious property in its market — a true “Trophy Property.” We set our standards against the world’s finest developments and proudly hold the distinction of being the largest developer of Trump-branded residences globally.</p>
                </div>
               

            </div>

        </div>
    </section>
  )
}
