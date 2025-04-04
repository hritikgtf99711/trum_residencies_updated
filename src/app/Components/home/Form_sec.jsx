import React from 'react'
import Form from '@/app/utils/Form';
import Image from 'next/image';

export default function Form_sec() {
  return (
    <section className='form_sec_container pt-section relative'>
      <Image src="/assets/images/circle_blob.png" alt="background blob" height={600} width={600} className='absolute z-[-1] 
      left-[-28%] circle_blob bottom_blob opacity-[.4]' />
      <div className='custom_container'>
        <div className='grid grid-cols-8 justify-items-center   gap-10  m-auto'>
            <div className='col-span-4 m-auto'>
                <div className='text-[60px]'>
                  Get In Touch
                    <span className='flex place-items-center'>
                      <span className='px-8'>
                      <svg width="206" height="2" viewBox="0 0 206 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0 1L206 1.00002" stroke="#E8C183" stroke-width="2"/>
                    </svg></span>  With Us</span>
                </div>

            </div>
            <div className='col-span-3 ms-auto'>        
                <Form/>
            </div>
        </div>
        <div className='separator py-[50] text-center'>
        <Image src={'assets/images/footer_separator.svg'} alt="separator" className='m-auto' width={'800'} height={'1000'}/>
        </div>  
        <div className='text-center pb-[20px]'>
          <h6>Rera no.  RC/REP/HARERA/GGM/925/657/2025/28</h6>
            <h6 className='my-5'>Website of RERA Authority:https://haryanarera.gov.in</h6>
               <p><span className='font-[400]'>Disclaimer:</span> This advertisement does not constitute an offer and/or acceptance and/or transaction and/or a disclosure under any statute of any nature whatsoever. All sales in this project shall be solely governed by terms of the agreement for sale entered into between the parties. Interested party are requested to inspect the project site and get all details and not to merely rely upon any architectural impression, plan or specification before taking decision in relation to the Project.</p>
          <a href="#" className='tracking-[2px] font-[montserrat] bg-[#181615] py-3 px-4  inline-block my-4'>Read More</a>
        <p className='text-center font-[400]'>© Copyright 2025 - Trump Tower Gurugram | Design by GTF Technologies</p>
        </div>
      </div>

    </section>
  )
}
