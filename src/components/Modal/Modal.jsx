import React from 'react'
import Image from 'next/image';
import closeIcon from "@public/assets/svg/icon__close.svg";

function ModalContent({ route }) {
  return (
    <div className='modal-content flex flex-col flex-grow'>
        <span onClick={() => route.back()} className='self-end cursor-pointer'>
            <Image src={closeIcon} width={20} alt='Close icon'/>
        </span>
        <form className='flex flex-col gap-5 flex-grow'>
        <p className='text-xl font-bold uppercase'>Formulaz kontaktowy</p>
        <div className='flex flex-col gap-5 '>

            <div className='border-b-2'>
            <label htmlFor="name" className='uppercase'>
                Imię
            </label>
            <input type="text" id='name' name='name' placeholder='Imię' required className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
            </div>

            <div className='border-b-2'>
            <label htmlFor="phone" className='uppercase'>
                Telefon do kontaktu
            </label>
            <input type="phone" id='phone' name='phone' placeholder='Numer telefonu' required className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
            </div>
            
            <div className='border-b-2'>
            <p className='uppercase'>Wybierz usługę która Cię interesuje </p>
            <select name="services" id="services" required className='w-full px-3 py-2 rounded-md focus:border-green focus:outline-slideCopyColor'>
                <option disabled="disabled" selected="selected" className='text-gray-50 text-xs'>Wybierz usługę</option>
                <option value="brows-style">Stylizacja brwi</option>
                <option value="brows-lamination">Laminacja brwi</option>
                <option value="eyebrow-lamination">Laminacja rzęs</option>
                <option value="brows-pmu">Brwi permanentne</option>
                <option value="lips-pmu">Usta permanentne</option>
                <option value="lips-pmu">Szkolenie z laminacji brwi</option>
                <option value="lips-pmu">Szkolenie z laminacji rzęs</option>
                <option value="lips-pmu">Szkolenie Architetuta brwi</option>
                <option value="lips-pmu">Consultacja z usługi albo kursu</option>
            </select>
            </div>

            <div className='flex flex-col'>
            <label for="comments" className='uppercase'>Zostaw comentarz</label>
            <textarea name="comments" id="comments" placeholder='Zostaw comentarz' rows="3" className='resize-none rounded-md p-3 border focus:border-green focus:outline-slideCopyColor placeholder:text-xs'></textarea>
            </div>
        </div>
        <button type='submit' className='bg-black text-white px-14 py-2 w-full rounded-lg ml-auto mt-auto'>Wyśli</button>
        </form>
    </div>
  )
}

export default ModalContent