import React from 'react'


export default function Form() {
  return (
        <form className='border-2 border-primary-color rounded-md px-[30px] py-8'>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[14px] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='NAME'/>
            </div>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[14px] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='EMAIL ID'/>
            </div>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[14px] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='CONTACT NO.'/>
            </div>
            <div className='mb-5'>
                <textarea  cols="1" rows={'1'} className='placeholder:font-[montserrat] font-[montserrat] text-[14px] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' placeholder='MESSAGE'>
                </textarea>
            </div>
            <div class="inline-flex items-start">
                <label class="flex items-start cursor-pointer relative gap-3">
                    <div className='relative mt-2'>
                    <input type="checkbox"  class="peer h-5 w-5 cursor-pointer transition-all appearance-none  shadow hover:shadow-md border  border-primary-color checked:primary-color checked:primary-color" id="check" />
                    <span class="absolute border-1  text-white opacity-0 peer-checked:opacity-100 top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="#E8C183" stroke="#E8C183" stroke-width="1">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    </span></div>
                    
                <p className='montserrat text-[10px] leading-[14px] font-[500]'>I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</p>
                </label>
                </div> 
            <div className='text-center'>
            <a href=""  className="comment-button mt-10 font-[montserrat] font-[500] px-[40px] text-[12px] inline-block tracking-[1px]">SUBMIT NOW</a>  
            </div>  
    </form>
  )
}
