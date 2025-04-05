'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function Sidemenu({ openmenuVia, setOpenMenuVia }) {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    // Wait until the component has mounted and DOM is available
    setPortalElement(document.getElementById('sidemenu-portal'));
  }, []);

  if (!portalElement) return null;

  return createPortal(
    <div
      className={`fixed lg:hidden block h-[100vh] w-[100%] bg-[#000] z-[999] top-0 overflow-y-scroll transition duration-300 ease-in-out ${
        openmenuVia ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative z-[1] flex place-content-between items-center px-5 py-10">
        <figure>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            className="lg:w-[auto] w-[100px]"
            width={120}
            height={200}
          />
        </figure>
        <div>
          <Image
            src="/assets/images/cross_img.svg"
            onClick={() => setOpenMenuVia(false)}
            alt="cross"
            width={20}
            height={20}
          />
        </div>
      </div>

      <Image
        className="absolute left-0 top-0"
        src="/assets/images/menu_blob.svg"
        alt="menu blob"
        height={2}
        width={400}
      />

      <ul className="w-[60%] m-auto relative z-[1]">
        {[
          'home',
          'about project',
          'location map',
          'about us',
          'stunning interiors',
          'amenities',
          'about developer',
          'contact us',
        ].map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-center">
              <a
                href="#"
                className="text-primary-color tracking-[normal] text-[20px] font-[500]"
              >
                {item}
              </a>
            </li>
            <Image
              className="py-2 mb-4"
              src="/assets/images/separator_line.svg"
              alt="separator"
              height={2}
              width={400}
            />
          </React.Fragment>
        ))}
      </ul>

      <Image
        className="absolute right-0 rotate-180 bottom-[-138px]"
        src="/assets/images/menu_blob.svg"
        alt="menu blob"
        height={2}
        width={400}
      />

      <h6 className="text-primary-color z-[1] relative tracking-[normal] font-[500] text-center pt-[100px] p-[2px]">
        Rera no. RC/REP/HARERA/GGM/925/657/2025/28
      </h6>
    </div>,
    portalElement
  );
}
