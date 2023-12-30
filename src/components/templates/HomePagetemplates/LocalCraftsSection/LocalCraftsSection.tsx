import React, {useRef} from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import SectionHeader from "../../../molecules/SectionHeader/SectionHeader";
import ThingsToDoCardSlider from "../../../organisms/Sliders/CardSlider/DesktopCardSliders/ThingsToDoCardSlider";
import CarftsCardSlider from "../../../organisms/Sliders/CardSlider/DesktopCardSliders/CarftsCardSlider";
import LocalCraft from "../../../organisms/Sliders/CardSlider/MobileCardSliders/LocalCraft/LocalCraft";

const LocalCraftsSection = () => {
    const settings = {
        slidesToShow: 5,
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

    const sliderRef3 = useRef<Slider | null>(null);

    let slider: any;


    const handlePrev = () => {
        if (sliderRef3.current) {
            sliderRef3.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef3.current) {
            sliderRef3.current.slickNext();
        }
    };


    return (
        <Container className="local-crafts" >
            <SectionHeader name={'Enjoy Local Crafts'} onClick={()=>{}} noOfItems={23} toNavigate={'/local-crafts-discover'} handlePrev={handlePrev} handleNext={handleNext}/>
            <CarftsCardSlider slider={sliderRef3} settings={settings} />
            <LocalCraft/>
        </Container>
    );
};

export default LocalCraftsSection;