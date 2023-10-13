import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ThingsToDoDataset} from "../../../utils/helpers/ThingsToDoDataset";

const VariableWidth: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleBeforeChange = (oldIndex: number, newIndex: number) => {
        setActiveIndex(newIndex);
    }

    const renderSlide = (item: any, index: number) => {
        const slideStyle: React.CSSProperties = {
            width: activeIndex === index ? (index % 2 === 0 ? "225px" : "225px") : "225px"
        };

        return (
            <div key={index} style={slideStyle}>
                <img src={item.image} alt={item.content1} width={218} height={300} />
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
        beforeChange: handleBeforeChange,
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
        <div>
            <h2>Variable width</h2>
            <Slider {...settings}>
                {ThingsToDoDataset.map((item:any, index:number) => renderSlide(item, index))}
            </Slider>
            <p>Active Index: {activeIndex}</p>
        </div>
    );
}

export default VariableWidth;
