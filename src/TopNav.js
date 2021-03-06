import React, { useState } from 'react'

import { MenuIcon, XIcon, ArrowCircleDownIcon} from '@heroicons/react/solid'
import logo from './assets/logonew.png'
import { Link } from 'react-router-dom'
import cv from './assets/myCV.pdf'



export default function TopNav() {
  const [nav, SetNav] = useState(false)
  const handleClick = () => SetNav(!nav)
  return (
    <div className='w-full h-[150px] z-10 bg-transparent'>
      <div className="px-4 flex justify-between items-center h-full w-full ">
        <div className='items-center flex nav1'>    
          <a href="/"><img src={logo} alt='logo' className=' h-[80px]' /> </a>
          
         
     
      </div>
          <div className='hidden md:flex pr-4'>
             <ul className='hidden md:flex text-slate-400 font-bold mr-10'>
            <Link to="/" className='navA'><li>Home</li></Link>
            <Link to="/aboutme" className='navA'><li>About Me</li></Link>
            <Link to="/designs" className='navA'><li>My Designs</li></Link>
            <Link to="/projects" className='navA'><li>My Projects</li></Link>
            

          </ul>
          
          <div className='flex items-start py-2 px-4'><a href={cv} className="text-slate-500" download>Download CV </a><ArrowCircleDownIcon className='w-5 h-6 font-bold text-slate-500 ' />
          </div>
            <Link to="/message"> <button className='px-4 py-2 text-sm'>Hire Me</button></Link>
          </div>
          <div className='md:hidden'  onClick={handleClick}>
          {!nav ? <MenuIcon className='w-7 stroke-slate-600' /> : <XIcon className='w-7 stroke-slate-600'/>}
          </div>
        </div> 
        {/* Mobile menu items   */}
      <ul className={!nav ? 'hidden' : 'absolute z-30 bg-gray-900 w-full rounded-xl px-8  text-white md:hidden ' }>
        <Link to="/"><li className='border-b-2 border-zinc-400 w-full'>Home</li></Link>
        <Link to="/aboutme"><li className='border-b-2 border-zinc-400 w-full'>About Me</li></Link>
        <Link to="/designs"><li className='border-b-2 border-zinc-400 w-full'>My Designs</li></Link>
         
           <Link to="/projects"><li className='border-b-2 border-zinc-400 w-full'>My Projects</li></Link> 
        <div className='flex items-start py-2 px-2'><a href={cv} className="text-slate-200" download>Download CV </a><ArrowCircleDownIcon className='w-5 h-6 font-bold text-slate-200 ' />
        </div>
            <div className='flex flex-col mb-4'>
          
          <Link to="/message"> <button className='px-8 py-3'>Hire Me</button></Link>
         
              </div>
        </ul>
        <div>
          
        </div>
        </div>
    
  


  

  )
}
