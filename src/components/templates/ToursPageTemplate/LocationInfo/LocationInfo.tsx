import React from 'react';
import locationIcon from "../../../../assets/locationsvg.svg";
import locationWhite from "../../../../assets/locationwhite.svg";
import {Container} from "react-bootstrap";

interface LocationInfo {
    locationName:string,
    isMobile?:boolean
}
const LocationInfo:React.FC<LocationInfo> = ({  locationName,isMobile}) => {
    return (
        <Container className={isMobile ? "location-info-mobile" : "location-info "}>
            <img src={isMobile ? locationWhite : locationIcon} alt="" className="location-icon"/>
            <span className="location-name">{locationName}</span>
        </Container>
    );
};

export default LocationInfo