
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom'

import React from 'react'

const ImageSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <>
            <div className="tag">
                <h1 className="font-bold text-center my-6">Tools Used: Figma + Adobe Photoshop</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id} className='bg-slate-300 h-full w-[full]'>
                            <Zoom> <img src={item.src} alt={item.alt} className='w-full' /></Zoom>
                        </div>
                        
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;

