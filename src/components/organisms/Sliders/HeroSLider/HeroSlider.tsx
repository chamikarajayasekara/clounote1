import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prev from "../../../../assets/arrowLeft.png"
import next from "../../../../assets/arrowRight.png"
import vw from "../../../../assets/wv.png"


import SliderButton from "../../../atoms/Buttons/RoundedButtons/SliderButton/SliderButton";
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import SocialMediaMenu from "../../../molecules/SocialMediaMenu/SocialMediaMenu";
import BookNowSection from "../../../molecules/ButtonsMenu/BookNowSection";
import DescriptionHeroSlider from "../../../molecules/Contents/HomePageSubContents/SliderContents/DescriptionHeroSlider";
import MainHeroContent from "../../../molecules/Contents/HomePageSubContents/SliderContents/MainHeroContent";
import VideoButtonContent from "../../../molecules/Contents/HomePageSubContents/SliderContents/VideoButtonContent";

interface CarouselProps {
    images: string[];
}

const CarouselHeroSlider: React.FC<CarouselProps> = ({ images }) => {
    const sliderRef = useRef<Slider | null>(null);
    const settings: any = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToPrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }

    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    return (
        <div className="carousel-container" >
            <Slider {...settings} ref={sliderRef}>
                {images.map((image, index) => (
                    <div
                        className="carousel-slide"

                        key={index}
                    >
                        <img src={image} alt=""
                             className="carousal-img"
                             style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}/>
                        <div className="overlay-bg">
                            <div className="inside-content">
                                <div className="mid-content">
                                    <VideoButtonContent/>
                                    <MainHeroContent index={index}/>
                                    <DescriptionHeroSlider/>
                                    <BookNowSection/>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="carousel-controls">
                <div className="buttons">
                    <SliderButton name={'previous'} icon={prev} width={70} height={70} onClick={goToPrevSlide}/>
                    <SliderButton name={'previous'} icon={next} width={70} height={70} onClick={goToNextSlide}/>
                </div>
            </div>
        </div>
    );
};

export default CarouselHeroSlider;