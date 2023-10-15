import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterContentFour = () => {
    const handleCRedirectToClounote = () => {
        window.location.replace('https:/clounote.com');
    };
    return (
        <Row className="footer-bottom-row">
            <Col md={4} className="mb-2">
                <span className="all-right-res">© kittour.com 2015-2021. All rights reserved.</span>
            </Col>
            <Col md={4} className="mb-2">
                <span>Designed and developed by <a onClick={handleCRedirectToClounote}>www.clounote.com</a></span>
            </Col>
            <Col md={4} className="mb-2">
               <span>Contact Us   &nbsp; &nbsp;| &nbsp;&nbsp;  Terms of Use&nbsp;&nbsp;   |&nbsp;&nbsp;   Privacy Policy</span>
            </Col>
        </Row>
    );
};

export default FooterContentFour;