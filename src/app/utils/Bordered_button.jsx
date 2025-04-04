import React from 'react'

export default function Bordered_button({link,children}) {
  return (
        <a href={link} className="border-y-2 border-primary-color px-4 py-2 call_now_btn tracking-[2px] inline-flex text-[#C7C7C7]">
            {children}
        </a>
  )
}
