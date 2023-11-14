import React from 'react';
import {IOther} from "../../../../../../utils/json/ToursPageDataset/ToursPageData";

const OtherDetailsItem = ({otherDetail}:{otherDetail:IOther}) => {
    return (
        <div className="other-detail">
            <img src={otherDetail.url} alt=""/>
            <div className="content">
                <h6>{otherDetail.heading}</h6>
                <span>{otherDetail.desc}</span>
            </div>
        </div>
    );
};

export default OtherDetailsItem;