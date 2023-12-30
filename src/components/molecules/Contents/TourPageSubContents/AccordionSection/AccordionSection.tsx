import React from 'react';
import AccordionOne from "../../../../atoms/Accordian/AccordionOne";
import {IAccordionItem} from "../../../../../utils/json/ToursPageDataset/ToursPageData";

const AccordionSection = ({accordions}:{accordions:IAccordionItem[]}) => {
    return (
        <div className='accordion-section'>
            {
                accordions.map((accordion, index) =>(
                    <AccordionOne accordionData={accordion} index={index}/>
                ))
            }
        </div>
    );
};

export default AccordionSection;