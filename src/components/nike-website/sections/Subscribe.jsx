import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
    return (
        <section className='max-container flex flex-col justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
            <div className='flex flex-col'>
                <h1 className='font-palanquin text-3xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-center'>
                    <span className='xl:whitespace-nowrap relative z-10'>
                        Sign Up For <span className='text-coral-red inline-block mt-3'> Updates</span> & Newsletter
                    </span>
                </h1>
            </div>
            <div className='lg-max-w-[40%] w-full flex items-center gap-5 p-2 sm:border sm:border-slate-gray rounded-full'>
                <input type="text" placeholder='youmail@nike.com' className='px-2 w-full' />
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <Button label="Sign Up"></Button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe