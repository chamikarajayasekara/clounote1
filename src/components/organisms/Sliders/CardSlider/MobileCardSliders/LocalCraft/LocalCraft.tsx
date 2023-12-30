import React, {useState} from 'react';
import Card2 from "../../../../../atoms/Cards/Card2/Card2";
import Slider from "react-slick";
import {CraftsDataset} from "../../../../../../utils/helpers/ThingsToDoDataset";
import Card3 from "../../../../../atoms/Cards/Card3/Card3";

const LocalCraft = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAfterChange = (currentIndex: number) => {
        setActiveIndex(currentIndex);
    }

    const renderSlide = (slide: any, index: number) => {
        const slideStyle: React.CSSProperties = {
            width: activeIndex === index ? (index % 2 === 0 ? "205px" : "205px") : "205px"
        };

        return (
            <div key={index} className="card3" style={slideStyle}>
                <Card3 image={slide.image} content1={slide.content1} content2={slide.content2} />
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
        <div className="crafts-mobile-slider">
            <Slider {...settings}>
                {CraftsDataset.map((item:any, index:number) => renderSlide(item, index))}
            </Slider>
        </div>
    );
};

export default LocalCraft;