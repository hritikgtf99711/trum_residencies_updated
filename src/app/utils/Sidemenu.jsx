'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Sidemenu({ openmenuVia, setOpenMenuVia }) {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    setPortalElement(document.getElementById('sidemenu-portal'));
  }, []);

  // Function to handle smooth scrolling with GSAP and close menu
  const handleMenuClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setOpenMenuVia(false);
      
      // Use GSAP to scroll smoothly
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: `#${sectionId}`,
          offsetY: 50 // Offset to account for any fixed headers
        },
        ease: "power3.inOut" // You can change the easing function as needed
      });
    }
  };

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!portalElement) return null;

  return createPortal(
    <div
      className={`fixed lg:hidden block h-[100vh] w-[100%] bg-[#000] z-[999] top-0 overflow-y-scroll transition duration-300 ease-in-out ${
        openmenuVia ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative z-[1] flex place-content-between items-center px-5 py-10">
        <figure>
          <img
            src={basePath + "/logo.png"}
            alt="logo"
            className="lg:w-[auto] w-[100px]"
            width={120}
            height={200}
          />
        </figure>
        <div>
          <img
            src={basePath + "/cross_img.svg"}
            onClick={() => setOpenMenuVia(false)}
            alt="cross"
            width={20}
            height={20}
          />
        </div>
      </div>

      <img
        className="absolute left-0 top-0"
        src={basePath + "/menu_blob.svg"}
        alt="menu blob"
        height={2}
        width={400}
      />

      <ul className="w-[60%] m-auto relative z-[1]">
        {[
          { name: 'home', id: 'home' },
          { name: 'about project', id: 'about-project' },
          { name: 'location map', id: 'location-map' },
          { name: 'about us', id: 'about-us' },
          { name: 'stunning interiors', id: 'stunning-interiors' },
          { name: 'amenities', id: 'amenities' },
          { name: 'about developer', id: 'about-developer' },
          { name: 'contact us', id: 'contact-us' },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-center">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.id);
                }}
                className="text-primary-color tracking-[normal] text-[20px] font-[500]"
              >
                {item.name}
              </a>
            </li>
            <img
              className="py-2 mb-4 mx-auto"
              src={basePath + "/separator_line.svg"}
              alt="separator"
              height={2}
              width={400}
            />
          </React.Fragment>
        ))}
      </ul>

      <img
        className="absolute right-0 rotate-180 bottom-[-138px]"
        src={basePath + "/menu_blob.svg"}
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