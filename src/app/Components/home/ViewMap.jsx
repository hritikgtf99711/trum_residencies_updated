"use client"
import React, { useState } from 'react';
import Heading from '@/app/utils/Heading';
import Bordered_button from '@/app/utils/Bordered_button';
import MapModal from '@/app/utils/MapModal';


export default function ViewMap() {
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH
  const [isMapOpen, setIsMapOpen] = useState(false);


  return (
    <section className="relative lg-py-0 lg:pb-[0] pb-section">
      <img src={basePath + '/assets/images/ring_blob.svg'} alt="" className='absolute  lg:hidden block left-[-30px] z-[-1] top-[-228px]' height={'200'} width={'200'} />
      <div className='custom_container relative' >
        <div className='grid md:grid-cols-6 grid-cols-1  gap-x-[50px] gap-y-4'>
          <div className='col-span-3  m-auto'>
            <div className='content_container'>
              <div className='heading_container lg:w-[60%]  text-start'>
                <Heading heading={'THE CENTER OF THE WORLD'} classNames="md:text-start text-center" />
              </div>
              <p className='md:my-10  my-5 lg:pe-[100px]'>Trump Residences Gurgaon is a striking testament to contemporary grandeur. An icon sculpted in glass and steel. With soaring double-height ceilings and uninterrupted glass façades, the skyline becomes an extension of your home. Step into a world of tailored perfection, where private elevators lead to impeccably crafted sanctuaries adorned with the finest materials. Beyond these doors lies an exclusive realm, dedicated concierge services, unparalleled privacy and the promise of an extraordinary life reserved for a rare few.</p>
              <button
                onClick={() => setIsMapOpen(true)}
                className="lg:inline-flex hidden border-y-2 border-primary-color px-8 z-[1] py-3 call_now_btn tracking-[2px] inline-flex text-[#C7C7C7]"
              >
                View Map
              </button>
            </div>
          </div>
          <div className='col-span-3 lg:text-start text-center'>
            <img src={basePath + '/right_map.webp'} alt="" className='w-full' height={'900'} width={'1200'} />
            <img src={basePath + "/circle_blob.webp"} alt="background blob" height={800} width={800} className='absolute z-[-1] lg:hidden none  bottom-[-20px] left-[-40px] opacity-[0.2]' />
            <button className={"md:hidden block lg:mt-0 mt-10 border-y-2 border-primary-color px-8 z-[1] py-3 call_now_btn tracking-[2px] inline-flex text-[#C7C7C7]"} onClick={() => setIsMapOpen(true)}>
              View Map
            </button>
          </div>
        </div>
      </div>
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)}>
        <img src={basePath + '/right_map.webp'} alt="" className='w-full' height={'900'} width={'1200'} />
      </MapModal>

    </section>
  );
}
