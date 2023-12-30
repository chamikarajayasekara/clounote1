import React from 'react';
import {IToursIncluded} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import SubHeader from "../../../../atoms/Text/SubHeader/SubHeader";
import UnderlinedText from "../../../../atoms/Text/UndelinedText/UnderlinedText";

const TourIncludes = ({tourIncluded}:{tourIncluded:IToursIncluded}) => {
    return (
        <div className="tours-included">
            <SubHeader text={tourIncluded.name} onClick={() => {}} style={''}/>
            <div className="ul-list">
                {tourIncluded.points.map((tour, index) => (
                    <div className="item">
                        <img src={tour.url} alt="Tour Icon"  />
                        {
                            tour.lineThrough ?  <p className="text-decoration-line-through">{tour.point}</p> :  <p>{tour.point}</p>
                        }

                    </div>
                ))}
            </div>
            <UnderlinedText text={tourIncluded.underlined} onClick={() => {}} style={''}/>
        </div>
    );
};

export default TourIncludes;