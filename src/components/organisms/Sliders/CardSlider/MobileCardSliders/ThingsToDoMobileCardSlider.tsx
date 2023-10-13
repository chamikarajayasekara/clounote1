import React, {useState} from 'react';
import Slider from "react-slick";
import {ThingsToDoDataset} from "../../../../../utils/helpers/ThingsToDoDataset";
import Card1 from "../../../../atoms/Cards/Card1/Card1";

const ThingsToDoMobileCardSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAfterChange = (currentIndex: number) => {
        setActiveIndex(currentIndex);
    }

    const renderSlide = (slide: any, index: number) => {
        const slideStyle: React.CSSProperties = {
            width: activeIndex === index ? (index % 2 === 0 ? "225px" : "225px") : "225px"
        };

        return (
            <div key={index} className="card1" style={slideStyle}>
                <Card1 image={slide.image} content1={slide.content1} content2={slide.content2} />
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
        afterChange: handleAfterChange, // Use afterChange instead of beforeChange
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
        <div className="things-to-do-mobile-slider">
            <Slider {...settings}>
                {ThingsToDoDataset.map((item:any, index:number) => renderSlide(item, index))}
            </Slider>
        </div>
    );
};

export default ThingsToDoMobileCardSlider;
