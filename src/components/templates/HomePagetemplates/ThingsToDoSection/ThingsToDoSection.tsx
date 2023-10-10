import React, {useRef} from 'react';
import SectionHeader from "../../../molecules/SectionHeader/SectionHeader";
import Slider from "react-slick";
import ThingsToDoCardSlider from "../../../organisms/Sliders/CardSlider/ThingsToDoCardSlider";
import { Container } from 'react-bootstrap';

const ThingsToDoSection = () => {
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

    const sliderRef = useRef<Slider | null>(null);

    let slider: any;


    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };


    return (
        <Container className="things-to-do-section">
            <SectionHeader name={'Things To Do In Riverston'} onClick={()=>{}} noOfItems={8} toNavigate={'/things-to-do'} handlePrev={handlePrev} handleNext={handleNext}/>
            <ThingsToDoCardSlider slider={sliderRef} settings={settings} />
        </Container>
    );
};

export default ThingsToDoSection;