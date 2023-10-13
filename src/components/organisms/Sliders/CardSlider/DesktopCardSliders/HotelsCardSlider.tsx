import React from 'react';
import {HotelsDataset} from "../../../../../utils/helpers/ThingsToDoDataset";
import HotelsCarousal from "../../../../molecules/Slider/Carousal/CardsCarousal/HotelsCarousal/HotelsCarousal";

const Fade = require("react-reveal/Fade")
interface Props {
    slider:any,
    settings:any,
}
const HotelsCardSlider: React.FC<Props>= (
    { settings, slider}
) => {
    return (
        <Fade right>
        <HotelsCarousal slider={slider} settings={settings} slides={ HotelsDataset}/>
        </Fade>
    );
};

export default HotelsCardSlider;
