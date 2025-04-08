"use client"
import React from 'react';
import Image from 'next/image';
import Bordered_button from '../utils/Bordered_button';
import Sidemenu from '../utils/Sidemenu';
import { useState } from 'react';
import Form from '../utils/Form';
import Modal from '../utils/Modal';
export default function Header() {
  const [openmenuVia,setOpenMenuVia]=useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="py-10 relative z-[10]">
        <div className='custom_container flex place-content-between items-center'>
        <figure>
            <img src='/assets/images/logo.png' alt='logo' className='w-[120]' width={'120'} height={'200'} />
        </figure>
        <Bordered_button classNames="lg:flex hidden">
           <img src="/assets/images/icon_phone.svg" className='me-4' alt="phone" width={'18'} height={'18'}/>     Call Now
        </Bordered_button>

        <div className='header_content lg:hidden  flex gap-[10px]'>
        <img src="/assets/images/mobile_img.svg"  onClick={() => setIsOpen(true)} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        <img src="/assets/images/hamburger_menu.svg" onClick={()=>{
          console.log("on")
          setOpenMenuVia(true)
        }} className='me-4' alt="phone" width={'32'} height={'32'}/> 
        </div>
        </div>
        <Sidemenu openmenuVia={openmenuVia} setOpenMenuVia={setOpenMenuVia} />
           <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Form/>
                </Modal>
    </header>
  )
}
