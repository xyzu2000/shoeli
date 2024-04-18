import React from 'react'
import { reviews } from '../../constants/index'
import Review from '../components/Review'
const CustomerReviews = () => {
    return (
        <section className='max-container'>
            <div className='flex flex-col justify-center text-center'>
                <h1 className='font-palanquin text-3xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:whitespace-nowrap relative z-10 pr-10'>
                        What Our <span className='text-coral-red inline-block mt-3'> Customers</span> Say?
                    </span>
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repellendus quis doloremque corporis ullam temporibus, ab pariatur, tempora id perspiciatis aliquid molestias enim deserunt libero! Fuga illum sequi a quia!
                </p>
                <hr className='bg-red-400 size-1 w-full hidden max-md:block mt-10' />

                <div className='grid grid-cols-2 max-md:grid-cols-1'>
                    {reviews.map((review) => (
                        <Review key={review.customerName} {...review} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews