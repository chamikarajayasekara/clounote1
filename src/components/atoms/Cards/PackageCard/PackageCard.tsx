import React from 'react';
import Slider from "react-slick";
import VideoButtonContent from "../../../molecules/Contents/HomePageSubContents/SliderContents/VideoButtonContent";
import MainHeroContent from "../../../molecules/Contents/HomePageSubContents/SliderContents/MainHeroContent";
import DescriptionHeroSlider
    from "../../../molecules/Contents/HomePageSubContents/SliderContents/DescriptionHeroSlider";
import BookNowSection from "../../../molecules/ButtonsMenu/BookNowSection";
import SliderButton from "../../Buttons/RoundedButtons/SliderButton/SliderButton";
import prev from "../../../../assets/arrowLeft.png";
import next from "../../../../assets/arrowRight.png";
import hero1 from "../../../../assets/heros1.jpg";
import hero2 from "../../../../assets/heros2.jpg";
import hero3 from "../../../../assets/heros3.jpg";

const PackageCard = ({images}:{images:string[]}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="package-card" >
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

export default PackageCard;