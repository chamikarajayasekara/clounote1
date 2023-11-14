import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {IAccordionItem} from "../../../utils/json/ToursPageDataset/ToursPageData";

const AccordionOne = ({accordionData, index}:{accordionData:IAccordionItem, index:number}) => {
    return (
        <div className="collapse-item">
            <Accordion>
                <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{accordionData.name}</Accordion.Header>
                    <Accordion.Body>
                        {
                            accordionData.items.map((item, index)=>(
                                <div key={index} className="item">
                                    {item}
                                </div>
                                )
                            )
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AccordionOne;