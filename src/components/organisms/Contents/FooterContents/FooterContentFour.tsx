import React from 'react';
import {Col, Row} from "react-bootstrap";

const FooterContentFour = () => {
    return (
        <Row className="footer-bottom-row">
            <Col md={4}>
                <span>© kittour.com 2015-2021. All rights reserved.</span>
            </Col>
            <Col md={4}>
                <span>Designed and developed by Clounote.com</span>
            </Col>
            <Col md={4}>
               <span>Contact Us   &nbsp; &nbsp;| &nbsp;&nbsp;  Terms of Use&nbsp;&nbsp;   |&nbsp;&nbsp;   Privacy Policy</span>
            </Col>
        </Row>
    );
};

export default FooterContentFour;