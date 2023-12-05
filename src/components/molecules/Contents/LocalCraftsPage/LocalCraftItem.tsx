import React from 'react';
import heart2 from "../../../../assets/heart2.svg";
import {Col, Row} from "react-bootstrap";

interface LocalCraftItem {
    title:string,
    brand:string,
    price:string,
    images:string[]
}
const LocalCraftItem:React.FC<LocalCraftItem> = ({title,brand, price, images}) => {
    return (
        <div className="local-craft-item">
            <div className="main-img ">
                <img src={images[0]} alt="" width={289} height={289} className="img-local-craft" />
                <img src={heart2} alt="rating" width={24} height={24} className="cursor-pointer whishlist"/>
            </div>
            <div className="card-content">
                <Row>
                    <Col xs={8} md={8} >
                        <h6>{title}</h6>
                        <p className="name">{brand}</p>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className="label-price-lc">
                            <span className="price pt-2">{price}</span>
                        </div>
                    </Col>
                </Row>


            </div>
        </div>
    );
};

export default LocalCraftItem;