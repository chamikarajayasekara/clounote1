import React, {useRef} from 'react';
import SectionHeader from "../../../molecules/SectionHeader/SectionHeader";
import ThingsToDoCardSlider from "../../../organisms/Sliders/CardSlider/DesktopCardSliders/ThingsToDoCardSlider";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import HotelsCardSlider from "../../../organisms/Sliders/CardSlider/DesktopCardSliders/HotelsCardSlider";
import HotelsMobile from "../../../organisms/Sliders/CardSlider/MobileCardSliders/Hotels/HotelsMobile";

const HotelsSection = () => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const sliderRef4 = useRef<Slider | null>(null);

    let slider: any;


    const handlePrev = () => {
        if (sliderRef4.current) {
            sliderRef4.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef4.current) {
            sliderRef4.current.slickNext();
        }
    };

    return (
        <Container className="hotels-section">
            <SectionHeader name={'Best Hotels to Stay'} onClick={()=>{}} noOfItems={23} toNavigate={'/hotels'} handlePrev={handlePrev} handleNext={handleNext}/>
            <HotelsCardSlider slider={sliderRef4} settings={settings} />
            <HotelsMobile/>
        </Container>
    );
};

export default HotelsSection;