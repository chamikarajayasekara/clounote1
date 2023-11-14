import React from 'react';
import locationIcon from "../../../../assets/locationsvg.svg"
import {Container} from "react-bootstrap";
const LocationInfo = ({ locationName }: {  locationName:string }) => {
    return (
        <Container className="location-info ">
            <img src={locationIcon} alt="" className="location-icon"/>
            <span className="location-name">{locationName}</span>
        </Container>
    );
};

export default LocationInfo