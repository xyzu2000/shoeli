import React from 'react'

const Service = ({ imgURL, label, subtext }) => {
    return (
        <div className='hover:scale-110 ease-in duration-75 sm:w-[350px] sm:m-w-[350px] w-full flex-1 border-2 shadow-3xl px-10 py-16 rounded-2xl'>
            <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
                <img src={imgURL} width={24} height={24} alt='?' />
            </div>
            <h2 className='font-bold font-montserrat mb-2 mt-3 leading-normal'>{label}</h2>
            <p className='text-slate-gray break-words font-montserrat text-md leading-normal'>{subtext}</p>
        </div>
    )
}

export default Service