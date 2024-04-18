import React from 'react'
import { services } from '../../constants'
import Service from '../components/Service'
const Services = () => {
    return (
        <section>
            <div className='max-container flex justify-center flex-wrap gap-16 '>
                {services.map((item) => (
                    <Service key={item.imgURL} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Services