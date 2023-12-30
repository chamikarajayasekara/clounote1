import React, {useState} from 'react';
import Card3 from "../../../../../atoms/Cards/Card3/Card3";
import Slider from "react-slick";
import { HotelsDataset} from "../../../../../../utils/helpers/ThingsToDoDataset";
import Card4 from "../../../../../atoms/Cards/Card4/Card4";

const HotelsMobile = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAfterChange = (currentIndex: number) => {
        setActiveIndex(currentIndex);
    }

    const renderSlide = (slide: any, index: number) => {
        const slideStyle: React.CSSProperties = {
            width: activeIndex === index ? (index % 2 === 0 ? "170px" : "170px") : "170px"
        };

        return (
            <div key={index} className="card4" style={slideStyle}>
                <Card4 image={slide.image} content1={slide.content1} location={slide.location} price={slide.price} category={slide.category} rating={slide.rating} unit={slide.unit} />
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
        <div className="hotels-mobile-slider">
            <Slider {...settings}>
                {HotelsDataset.map((item:any, index:number) => renderSlide(item, index))}
            </Slider>
        </div>
    );
};

export default HotelsMobile;