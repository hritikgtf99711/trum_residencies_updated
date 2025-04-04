import React from 'react'
import Image from 'next/image'
export default function Sidemenu({openmenuVia,setOpenMenuVia}) {
    console.log(openmenuVia)
  return (
    <div className={`fixed lg:hidden block h-[100vh] w-[100%] bg-[#000]  z-[999] top-[0]  overflow-y-scroll transition delay-150 ${openmenuVia?  'translate-x-[0%]':'translate-x-[100%]'}`}>
         <div className=' relative z-[1] flex place-content-between items-center px-5 py-10'>
            <figure>
            <Image src='/assets/images/logo.png' alt='logo' className='lg:w-[auto] w-[100px]' width={120} height={'200'}/>
            </figure>
            <div className=''>
            <Image src="/assets/images/cross_img.svg" onClick={()=>setOpenMenuVia(false)}  alt="cross" width={'20'} height={'20'}/> 
            </div>
        </div>
       
        <Image className='absolute left-0 top-0' src={"/assets/images/menu_blob.svg"} alt="menu blob"  height={'2'} width={'400'}/>
        <ul className='w-[60%] m-auto relative z-[1]'>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>home</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>about project</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>location map</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>about us</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>stunning interiors</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>amenities</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>about developer</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
                <li className='text-center'>
                    <a href="" className='text-primary-color tracking-[normal] text-[20px] font-[500]'>contact us</a>
                </li>
                <Image className='py-2 mb-4' src={"/assets/images/separator_line.svg"} alt="separate line" height={'2'} width={'400'}/>
            </ul>
            <Image className='absolute right-[0] rotate-180 bottom-[-138px]' src={"/assets/images/menu_blob.svg"} alt="menu blob"  height={'2'} width={'400'}/>

            <h6  className='text-primary-color z-[1] relative tracking-[normal] font-[500] text-center pt-[100px]'>Rera no. RC/REP/HARERA/GGM/925/657/2025/28</h6>
    </div>
  )
}
