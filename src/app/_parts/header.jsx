import React from 'react';
import Image from 'next/image';
import Bordered_button from '../utils/Bordered_button';
export default function Header() {
  return (
    <header className="py-10">
        <div className='custom_container flex place-content-between items-center'>
        <figure>
            <Image src='/assets/images/logo.png' alt='logo' width={'100'} height={'150'}/>
        </figure>
        <Bordered_button>
           <Image src="/assets/images/icon_phone.svg" className='me-4' alt="phone" width={'18'} height={'18'}/>     Call Now
        </Bordered_button>
        </div>
    </header>
  )
}
