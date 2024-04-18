import React from 'react'
import { products } from '../../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
    return (
        <section id='products' className='max-container max-sm:mt-12'>

            <div className='flex flex-col justify-start gap-5'>
                <h1 className='text-3xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h1>
                <p className='text-slate-gray font-montserrat lg:max-w-lg:'>Experience top-notch quality and style with our sought after selections. Discover a world of comfort, design and value</p>
            </div>

            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16 '>
                {products.map((item) => (
                    <PopularProductCard key={item.name} {...item} />
                ))}
            </div>
        </section>
    )
}

export default PopularProducts