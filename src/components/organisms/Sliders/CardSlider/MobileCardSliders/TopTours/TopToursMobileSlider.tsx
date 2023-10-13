import React, {useState} from 'react';
import Card1 from "../../../../../atoms/Cards/Card1/Card1";
import Slider from "react-slick";
import {TopToursDataset} from "../../../../../../utils/helpers/ThingsToDoDataset";
import Card2 from "../../../../../atoms/Cards/Card2/Card2";

const TopToursMobileSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAfterChange = (currentIndex: number) => {
        setActiveIndex(currentIndex);
    }

    const renderSlide = (slide: any, index: number) => {
        const slideStyle: React.CSSProperties = {
            width: activeIndex === index ? (index % 2 === 0 ? "280px" : "280px") : "280px"
        };

        return (
            <div  key={index} className="card2" style={slideStyle}>
                <Card2 image={slide.image} content1={slide.content1} category={slide.category} location={slide.location} price={slide.price}/>
            </div>
        );
    }

    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: "0",
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="top-tours-mobile-slider">
            <Slider {...settings}>
                {TopToursDataset.map((item:any, index:number) => renderSlide(item, index))}
            </Slider>
        </div>
    );
};

export default TopToursMobileSlider;