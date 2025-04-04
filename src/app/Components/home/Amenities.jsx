import React from 'react';
import Image from 'next/image';
import Small_title from '@/app/utils/Small_title';
import Heading from '@/app/utils/Heading';
export default function Amenities() {
  return (
     <section className="relative black_texture_one  py-section">
        <div className='heading_container text-center'>
            <Small_title small_title="About Project"/>
            <Heading heading={'The World of Trump'}/>
        </div> 
        <div className='slider_comp mt-10'>
                <div className=''>
                    <Image src={'/assets/images/amenities_one.jpg'} alt='' width={'536'} height={'644'}/>
                </div>
                <div className=''>
                    <Image src={'/assets/images/amenities_two.jpg'} alt='' width={'536'} height={'644'}/>
                </div>
        </div>
    </section>
  )
}
