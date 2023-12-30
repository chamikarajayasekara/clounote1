import React from 'react';
import {Col} from "react-bootstrap";
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";

const FooterContentThree = () => {
    return (
        <Col md={4} className="useful-info">
            <h5>Useful Info</h5>
            <p>Can’t login to the platform?</p>
            <FlatRoundButton name={'greenButton2'} text={'Contact Us'} onClick={()=>{}}/>
        </Col>
    );
};

export default FooterContentThree;