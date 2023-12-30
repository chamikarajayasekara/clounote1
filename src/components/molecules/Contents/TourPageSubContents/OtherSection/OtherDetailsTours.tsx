import React from 'react';
import {IOther} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import OtherDetailsItem from "./OtherDetailsItem/OtherDetailsItem";

const OtherDetailsTours = ({other}:{other:IOther[]}) => {
    return (
        <div className="other-details">
            {
                other.map((otherDetail, index)=> (
                    <OtherDetailsItem key={index} otherDetail={otherDetail}/>
                ))
            }
        </div>
    );
};

export default OtherDetailsTours;