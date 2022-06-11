import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";
import ImageSlider from "./ImageSlider";






export default function Designs() {
   

    return (
        <div className='container md:w-[80%] mx-auto shadow-2xl'>
            <ImageSlider images={images} />
            </div>
    );


    
}

