import React from 'react';
import CardCarousal from "../../../../molecules/Slider/Carousal/CardsCarousal/4CardsSlider/CardCarousal";
import {ThingsToDoDataset}from "../../../../../utils/helpers/ThingsToDoDataset";
const Fade = require("react-reveal/Fade")
interface Props {
    slider:any,
    settings:any,
}
const ThingsToDoCardSlider: React.FC<Props>= (
    { settings, slider}
) => {

    return (
            <Fade left>
                <CardCarousal slider={slider} settings={settings} slides={ ThingsToDoDataset}/>
            </Fade>
    );
};

export default ThingsToDoCardSlider;