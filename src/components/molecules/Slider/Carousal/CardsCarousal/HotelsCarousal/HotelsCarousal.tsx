import React from 'react';
import Slider from "react-slick";
import Card1 from "../../../../../atoms/Cards/Card1/Card1";
import Card4 from "../../../../../atoms/Cards/Card4/Card4";

interface Props {
    slider:any,
    settings:any,
    slides: any
}
const HotelsCarousal :React.FC<Props>= ({  slider,settings, slides}) => {
    return (
        <div className="card-carousal-content-3">
            <Slider ref={slider} {...settings}>
                {
                    slides?.map((slide: any, key:number) =>
                        (
                            <div key={key} className="card1">
                                <Card4 image={slide.image} content1={slide.content1} location={slide.location} price={slide.price} category={slide.category} rating={slide.rating} unit={slide.unit} />
                            </div>
                        )
                    )
                }
            </Slider>
        </div>
    );
};

export default HotelsCarousal;