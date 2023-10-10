import React, {useRef} from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import SectionHeader from "../../../molecules/SectionHeader/SectionHeader";
import TopToursCardSlide from "../../../organisms/Sliders/CardSlider/TopToursCardSlide";

const TopToursSection = () => {
    const settings = {
        className: "center",
        centerMode:false,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2, // Display two rows
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

    const sliderRef2 = useRef<Slider | null>(null);

    const handlePrev = () => {
        if (sliderRef2.current) {
            sliderRef2.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef2.current) {
            sliderRef2.current.slickNext();
        }
    };
    return (
        <Container className="things-to-do-section">
            <SectionHeader name={'Knuckles Top Tours'} onClick={()=>{}} noOfItems={12} toNavigate={'/things-to-do'} handlePrev={handlePrev} handleNext={handleNext}/>
            <TopToursCardSlide slider={sliderRef2} settings={settings}/>
        </Container>
    );
};

export default TopToursSection;