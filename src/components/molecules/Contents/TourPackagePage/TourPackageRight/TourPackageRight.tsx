import React from 'react';
import TourPackagePageItem
    from "../../../../organisms/Contents/TourPackagePageContent/TourPackagePageItem/TourPackagePageItem";
import {Col, Row, Container} from "react-bootstrap";
import PackageCard from "../../../../atoms/Cards/PackageCard/PackageCard";

const TourPackageRight = ({category,heading,time,facilities,rate,count,price, images}: {category:string,heading:string,time:string,facilities:string,rate:string,count:string,price:string, images:string[]}) => {
    return (
        <Row className="package-tour-section">
            <Col md={4} className="px-0 ">
                <PackageCard images={images}/>
            </Col>
            <Col md={8}>
               <TourPackagePageItem  category={category} heading={heading} time={time} facilities={facilities} rate={rate} count={count} price={price}/>
            </Col>
        </Row>
    );
};

export default TourPackageRight;