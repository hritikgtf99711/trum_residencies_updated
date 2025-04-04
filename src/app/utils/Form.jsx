import React from 'react'


export default function Form() {
  return (
        <form className='border-2 border-primary-color rounded-md px-[30px] py-8'>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[12px]  placeholder::tracking-[3] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='NAME'/>
            </div>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[12px]  placeholder::tracking-[3] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='EMAIL ID'/>
            </div>
            <div className='mb-5'>
                <input className='placeholder:font-[montserrat] font-[montserrat] text-[12px]  placeholder::tracking-[3] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' type='text' placeholder='CONTACT NO.'/>
            </div>
            <div className='mb-5'>
                <textarea  cols="1" rows={'1'} className='placeholder:font-[montserrat] font-[montserrat] text-[12px]  placeholder::tracking-[3] placeholder:text-primary-color border-b-[1px] border-primary-color tracking-normal bg-[#FFFFFF1A] px-4 py-[10px] w-full' placeholder='MESSAGE'>
                </textarea>
            </div>
            <div className="inline-flex items-start">
                <label className="flex items-start cursor-pointer relative gap-3">
                    <div className='relative'>
                    <input type="checkbox"  className="peer cursor-pointer transition-all accent-primary-color  mt-2   shadow hover:shadow-md border  border-primary-color checked:primary-color checked:primary-color" id="check" />
                </div>
                    
                <p className='montserrat text-[10px] font-[300] leading-[14px]'>I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</p>
                </label>
                </div> 
            <div className='text-center'>
            <a href=""  className="comment-button mt-10 font-[montserrat] font-[500] px-[40px] text-[12px] inline-block tracking-[1px]">SUBMIT NOW</a>  
            </div>  
    </form>
  )
}
