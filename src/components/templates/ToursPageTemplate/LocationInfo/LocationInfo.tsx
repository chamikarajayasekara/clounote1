import React from 'react';
import locationIcon from "../../../../assets/locationsvg.svg"
const LocationInfo = ({ locationName }: {  locationName:string }) => {
    return (
        <div className="location-info">
            <img src={locationIcon} alt="" className="location-icon"/>
            <span className="location-name">{locationName}</span>
        </div>
    );
};

export default LocationInfo