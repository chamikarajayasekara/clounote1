import React from 'react';
import {TourContent} from "../../../../../utils/json/ToursPageDataset/ToursPageData";


const LowerSectionDetails = ({content}:{content:TourContent}) => {

    return (
        <div className="lower-section-details">
            <div className="content-layer">
                {content.map((str, index) => (
                    <p key={index}>{str}</p>
                ))}
            </div>
        </div>
    );
};

export default LowerSectionDetails;