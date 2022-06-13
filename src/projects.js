import React from 'react'
import underC from './assets/underc.png'
export default function Projects() {
    return (
        <div className='md:w-full  mx-auto bg-slate-200 w-full rounded-2xl pb-10 mb-8 md:mb-8'>
            <div className='w-full p-auto justify-center'>
                <img src={underC} className='w-[400px] h-[400px] mx-auto' alt='Page under construction' />
            </div>
            <h1 className='text-2xl font-bold text-center'>I'm sorry you had to see this.</h1>
            <h1 className='text-[15px] text-center px-4 '>This page is undergoing a rebuilding, I promise it won't take long. please check again after 20th of June.</h1>
            
      </div>
    
  )
}
