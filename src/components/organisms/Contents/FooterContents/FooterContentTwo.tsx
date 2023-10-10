import React from 'react';
import location from '../../../../assets/location3.png'
import email from '../../../../assets/email.png'
import phone from '../../../../assets/phone.png'
import {Col} from "react-bootstrap";
import ContactUsDetail from "../../../molecules/Contents/ContactUs/ContactUsDetail";

const FooterContentTwo = () => {
    return (
        <Col md={4} className="contact-us">
            <h5 >Contact Us</h5>
            <div className="contact-items">
                <ContactUsDetail image={location} content={'Zone: 24 | Street Number: 480 | Building Number: 16 | Floor: 1 | Office Number: 4'}/>
                <ContactUsDetail image={email} content={'admin@kittour.com'}/>
                <ContactUsDetail image={phone} content={'+94 - 7154 3954'}/></div>
        </Col>
    );
};

export default FooterContentTwo;