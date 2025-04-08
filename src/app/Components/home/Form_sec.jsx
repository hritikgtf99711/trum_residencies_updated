"use client"
import React, { useState } from 'react'
import Form from '@/app/utils/Form';
import Image from 'next/image';

export default function Form_sec() {
  const [readmore,setReadMore]=useState(false);
  return (
    <section className='form_sec_container pt-section relative'>
      <Image src="/assets/images/circle_blob.png" alt="background blob" height={600} width={600} className='absolute z-[-1]  hidden lg:block
      left-[-20%] circle_blob bottom_blob opacity-[.2]' />
      <div className="w-full flex justify-center">
      <div className='custom_container'>
        <div className='grid lg:grid-cols-8 justify-items-center   gap-10  m-auto'>
            <div className='col-span-4 m-auto'>
                <div className='lg:text-[60px] text-[30px] lg:tracking-[2px] tracking-[1px] '>
                  Get In Touch
                    <span className='flex place-items-center'>
                      <span className='lg:px-8 px-4' >
                      <svg width="150" height="2" viewBox="0 0 206 2" fill="none" >
                       <path d="M0 1L206 1.00002" stroke="#E8C183" strokeWidth={2}/>
                    </svg></span>  With Us</span>
                </div>

            </div>
            <div className='lg:col-span-3 col-span-4 ms-auto'>        
                <Form/>
            </div>
        </div>
        <div className="separator  py-[50px] text-center">
          <div className='border-b-2 border-dashed border-primary-color'></div>
            </div>

        <div className='text-center pb-[20px]  '>
          <h6 className='text-[12px] lg:tracking-[1]  break-all' ><span className='text-[14px]'>Rera no.</span>  <span className='tracking-[2]'>RC/REP/HARERA/GGM/925/657/2025/28</span></h6>
            <h6 className='my-5 text-[14px] md:tracking-[2] tracking-[2px]  break-all'>Website of RERA Authority: <span className='lg:inline-block block text-[12px] md:tracking-[normal] tracking-[2px]'>https://haryanarera.gov.in</span></h6>
               <p className='text-[10px]'><span className='font-[400]'>Disclaimer:</span>This advertisement does not constitute an offer and/or acceptance and/or transaction and/or a disclosure under any statute of any nature whatsoever. All sales in this project shall be solely governed by terms of the agreement for sale entered into between the parties. Interested party are requested to inspect the project site and get all details and not to merely rely upon any architectural impression, plan or specification before taking decision in relation to the Project.</p>
               {readmore&& <p className='text-[10px]'>The plans, layouts, specifications, images and other details herein are indicative /artistic impression and subject to change. The developer/owner reserves the right to change any or all of the plans, layouts, specifications, images and other details herein in the interest of the development or as per approvals received or to be obtained.</p>}
               {!readmore ? 
                <button 
                  onClick={() => setReadMore(true)} 
                  className="tracking-[2px] font-[montserrat] text-[12px] rounded-sm bg-[#181615] py-3 px-4 inline-block my-4"
                >
                  Read More
                </button>
                :
                <button 
                  onClick={() => setReadMore(false)} 
                  className="tracking-[2px] font-[montserrat] text-[12px] rounded-sm bg-[#181615] py-3 px-4 inline-block my-4"
                >
                  Read Less
                </button>
              }
        <p className='text-center font-[400] tracking-[0] text-[12px]'>© Copyright 2025 - Trump Tower Gurgaon | Design by GTF Technologies</p>
        </div>
      </div>
      </div>
    </section>
  )
}
