import React from 'react';
import LowerSectionHeading
    from "../../../../molecules/Contents/TourPageSubContents/LowerSectionHeading/LowerSectionHeading";
import LowerPageSections from "../../../../templates/ToursPageTemplate/LowerPageSections/LowerPageSections";
import LowerSectionDetails
    from "../../../../molecules/Contents/TourPageSubContents/LowerSectionDetails/LowerSectionDetails";
import LowerSectionLocationImage
    from "../../../../molecules/Contents/TourPageSubContents/LowerSectionLocationImage/LowerSectionLocationImage";
import {
    IAccordionItem,
    IAccordionSection,
    IHighlights, IOther,
    IReviews,
    IToursIncluded,
    TourContent
} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import Highlights from "../../../../molecules/Contents/TourPageSubContents/Highlights/Highlights";
import TourIncludes from "../../../../molecules/Contents/TourPageSubContents/TourIncludes/TourIncludes";
import Reviews from "../../../../molecules/Contents/TourPageSubContents/ReviewsSection/Reviews";
import AccordionOne from "../../../../atoms/Accordian/AccordionOne";
import AccordionSection from "../../../../molecules/Contents/TourPageSubContents/AccordionSection/AccordionSection";
import OtherDetailsTours from "../../../../molecules/Contents/TourPageSubContents/OtherSection/OtherDetailsTours";

const TourPageLowerLeft = ({content, heading, location, highlights, tourIncluded,  reviews, accordions, other }:{content:TourContent, heading:string, location:string, highlights:IHighlights, tourIncluded:IToursIncluded,  reviews:IReviews,  accordions:IAccordionItem[], other:IOther[]}) => {
    return (
        <>
            <LowerSectionHeading heading={heading} />
            <LowerSectionDetails content={content} />
            <LowerSectionLocationImage location={location} />
            <Highlights highlights={highlights}/>
            <TourIncludes tourIncluded={tourIncluded}/>
            <Reviews reviews={ reviews}/>
            <AccordionSection accordions={accordions}/>
            <OtherDetailsTours other={other}/>
        </>
    );
};

export default TourPageLowerLeft;