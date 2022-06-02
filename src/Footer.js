import React from 'react'
import { FaCopyright } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='bg-slate-200 shadow-2xl w-full h-[100px]'>
        <div className='md:w-[1240px] mt-8 mx-auto md:h-full h-full  w-full '>
            <div className='w-full flex justify-items-start h-full my-auto'>
                <FaCopyright className='md:text-[30px] text-[20px] my-auto' />
            <h1 className='md:text-[15px] md:p-1 p-1 text-[10px] my-auto'>2022. Ekelemchukwu Martinz Nnaji Jr.</h1>
        </div>
            </div>
        </div>

    )
}
