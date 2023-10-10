import React from 'react';
import MultipleRowCarousal from "../../../molecules/Slider/Carousal/MulitiRowCardCarousal/MultipleRowCarousal";
import {TopToursDataset}from "../../../../utils/helpers/ThingsToDoDataset";
const Fade = require("react-reveal/Fade")
interface Props {
    slider:any,
    settings:any,
}
const TopToursCardSlide: React.FC<Props>= (
    { settings, slider}
) => {
    return (
        <Fade right>
        <MultipleRowCarousal slider={slider} settings={settings} slides={TopToursDataset}/>
        </Fade>

    );
};

export default TopToursCardSlide;