import React from 'react'
import { arrowRight } from '../../../assets/icons'
import { offer } from '../../../assets/images'
import Button from '../components/Button'

const SpecialOfferts = () => {
    return (
        <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1' >
                <img src={offer} />
            </div>
            <div className='flex-1 mt-3 font-semibold text-3xl font-montserrat lg:max-w-lg'>
                <span className='text-coral-red inline-block '>Special</span> Offer
                <p className='font-montserrat text-slate-gray text-lg leading-5 mt-6 mb-14'>
                    Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life. Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life.<br /><br />
                    Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life.
                </p>
                <div className='flex gap-5'>
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button label='Learn more' colorBg="white" borderColor={"border-slate-gray"} colorText={'text-slate-gray'} />
                </div>
            </div>
        </section>
    )
}

export default SpecialOfferts