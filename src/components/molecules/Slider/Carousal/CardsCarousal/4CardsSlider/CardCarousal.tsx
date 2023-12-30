import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cycle from "../../../../../../assets/cycle.png"
import Card1 from "../../../../../atoms/Cards/Card1/Card1";
interface Props {
    slider:any,
    settings:any,
    slides: any
}

const CardCarousal:React.FC<Props>= ({  slider,settings, slides}) => {

    return (
        <div className="card-carousal-content">
            <Slider ref={slider} {...settings}>
                {
                    slides?.map((slide: any, key:number) =>
                      (
                          <div key={key} className="card1">
                            <Card1 image={slide.image} content1={slide.content1} content2={slide.content2} />
                          </div>
                      )
                    )
                }
            </Slider>
        </div>
    );
};

export default CardCarousal;