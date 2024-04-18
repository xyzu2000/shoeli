import React from 'react'
import { star } from "../../../assets/icons"
const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-col flex-1 w-full max-sm:w-full'>
            <img src={imgURL} className='w-[280px] h-[280px]' />
            <div className='whitespace-nowrap flex justify-start gap-2'>
                <img src={star} /> (5.0)
            </div>
            <p className='text-[0.8rem] font-bold whitespace-nowrap '>{name}</p>
            <p className='text-coral-red font-semibold font-montserrat leading-normal'>{price}</p>
        </div>
    )
}

export default PopularProductCard