"use client"
import React from 'react';
import Image from 'next/image';
import Bordered_button from '../utils/Bordered_button';
import Sidemenu from '../utils/Sidemenu';
import { useState } from 'react';
import { useModal } from '../hooks/modaContext';

export default function Header() {
  const [openmenuVia,setOpenMenuVia]=useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  
  return (
    <header className="py-10 relative z-[10]">
        <div className='custom_container flex place-content-between items-center'>
        <figure>
            <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/logo.webp'} alt='logo' className='w-[120]' width={'120'} height={'200'} />
        </figure>
        <Bordered_button classNames="lg:flex hidden">
           <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/icon_phone.svg"} className='me-4' alt="phone" width={'18'} height={'18'}/>     Call Now
        </Bordered_button>

        <div className='header_content lg:hidden  flex gap-[10px]'>
        <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/mobile_img.svg"}  onClick={() => openModal()} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/hamburger_menu.svg"} onClick={()=>{
          setOpenMenuVia(true)
        }} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        </div>
        </div>
        <Sidemenu openmenuVia={openmenuVia} setOpenMenuVia={setOpenMenuVia} />
    </header>
  )
}
