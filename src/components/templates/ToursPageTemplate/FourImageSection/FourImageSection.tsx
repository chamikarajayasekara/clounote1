import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleImage from "../../../atoms/Images/SingleImage";
import image1 from "../../../../assets/toursimg1.png";
import image2 from "../../../../assets/r4.jpeg";
import image3 from "../../../../assets/r5.jpeg";
import image4 from "../../../../assets/toursimg4.png";
import image5 from "../../../../assets/r3.png";
import image6 from "../../../../assets/r1.png";
import image7 from "../../../../assets/r2.png";

const FourImageSection = () => {
    return (
        <Container >
            <Row className="four-image-section">
                <Col md={6} className="px-0">
                    <SingleImage src={image1}  alt="image-1" styleSet={'left-img'}/>
                </Col>
                <Col md={6} className="px-0">
                    <Row>
                        <SingleImage src={image6} alt="image-2" styleSet={'right-top-img'} />
                    </Row>
                    <Row>
                        <Col md={6} className="px-0">
                            <SingleImage src={image2} alt="image-3" styleSet={'right-bottom-left-img'}/>
                        </Col>
                        <Col md={6} className="px-0">
                            <SingleImage src={image3} alt="image-4" styleSet={'right-bottom-right-img'}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default FourImageSection;