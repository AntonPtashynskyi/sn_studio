"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addEntry } from '@/app/actions';

import closeIcon from "@public/assets/svg/icon__close.svg";
import { useTranslation } from '@/app/i18n/client';

function ModalContent({ lang, showCloseButton = true }) {
    const { register, handleSubmit, watch, reset, formState: { errors, isValid }, formState: { isSubmitting }  } = useForm({mode: 'onChange'});
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showFull, setShowFull] = useState(false);
    const { t } = useTranslation(lang, "form");

    const route = useRouter();

    const onSubmit = async (data) => {
        const response = await addEntry(data);
        if(response.success) {
            reset();
            setIsSuccess(true);
            setTimeout(()=> {
                setIsSuccess(false);
                showCloseButton && route.back();
            }, 4000)
        } else {
            setIsError(true)
            setTimeout(() => setIsError(false), 3000)
        }
    }

    const fullRodoText = `RODO: ${t("I consent to the processing of my personal data provided in this form for the purpose of contact regarding consultations or booking an appointment by Inna Snisar. The data controller is Inna Snisar, based in Wrocław. Data will be processed in accordance with GDPR regulations.")}`

    const rodoText = showFull ? fullRodoText : fullRodoText.slice(0, 40);
    

    return (
        <div className='modal-content flex flex-col flex-grow h-[95%]'>
            {isSuccess && 
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 bg-green-600 rounded-lg shadow-lg'>
                    <p className='text-white text-center'>{t("Thank you!")}</p>
                    <p className='text-white text-center'>{t("Your message has been sent")}</p>
                </div>
            }
            {isError && 
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2  bg-red-500 rounded-lg shadow-lg'>
                    <p className='text-white text-center'>{t("Oops! Something went wrong")}</p>
                </div>
            }
            { showCloseButton && 
                <span onClick={() => route.back()} className='self-end cursor-pointer'>
                    <Image src={closeIcon} width={20} alt={t("Form close icon")}/>
                </span>
            }
            <form className='flex flex-col gap-5 flex-grow h-[95%]' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-xl font-bold uppercase'>{t("Contact form")}</p>
            <div className='flex flex-col gap-5 overflow-y-auto'>

                <div className='border-b-2'>
                    <label htmlFor="name" className='uppercase flex items-center gap-4'>
                        <p>{t("Name")}</p>
                        {errors.name?.message && ( <p className='text-xs text-red-500'>{errors.name.message}</p>)}
                    </label>
                    <input type="text" id='name' name='name' placeholder={t("Name")} 
                        {...register('name', {required: t("This field is required"), minLength: {value: 3, message: t("Minimum number of characters is 3")}})}
                        className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
                </div>

                <div className='border-b-2'>
                <label htmlFor="phone" className='uppercase flex items-center gap-4'>
                    <p>{t("Contact phone")}</p>
                    {errors.phone?.message && ( <p className='text-xs text-red-500'>{errors.phone.message}</p>)}
                </label>
                <input type="number" id='phone' name='phone' placeholder={t("Phone number")}
                    {...register('phone', {required: t("This field is required"), 
                    pattern: {
                        value: /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                        message: t("Please enter a valid number")
                    },
                    minLength: {value: 8, message: t("Minimum number of characters is 8")}, 
                    maxLength: {value: 14, message: t("Maximum length is 14 characters")}
                    })}
                    className='w-full p-2 rounded-md focus:border-green focus:outline-slideCopyColor placeholder:text-xs'/>
                </div>
                
                <div className='border-b-2'>
                    <p className='uppercase'>{t("Choose the topic that interests you")}</p>
                    {errors.services?.message && ( <p className='text-xs text-red-500'>{errors.services.message}</p>)}
                    <select name="services" id="services" required 
                        {...register('services', {required: t("This field is required")})}
                        className='w-full px-3 py-2 rounded-md focus:border-green focus:outline-slideCopyColor'>
                        <option value="service-contact">{t("Booking an appointment for a service")}</option>
                        <option value="training-contact">{t("Signing up for training")}</option>
                        <option value="consulting-contact">{t("Consultation on training or service")}</option>
                    </select>
                </div>

                <div>
                    <fieldset>
                        <legend className='uppercase'>{t("Preferred form of contact:")}</legend>

                        <div className='flex gap-4'>
                            <div>
                                <input 
                                    {...register("contact")}
                                    type="radio" id="phone-contact" name="contact" value="call" defaultChecked className='mr-2'/>
                                <label htmlFor="phone-contact">{t("Phone")}</label>
                            </div>

                            <div>
                                <input 
                                    {...register("contact")}
                                    type="radio" id="sms-contact" name="contact" value="sms" className='mr-2'/>
                                <label htmlFor="sms-contact">{t("SMS message")}</label>
                            </div>
                        </div>

                    </fieldset>
                </div>

                <div className='flex flex-col'>
                <label htmlFor="comments" className='uppercase'>{t("Leave a comment")}</label>
                <textarea name="comments" id="comments" placeholder={t("Leave a comment")} rows="2" 
                    {...register('comments')}
                    className='resize-none rounded-md p-3 border focus:border-green focus:outline-slideCopyColor placeholder:text-xs'></textarea>
                </div>
                <p className='text-xs text-gray-600'>* {t("Hey, the form is not a confirmation of booking an appointment. To book, I will call/text you back as soon as possible!")}</p>
            </div>
            <div>
                    <div className='flex gap-3'>
                        <input
                            {...register("rodo", {
                                required: t("This field is required")
                            })}
                            className="self-start mt-1 cursor-pointer" type="checkbox" id="rodo" name='rodo'/>
                        <label htmlFor='rodo' className='text-sm text-gray-600 cursor-pointer'>
                            
                            <p className='text-sm text-gray-600 cursor-pointer'>{rodoText} <span className='underline' onClick={() => setShowFull(prev => !prev)}>{showFull ? t("Show less") : t("Show more")}</span></p>
                        </label>
                    </div> 
                    
                </div>
            <button type='submit' disabled={!isValid || isSubmitting } className='bg-black text-white px-14 py-2 w-full rounded-lg ml-auto mt-auto disabled:bg-gray-500 disabled:cursor-not-allowed'>
                {isSubmitting ? <p>{t("Loading...")}</p> : <p>{t("Send")}</p>}
            </button>
            </form>
        </div>
    )
}

export default ModalContent