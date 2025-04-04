  "use client"
  import React from 'react';
  import Heading from '@/app/utils/Heading';
  import Bordered_button from '@/app/utils/Bordered_button';
  import Image from 'next/image';


  export default function ViewMap() {
    return (
      <section className="relative">
             <Image src={'/assets/images/ring_blob.svg'} alt=""  className='absolute  lg:hidden block left-[-30px] z-[-1] top-[-228px]' height={'200'} width={'200'}/>
        <div className='custom_container relative' >
          <div className='grid lg:grid-cols-6 grid-cols-1  gap-x-[50px] gap-y-4'>
            <div className='col-span-3  m-auto'>
              <div className='content_container'>
                <div className='heading_container lg:w-[60%]  text-start'>
                   <Heading heading={'THE CENTER OF THE WORLD'} classNames="lg:text-start text-center"/>
                </div>
                  <p className='lg:my-10  my-5 lg:pe-[100px]'>Trump Residences Gurgaon is a striking testament to contemporary grandeur. An icon sculpted in glass and steel. With soaring double-height ceilings and uninterrupted glass façades, the skyline becomes an extension of your home. Step into a world of tailored perfection, where private elevators lead to impeccably crafted sanctuaries adorned with the finest materials. Beyond these doors lies an exclusive realm, dedicated concierge service  s, unparalleled privacy and the promise of an extraordinary life reserved for a rare few.</p>
              <Bordered_button classNames={"lg:inline-flex hidden"}> 
                View Map
              </Bordered_button>
              </div>
            </div>
            <div className='col-span-3 lg:text-start text-center'>
                <Image src={'/assets/images/right_map.png'} alt=""  className='w-full' height={'900'} width={'1200'}/>
                <Image src="/assets/images/circle_blob.png"  alt="background blob" height={800} width={800} className='absolute z-[1] lg:hidden none  bottom-[-20px] left-[-40px] opacity-[0.2]' /> 
                <Bordered_button classNames={"lg:hidden block lg:mt-0 mt-10"}> 
                View Map
              </Bordered_button>
            </div>
            </div>
          </div>
      </section>
    );
  }
