import React from 'react';
import {IHighlights} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import UnderlinedText from "../../../../atoms/Text/UndelinedText/UnderlinedText";
import SubHeader from "../../../../atoms/Text/SubHeader/SubHeader";

const Highlights = ({highlights}:{highlights:IHighlights}) => {
    return (
        <div className="highlights">
            <SubHeader text={highlights.name} onClick={() => {}} style={''}/>
            <ul>
                {highlights.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <UnderlinedText text={highlights.underlined} onClick={() => {}} style={''}/>
        </div>
    );
};

export default Highlights;