import React, {useState} from 'react';
import {Col, Row, Container} from "react-bootstrap";
import image from "../../assets/contactUs.png"
import ContactForm from "../../components/organisms/Contents/ContactForm/ContactForm";
import MobileDrawer from "../../components/organisms/MobileDarwer/MobileDrawer";
import MobileMenu from "../../components/molecules/MenuSection/MobileMenu/MobileMenu";
const ContactUs = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <Container fluid>
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            <Row>
                <Col lg={6} md={12} className="p-0">
                    <img src={image} alt="" className="contact-us-img"/>
                </Col>
                <Col lg={6} md={12}>
                    <ContactForm/>
                </Col>
            </Row>
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </Container>
    );
};

export default ContactUs;