import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card2 from '../../../../atoms/Cards/Card2/Card2';

interface Props {
    slider:any,
    settings:any,
    slides: any
}

const MultipleRowCarousal:React.FC<Props>= ({  slider,settings, slides}) => {
    return (
        <div className="card-carousal-content-mulitple">
            <Slider ref={slider} {...settings}>
                {
                    slides?.map((slide: any, key:number) =>
                        (
                            <div key={key} className="card2">
                                <Card2 image={slide.image} content1={slide.content1} category={slide.category} location={slide.location} price={slide.price}/>
                            </div>
                        )
                    )
                }
            </Slider>
        </div>
    );
};

export default MultipleRowCarousal;