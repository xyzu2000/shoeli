import React from 'react'
import { shoe8 } from '../../../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
    return (
        <section id='about-us' className='flex w-full justify-between items-center max-container max-lg:flex-col'>
            <div className='mb-10 felx flex-1 flex-col'>
                <h1 className='mb-5 text-3xl font-bold font-montserrat lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super Quality </span> Shoes</h1>
                <p className='text-slate-gray mb-10'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, delectus eum voluptate aperiam consequuntur quia, suscipit doloribus velit odio reiciendis voluptatum debitis quidem corporis perferendis officia excepturi soluta, numquam nihil.
                    <br /> <br />
                    Our dedication to detail and excellence ensures your setisfaction
                </p>
                <Button label="View details"></Button>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={shoe8} className='object-contain' />
            </div>
        </section>
    )
}

export default SuperQuality