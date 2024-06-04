"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addEntry } from '@/app/actions';

import closeIcon from "@public/assets/svg/icon__close.svg";

function ModalContent() {
    const { register, handleSubmit, watch, reset, formState: { errors, isValid }, formState: { isSubmitting }  } = useForm({mode: 'onChange'});
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showFull, setShowFull] = useState(false);

    const route = useRouter();

    const onSubmit = async (data) => {
        const response = await addEntry(data);
        if(response.success) {
            reset();
            setIsSuccess(true);
            setTimeout(()=> {
                setIsSuccess(false);
                route.back();
            }, 4000)
        } else {
            setIsError(true)
            setTimeout(() => setIsError(false), 3000)
        }
    }

    const fullRodoText = "RODO: Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu kontaktu w ramach konsultacji lub umówienia wizyty przez Inna Snisar. Administratorem danych osobowych jest Inna Snisar, z siedzibą we Wrocławiu. Dane będą przetwarzane zgodnie z przepisami RODO. "

    const rodoText = showFull ? fullRodoText : fullRodoText.slice(0, 40);
    

    return (
        <div className='modal-content flex flex-col flex-grow h-[95%]'>
            {isSuccess && 
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 bg-green-600 rounded-lg shadow-lg'>
                    <p className='text-white text-center'>Dziękuję! </p>
                    <p className='text-white text-center'>Twoja wiadomość została wysłana</p>
                </div>
            }
            {isError && 
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2  bg-red-500 rounded-lg shadow-lg'>
                    <p className='text-white text-center'>Ups! Coś poszło nie tak</p>
                </div>
            }
            <span onClick={() => route.back()} className='self-end cursor-pointer'>
                <Image src={closeIcon} width={20} alt='Close icon'/>
            </span>
            <form className='flex flex-col gap-5 flex-grow h-[95%]' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-xl font-bold uppercase'>Formularz kontaktowy</p>
            <div className='flex flex-col gap-5 overflow-y-auto'>

                <div className='border-b-2'>
                    <label htmlFor="name" className='uppercase flex items-center gap-4'>
                        <p>Imię</p>
                        {errors.name?.message && ( <p className='text-xs text-red-500'>{errors.name.message}</p>)}
                    </label>
                    <input type="text" id='name' name='name' placeholder='Imię' 
                        {...register('name', {required: "Pole jest wymagane", minLength: {value: 3, message: "Minimalna ilość symboli to 3"}})}
                        className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
                </div>

                <div className='border-b-2'>
                <label htmlFor="phone" className='uppercase flex items-center gap-4'>
                    <p>Telefon do kontaktu</p>
                    {errors.phone?.message && ( <p className='text-xs text-red-500'>{errors.phone.message}</p>)}
                </label>
                <input type="number" id='phone' name='phone' placeholder='Numer telefonu' 
                    {...register('phone', {required: "Pole jest wymagane", 
                    pattern: {
                        value: /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                        message: "Proszę wprowadzić poprawny numer"
                    },
                    minLength: {value: 8, message: "Minimalna ilość symboli to 8"}, 
                    maxLength: {value: 14, message: "Maksymalna długość to 14 symboli"}
                    })}
                    className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
                </div>
                
                <div className='border-b-2'>
                    <p className='uppercase'>Wybierz temat który Ciębie interesuje</p>
                    {errors.services?.message && ( <p className='text-xs text-red-500'>{errors.services.message}</p>)}
                    <select name="services" id="services" required 
                        {...register('services', {required: "Pole jest wymagane"})}
                        className='w-full px-3 py-2 rounded-md focus:border-green focus:outline-slideCopyColor'>
                        <option value="none" disabled defaultValue className='text-gray-50 text-xs'>Wybierz usługę</option>
                        <option value="service-contact">Umówienie wizyty na usługę</option>
                        <option value="training-contact">Zapisanie się na szkolenie</option>
                        <option value="consulting-contact">Konsultacja ze szkolenia lub usługi</option>
                    </select>
                </div>

                <div>
                    <fieldset>
                        <legend className='uppercase'>Preferowana forma do kontaktu:</legend>

                        <div className='flex gap-4'>
                            <div>
                                <input 
                                    {...register("contact")}
                                    type="radio" id="phone-contact" name="contact" value="call" defaultChecked className='mr-2'/>
                                <label htmlFor="phone-contact">Telefon</label>
                            </div>

                            <div>
                                <input 
                                    {...register("contact")}
                                    type="radio" id="sms-contact" name="contact" value="sms" className='mr-2'/>
                                <label htmlFor="sms-contact">Wiadomość SMS</label>
                            </div>
                        </div>

                    </fieldset>
                </div>

                <div className='flex flex-col'>
                <label htmlFor="comments" className='uppercase'>Zostaw komentarz</label>
                <textarea name="comments" id="comments" placeholder='Zostaw comentarz' rows="2" 
                    {...register('comments')}
                    className='resize-none rounded-md p-3 border focus:border-green focus:outline-slideCopyColor placeholder:text-xs'></textarea>
                </div>
                <p className='text-xs text-gray-600'>* Hej, formularz nie jest podtwiedzeniem umówienie się na wizytę. W celu umówienia się, odzwonię/opdiszę do Ciebie w najblizszej mozliwej chiwli! </p>

                <div>
                    <div className='flex gap-3'>
                        <input
                            {...register("rodo", {
                                required: "Pole jest wymagane"
                            })}
                            className="self-start mt-1 cursor-pointer" type="checkbox" id="rodo" name='rodo'/>
                        <label htmlFor='rodo' className='text-sm text-gray-600 cursor-pointer'>
                            
                            <p className='text-sm text-gray-600 cursor-pointer'>{rodoText} <span className='underline' onClick={() => setShowFull(prev => !prev)}>{showFull ? "Pokaz mniej" : "... Pokaz więcej"}</span></p>
                        </label>
                    </div> 
                    
                </div>
            </div>
            <button type='submit' disabled={!isValid || isSubmitting } className='bg-black text-white px-14 py-2 w-full rounded-lg ml-auto mt-auto disabled:bg-gray-500 disabled:cursor-not-allowed'>
                {isSubmitting ? <p>Loading...</p> : <p>Wyśli</p>}
            </button>
            </form>
        </div>
    )
}

export default ModalContent