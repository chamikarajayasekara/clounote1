import React from 'react';
import {CraftsDataset} from "../../../../../utils/helpers/ThingsToDoDataset";
import FiveCardSlider from "../../../../molecules/Slider/Carousal/CardsCarousal/5CardSlider/FiveCardSlider";
const Fade = require("react-reveal/Fade")

interface Props {
    slider:any,
    settings:any,
}
const CarftsCardSlider: React.FC<Props>= (
    { settings, slider}
) => {
    return (
        <Fade left>
        <FiveCardSlider slider={slider} settings={settings} slides={ CraftsDataset}/>
        </Fade>
    );
};

export default CarftsCardSlider;