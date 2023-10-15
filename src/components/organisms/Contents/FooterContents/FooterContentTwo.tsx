import React from 'react';
import location from '../../../../assets/fmd_good_black_24dp.svg'
import email from '../../../../assets/email_black_24dp.svg'
import phone from '../../../../assets/call_black_24dp.svg'
import {Col} from "react-bootstrap";
import ContactUsDetail from "../../../molecules/Contents/ContactUs/ContactUsDetail";

const FooterContentTwo = () => {
    return (
        <Col md={4} className="contact-us">
            <h5 >Contact Us</h5>
            <div className="contact-items">
                <ContactUsDetail image={location} content={'Zone: 24 | Street Number: 480 | Building Number: 16 | Floor: 1 | Office Number: 4'}/>
               <span style={{paddingTop: 10}}>
                     <ContactUsDetail image={email} content={'admin@kittour.com'}/>
               </span>
                <ContactUsDetail image={phone} content={'+94 - 7154 3954'}/></div>
        </Col>
    );
};

export default FooterContentTwo;