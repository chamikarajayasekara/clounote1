import React from 'react';
import {Col, Row} from "react-bootstrap";
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";

const SeeMoreButtonSection = () => {
    return (
        <Row>
            <Col md={3} className="px-0 "></Col>
            <Col md={9} className="px-0 ">
                <div className="d-flex justify-content-center align-items-center w-100 mb-lg-5 mt-lg-5">
                    <FlatRoundButton name={'whiteBlackBig'} text={'See more'} onClick={()=> {}}/>
                </div>
            </Col>
        </Row>
    );
};

export default SeeMoreButtonSection;