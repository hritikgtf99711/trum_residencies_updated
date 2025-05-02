import React from 'react'

export default function Heading({heading,classNames}) {
  return (
    <h2  className={`${classNames}`}>{heading}</h2>
  )
}
