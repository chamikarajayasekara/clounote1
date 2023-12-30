import React from 'react';
import Slider from "react-slick";
import Card3 from "../../../../../atoms/Cards/Card3/Card3";
interface Props {
    slider:any,
    settings:any,
    slides: any
}

const FiveCardSlider:React.FC<Props>= ({  slider,settings, slides}) => {
    return (
        <div className="card-carousal-content-2">
            <Slider ref={slider} {...settings}>
                {
                    slides?.map((slide: any, key:number) =>
                        (
                            <div key={key} className="card5">
                                <Card3 image={slide.image} content1={slide.content1} content2={slide.content2} />
                            </div>
                        )
                    )
                }
            </Slider>
        </div>
    );
};

export default FiveCardSlider;