"use client"
import React from 'react';
import Image from 'next/image';
import Bordered_button from '../utils/Bordered_button';
import Sidemenu from '../utils/Sidemenu';
import { useState } from 'react';
export default function Header() {
  const [openmenuVia,setOpenMenuVia]=useState(false);
  return (
    <header className="py-10 relative z-[10]">
        <div className='custom_container flex place-content-between items-center'>
        <figure>
            <Image src='/assets/images/logo.png' alt='logo' className='lg:w-[auto] w-[100px]' width={'120'} height={'200'}/>
        </figure>
        <Bordered_button classNames="lg:flex hidden">
           <Image src="/assets/images/icon_phone.svg" className='me-4' alt="phone" width={'18'} height={'18'}/>     Call Now
        </Bordered_button>

        <div className='header_content lg:hidden  flex gap-[10px]'>
        <Image src="/assets/images/mobile_img.svg" className='me-4' alt="phone" width={'32'} height={'32'}/> 
        <Image src="/assets/images/hamburger_menu.svg" onClick={()=>{
          console.log("on")
          setOpenMenuVia(true)
        }} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        </div>
        </div>
        <Sidemenu openmenuVia={openmenuVia} setOpenMenuVia={setOpenMenuVia} />
    </header>
  )
}
