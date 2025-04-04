import React from 'react'

export default function Bordered_button({link,children,classNames}) {
  return (
        <a href={link} className={`border-y-2 border-primary-color px-6 py-3 call_now_btn tracking-[2px] inline-flex text-[#C7C7C7] ${classNames}`}>
            {children}
        </a>
  )
}
