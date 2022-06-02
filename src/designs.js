import React from 'react';




export default function Designs() {
    return (

        <div className=" mx-auto  h-full w-[80%]">
           
            <div className="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                <div className="w-full rounded">
                    <img src="https://i.ibb.co/wrdfjTV/1.png" 
                        className='grad'
                        alt="uiuix design"/>
                </div>
                <div className="w-full col-span-2 row-span-2 rounded">
                    <img src="https://i.ibb.co/HHN5xQQ/U.jpg" 
                        className='rounded-2xl grad2'
                        alt="uiuix design"/>
                </div>
                <div className="w-full rounded">
                    <img src="https://i.ibb.co/r0W2Ftd/2.jpg"
                        className=' rounded-2xl grad3'
                        alt="uiuix design"/>
                </div>
                

                <div className="w-full rounded">
                    <img src="https://i.ibb.co/wNm2VJT/4.jpg"
                        className='grad'
                        alt="uiuix design" />
                </div>
                <div className="w-full col-span-2 row-span-2 rounded">
                    <img src="https://i.ibb.co/4ZyWrX1/3b.jpg"
                        className='rounded-2xl grad2'
                        alt="uiuix design" />
                </div>
                <div className="w-full rounded">
                    <img src="https://i.ibb.co/44QJPn9/6.jpg"
                        className=' rounded-2xl grad3'
                        alt="uiuix design" />
                </div>

                
            </div>
        </div>
    );
}

