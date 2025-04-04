import React from 'react';
import Image from 'next/image';

export default function Smart_world() {
  return (
    <section className='py-section relative black_texture_three'>
        <div className='custom_container'>
            <div className='grid grid-cols-12 gap-[50px]'>
                <div className='col-span-4 m-auto'>
                     <p className='font-[300] tracking-wide'>India's fastest growing real estate conglomerate with a reputation for identifying emerging real estate markets, recognizing aspirations in lifestyle evolution, perfecting the modulations of luxury and responding with projects that capture the unique spirit of changing India.</p>
                </div>
                <div className='col-span-4'>
                    <Image src={'/assets/images/smart_world_banner.jpg'} className='rounded-md ' alt='smart world' height={'86'} width={'400'}/>
                    
                </div>
                <div className='col-span-4'>
                    <div className='flex flex-col justify-between h-full'>
                        <Image src={'/assets/images/logo_smart_world.png'} alt='smart world' height={'589'} width={'682'}/>
               
                <div className='custom-text-gradient text-right tracking-[2] text-[28px] font-[300] tracking-wide'>
                    One of the Fastest-Growing Real Estate Developers in the Country
                    </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}
