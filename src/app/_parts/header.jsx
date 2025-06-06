"use client"
import React from 'react';
import Bordered_button from '../utils/Bordered_button';
import Sidemenu from '../utils/Sidemenu';
import { useState } from 'react';
import { useModal } from '../hooks/modaContext';
import Link from 'next/link';

export default function Header({logoRedirectVia}) {
  const [openmenuVia,setOpenMenuVia]=useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const redirectUrl = logoRedirectVia
  ? `/trumpresidenceslandingpage-gurgaon/${logoRedirectVia}`
  : "/trumpresidenceslandingpage-gurgaon/";
  return (
    <header className="lg:py-10 absolute top-[0] w-[100%] top-[0]  z-[10]">
        <div className='custom_container  flex place-content-between items-center'>
        <Link href={redirectUrl} className='opacity-[0]'>
        <figure>
            <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/logo.webp'} alt='logo' className='w-[120]' width={'120'} height={'200'} />
        </figure>
        </Link>
        {/* <Bordered_button classNames="lg:flex hidden">
           <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/icon_phone.svg"} className='me-4' alt="phone" width={'18'} height={'18'}/>     Call Now
        </Bordered_button> */}

        <div className='header_content lg:hidden  flex gap-[10px]'>
        {/* <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/mobile_img.svg"}  onClick={() => openModal()} className='me-4' alt="phone" width={'32'} height={'32'}/>  */}
        <img src={process.env.NEXT_PUBLIC_BASE_PATH+"/hamburger_menu.svg"} onClick={()=>{
          setOpenMenuVia(true)
        }} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        </div>
        </div>
        <Sidemenu openmenuVia={openmenuVia} setOpenMenuVia={setOpenMenuVia} />
    </header>
  )
}
