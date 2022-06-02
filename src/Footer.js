import React from 'react'
import { FaCopyright } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='bg-white shadow-2xl w-full'>
        <div className='md:w-[1240px] mt-8 mx-auto  w-full '>
            <div className='w-full flex justify-items-start'>
                <FaCopyright className='md:text-[40px] text-[20px]' />
            <h1 className='md:text-[20px] md:p-2 p-1 text-[10px]'>2022. Ekelemchukwu Martinz Nnaji Jr.</h1>
        </div>
            </div>
        </div>

    )
}
