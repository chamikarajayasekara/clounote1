import React, {useEffect, useRef, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TourPageLowerLeft from "../../../organisms/Contents/TourPageContent/TourPageLowerLeftContents/TourPageLowerLeft";
import ToursPageLowerRight
    from "../../../organisms/Contents/TourPageContent/TourPageLowerRightContents/ToursPageLowerRight";
import {
    IAccordionItem,
    IAccordionSection,
    IHighlights, IOther, IPricing,
    IReviews,
    IToursIncluded,
    TourContent
} from "../../../../utils/json/ToursPageDataset/ToursPageData";
import LocalCraftsSection from "../../HomePagetemplates/LocalCraftsSection/LocalCraftsSection";
import HotelsSection from "../../HomePagetemplates/HotelsSection/HotelsSection";


const LowerPageSections = (
    {
        content,
        heading,
        location,
        highlights,
        tourIncluded,
        reviews,
        accordions,
        other,
        pricing
    }: {
        content:TourContent,
        heading:string,
        location:string,
        highlights:IHighlights,
        tourIncluded:IToursIncluded,
        reviews:IReviews,
        accordions:IAccordionItem[],
        other:IOther[],
        pricing:IPricing;
    }) => {


    return (
        <Container className="tours-lower-section">
            <Row>
                <Col md={7} className=" left-wrapper">
                    <TourPageLowerLeft content={content} heading={heading} location={location} highlights={highlights} tourIncluded={tourIncluded}  reviews={ reviews} accordions={accordions} other={other}/>
                </Col>
                <Col md={1} className="px-0 mid-wrapper"></Col>
                <Col md={4} className="px-0  position-relative right-wrapper">
                    <ToursPageLowerRight pricing={pricing}/>
                </Col>
            </Row>
        </Container>
    );
};

export default LowerPageSections;