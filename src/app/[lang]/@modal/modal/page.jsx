"use client"

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import ModalContent from '@/components/Modal/Modal';

export default function Modal () {
  const route = useRouter();

  const onClose = useCallback((e) => {
    const currentElement = e.target;

    if(currentElement.classList.contains("backdrop") || e.key === "Escape") {
      route.back()
    } 
    return;

  }, [route])

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener("keydown", onClose, false);
    return () => {
      document.removeEventListener("keydown", onClose, false);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);
    
  return(
    <div className='backdrop fixed inset-0 z-[50]' onClick={(e) => onClose(e)}>
      <div className="bg-gray-50 bg-opacity-40 pointer-events-none z-[51] absolute inset-0 backdrop-blur-[2px]"></div>
      <div className="modal w-[95%] md:max-w-xl h-[95%] md:h-auto overflow-y-scroll md:overflow-hidden  bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-[52] rounded-lg md:rounded-lg p-4 md:p-7 border border-black">
        <ModalContent route={route}/>
      </div>
    </div>
  )
}