import React from 'react';
import Slider from "react-slick";

const PackageCardHotels  = ({images}:{images:string[]}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="package-card-hotels" >
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slider-item">
                        <img src={image} alt=""/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default PackageCardHotels;