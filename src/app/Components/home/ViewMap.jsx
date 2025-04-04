  "use client"
  import React from 'react';
  import Heading from '@/app/utils/Heading';
  import Bordered_button from '@/app/utils/Bordered_button';
  import Image from 'next/image';


  export default function ViewMap() {
    return (
      <section className="relative  pb-section">
        <div className='custom_container relative' >
          <div className='grid grid-cols-6 gap-x-[50px] gap-y-4'>
            <div className='col-span-3  m-auto'>
              <div className='content_container'>
                <div className='heading_container lg:w-[60%]  text-start'>
                   <Heading heading={'THE CENTER OF THE WORLD'}/>
                </div>
                  <p className='my-10 lg:pe-[100px]'>Trump Residences Gurugram is a striking testament to contemporary grandeur. An icon sculpted in glass and steel. With soaring double-height ceilings and uninterrupted glass façades, the skyline becomes an extension of your home. Step into a world of tailored perfection, where private elevators lead to impeccably crafted sanctuaries adorned with the finest materials. Beyond these doors lies an exclusive realm, dedicated concierge services, unparalleled privacy and the promise of an extraordinary life reserved for a rare few.</p>
              <Bordered_button>
                View Map
              </Bordered_button>
              </div>
            </div>
            <div className='col-span-3'>
                <Image src={'/assets/images/right_map.png'} alt=""  className='w-full' height={'900'} width={'1200'}/>
            </div>
            </div>
          </div>
      </section>
    );
  }
