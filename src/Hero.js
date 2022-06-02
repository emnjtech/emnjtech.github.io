import design from './assets/design.png'



export default function Hero() {

    return (
      <div>
        <div className="w-full h-full md:flex  justify-between"   >
          <div className='md:items-start px-4 w-full md:w-[35%]  mr-auto'>
            
            <div className="grad"><p className='text-[12px]  text-slate-500 md:text-[18px]  pl-4 border-l-2 border-slate-400'>
             Hi, I'm Ekelemchukwu Martinz Nnaji Jr, </p></div>
               <div className="grad2"><p className="text-[12px]  text-slate-500 md:text-[18px]  pl-4 border-l-2 border-slate-400">I Ideate, design and develop
           modern web platforms using Figma,Tailwind CSS,JavaScript,React Js, Next Js, Firebase and Bootstrap.</p></div>

           
          <div className="grad4"><p className="text-[12px]  text-slate-500 md:text-[18px]  pl-4 border-l-2 border-slate-400">Also, I am a Pro Graphics designer with Photoshop
           and Pro Video Editor with Adobe Premiere Pro, bringing 10+ years experience on all ends. </p></div> 
           <hr/>
            
           

          </div>
          <div className='px-4 w-full md:w-[35%] ml-auto md:mt-0 mt-8'>
         <img src={design} alt='designs' className='w-full grad8'/>
            </div>
        
     

         </div>
          </div>
  
            
  )
}
