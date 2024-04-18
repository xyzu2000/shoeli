import React from 'react'
import { star } from "../../../assets/icons"

const Review = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <img src={imgURL} className='w-[80px] h-[80px] rounded-full mt-10' />
            <p className='font-montserrat text-lg text-slate-gray leading-8 max-sm:leading-7'>{feedback}</p>
            <div className='flex gap-3 font-semibold'>
                <img src={star} width={24} height={24} /> {rating}
            </div>
            <p className='text-xl font-bold whitespace-nowrap '>{customerName}</p>
            <hr className='bg-red-400 size-1 w-full hidden max-md:block ' />
        </div>
    )
}

export default Review