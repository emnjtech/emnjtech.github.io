 import React from 'react'
import gent from './assets/gent.png'
 export default function GentPortfolio() {
   return (
       <div className='container mx-auto p-6 bg-slate-100 rounded-2xl'>
           <div className='md:grid justify-start gap-4 md:grid-cols-2 grid-cols-1 '>
               <div>
                   <img src={gent} alt="figma design"/>
               </div>
               <div>
                   <h1 className='text-2xl font-bold text-slate-500 text-center'>GENTLEMEN SHOE SHOP</h1>
                   <h1 className='text-xl font-bold text-slate-500 p-2' >Key features</h1>
                   <ul>
                       <h1 className='p-2'>Dynamic search bar.</h1>
                       <h1 className='p-2'>Image zoom functionality. </h1>
                       <h1 className='p-2'>A product can only be added once. Any attempt to add a product more than once causes
                           
                           the quantity of the product in cart to increase instead  (as on amazon). </h1>
                       <h1 className='p-2'>Responsive Design.</h1>
                       <h1 className='p-2'>Multi-dimension homepage, dynamically populated.</h1>

                       <h1 className='p-2'>UI Design with Figma and Adobe Photoshop.</h1>
                       <h1 className='p-2'>Built with React Js. Other tools: Tailwind CSS, Firebase, Context API, RESTful APIs .</h1>
                       <a href='https://www.figma.com/file/8TegIY1suweaaSFVOtYZ90/shoeshop?node-id=0%3A1'  target="_blank" rel="noreferrer"><h1 className='text-blue-500 p-2'> See UI on Figma</h1></a>
                       
                       

                   </ul>
                   <a href="http://shoeshop.emnj.tech/"><button className='text-xl font-bold text-slate-500 p-2' >Take a tour</button></a>
                   <div className='md:w-full  mx-auto bg-slate-500 w-full rounded-2xl pb-10 mb-8 md:mb-8 p-5 mt-4'>
                       
                       <h1 className='text-[15px] text-center px-4 text-white'>Note: This page is undergoing a rebuild. , I promise it won't take long. More projects will be added soon. Please check again soon </h1>

                   </div>
               </div>
           </div>
       </div>
   )
 }
 
