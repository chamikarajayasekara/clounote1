import React from 'react';
import {Col} from "react-bootstrap";
import Logo from "../../../atoms/Logo/Logo";
import SocialMediaFooter from "../../../molecules/SocialMediaMenu/Social MediaFooter/SocialMediaFooter";

const FooterContentOne = () => {
    return (
        <Col md={4}>
            <Logo/>
            <p className="content-one-p">Knuckles International Tours KIT established in 1999, We welcomes you to enjoy a dream vacation in Knuckles.</p>
            <SocialMediaFooter/>
        </Col>
    );
};

export default FooterContentOne;