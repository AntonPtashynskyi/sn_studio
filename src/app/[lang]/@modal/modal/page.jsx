import Link from 'next/link'
import React from 'react'

export default function Modal() {
    
  return (
    <div className='w-[40rem] h-[40rem] bg-slate-600 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-[999999]'>
        Modal
        <Link href="/">Go back</Link>
    </div>
  )
}

