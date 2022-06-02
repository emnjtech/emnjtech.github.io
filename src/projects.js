import React from 'react'
import underC from './assets/underc.svg'
export default function Projects() {
    return (
        <div className='md:w-[1240px] h-[700px] mx-auto bg-slate-200 w-full rounded-2xl'>
            <div className='w-full p-auto justify-center'>
                <img src={underC} className='w-[300px] h-[300px] mx-auto' alt='Page under construction' />
            </div>
            <h1 className='text-2xl font-bold text-center'>I'm sorry you had to see this.</h1>
            <h1 className='text-[20px] text-center'>This page is undergoing maintainance, I promise it won't take long. please check again soon.</h1>
            
      </div>
    
  )
}
