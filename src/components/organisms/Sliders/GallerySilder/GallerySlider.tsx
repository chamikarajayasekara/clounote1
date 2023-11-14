import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftIOS from "../../../../assets/backpage.png"
import rightIOS from "../../../../assets/nextpage.png"
import {ImageArray} from "../../../../utils/json/ToursPageDataset/ToursPageData";

const GallerySlider = ({selectedImageIndex, images, handleImageClick}: {selectedImageIndex:number, images: ImageArray, handleImageClick: (index:number)=> void}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedImageIndex
    }
    const sliderRef =  useRef<Slider | null>(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    return (
        <div className="gallery-slider">
            <Slider {...settings}  ref={sliderRef}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img loading="lazy" className="gallery-slider-img" src={image} alt={`Image ${index + 1}`} width={500} height={300} />
                    </div>
                ))}
            </Slider>
            <img src={leftIOS} width={35} height={35} alt="" onClick={prevSlide} className="left-btn"/>
            <img src={rightIOS} width={35} height={35} alt="" onClick={nextSlide} className="right-btn"/>
        </div>

    );
};

export default GallerySlider;