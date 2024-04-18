import React from 'react'
import { copyrightSign } from '../../../assets/icons'
import { footerLogo } from '../../../assets/images'
import { footerLinks, socialMedia } from '../../constants'

const Footer = () => {
    return (
        <footer className='max-container text-white-400'>
            <div className='flex justify-between items-start flex-wrap max-lg:flex-col gap-20'>
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img src={footerLogo} width={150} height={45} />
                    </a>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio eos optio eius perspiciatis labore esse quo exercitationem ad sequi voluptatibus excepturi voluptates eligendi eum omnis obcaecati doloremque, praesentium mollitia.
                    </p>
                    <div className='flex items-center gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            <div key={icon.src} className='bg-white-400 flex justify-center items-center w-12 h-12 rounded-full'>
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className='text-white-400 font-bold font-montserrat text-2xl leading-normal mb-6'>{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                                        <a href="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-white-400'>
                <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                    <img src={copyrightSign} alt='copy right sign' width={24} height={24} className='rounded-full m-0' />
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer
