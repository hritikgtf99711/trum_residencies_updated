"use client"
import React, { useEffect, useState } from 'react'
import Form from '@/app/utils/Form';
import Image from 'next/image';
import Disclaimer from './Disclamer';
import { smoother } from '@/app/utils/SharedTimeline';

export default function Form_sec() {
  const [readmore,setReadMore]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    if (smoother) {
      if (isOpen) {
        smoother.paused(true); // Pause smoother scrolling
        document.body.style.overflow = 'hidden'; // Optional: block background scroll
      } else {
        smoother.paused(false); // Resume it
        document.body.style.overflow = ''; // Restore normal scroll
      }
    }
  }, [isOpen]);
  return (
    <>
    <section className='form_sec_container pt-section relative'>
      <Image src="/assets/images/circle_blob.png" alt="background blob" height={600} width={600} className='absolute z-[-1]  block
      lg:left-[-40%] left-0 top-[-10%] lg:bottom-[-120px] w-[100%]  circle_blob bottom_blob opacity-[.5] lg:opacity-[.2]' />
      <div className="w-full flex justify-center">
      <div className='custom_container'>
        <div className='grid lg:grid-cols-8 justify-items-center   gap-10  m-auto'>
            <div className='col-span-4 m-auto'>
                <div className='lg:text-[40px] text-[20px] lg:tracking-[2px] tracking-[1px] '>
                  <span className='lg:text-[60px] text-[30px]'>G</span>et In  <span className='lg:text-[60px] text-[30px]'>T</span>ouch
                    <span className='flex place-items-center'>
                      <span className='lg:px-8 px-4' >
                      <svg width="150" height="2" viewBox="0 0 206 2" fill="none" >
                       <path d="M0 1L206 1.00002" stroke="#E8C183" strokeWidth={2}/>
                    </svg></span>  <span className='lg:text-[60px] text-[30px]'>W</span>ith Us</span>
                </div>

            </div>
            <div className='lg:col-span-3 col-span-4 ms-auto'>        
                <Form via={1}/>
            </div>
        </div>
        <div className="separator  py-[50px] text-center">
          <div className='border-b-2 border-dashed border-primary-color w-[80%] mx-auto'></div>
            </div>

        <div className='text-center pb-[20px]  '>
          <h6 className='text-[12px] lg:tracking-[1]  break-all' ><span className='text-[14px]'>Rera no.</span>  <span className='tracking-[2]'>RC/REP/HARERA/GGM/925/657/2025/28</span></h6>
            <h6 className='my-5 text-[14px] md:tracking-[2] tracking-[2px]  break-all'>Website of RERA Authority: <span className='lg:inline-block block text-[12px] md:tracking-[normal] tracking-[2px]'>https://haryanarera.gov.in</span></h6>
            <p className='text-[10px]'>
                <span className='font-[400]'>Disclaimer:</span> Smartworld Developers Private limited makes available information and materials on this website (“Site”), subject to the following terms and conditions. By accessing this Site, you unconditionally without limitation agree to the terms and conditions as outlined in this Disclaimer. The Company reserves right to change or amend these terms and conditions from time to time at its sole discretion and without any intimation to you or without notifying the same to you and that you shall be bound by any such change(s) so effected.
              </p>

              {/* Read More opens modal */}
              <button
                onClick={() => setIsOpen(true)}
                className="tracking-[2px] font-[montserrat] text-[12px] rounded-sm bg-[#181615] py-3 px-4 inline-block my-4"
              >
                Read More
              </button>
        <p className='text-center font-[400] tracking-[0] text-[12px]'>© Copyright 2025 - Trump Tower Gurgaon | Design by GTF Technologies</p>
        </div>
      </div>
      </div>
    </section>

    <Disclaimer isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </>
  )
}
