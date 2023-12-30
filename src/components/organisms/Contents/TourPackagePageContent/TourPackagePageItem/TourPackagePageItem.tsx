import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import start from  '../../../../../assets/star.png';
import heart from  '../../../../../assets/heart.png';
import FlatRoundButton from "../../../../atoms/Buttons/FlatButton/FlatRoundButton";
const TourPackagePageItem = ({category,heading,time,facilities,rate,count,price}:{category:string,heading:string,time:string,facilities:string,rate:string,count:string,price:string}) => {
    return (
        <Row>
            <Col md={10} className=" left-col-content ">
                <h5 className="category">{category}</h5>
                <h3 className="content-header">{heading}</h3>
                <h5 className="content-time">{time}</h5>
                <p className="facilities">
                    {facilities}
                </p>
                <div className="review">
                    <span>{rate}</span>&nbsp;
                    <img src={start} alt="rating" width={20} height={20}/>&nbsp;
                    <span >{count}</span>&nbsp;
                </div>
            </Col>
            <Col md={2} className="right-col-content ">
                <img src={heart} alt="rating" width={20} height={20} className="cursor-pointer"/>
                <div className="price">{price}</div>
                <div className="pp mb-2">per person</div>
                <FlatRoundButton name={'greenButton3'} text={'Contact'} onClick={() => {}}/>
            </Col>
        </Row>
    );
};

export default TourPackagePageItem;