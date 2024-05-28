"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const Dialog = ({onClose}) => {
  return (
    <div>
        <div>Dialog</div>
        {/* <button onClick={() => onClose}>CLOSE</button> */}
        <button onClick={onClose}>CLOSE</button>
    </div>
  )
}
