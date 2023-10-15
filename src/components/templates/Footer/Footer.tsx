import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterContentOne from "../../organisms/Contents/FooterContents/FooterContentOne";
import FooterContentTwo from "../../organisms/Contents/FooterContents/FooterContentTwo";
import FooterContentThree from "../../organisms/Contents/FooterContents/FooterContentThree";
import FooterContentFour from "../../organisms/Contents/FooterContents/FooterContentFour";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="footer-top-row">
                    <FooterContentOne/>
                    <FooterContentTwo/>
                    <FooterContentThree/>
                </Row>
                <hr/>
                <FooterContentFour/>
            </Container>
        </footer>
    );
};

export default Footer;