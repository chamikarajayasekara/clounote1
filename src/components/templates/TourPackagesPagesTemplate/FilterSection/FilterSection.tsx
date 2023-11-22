import React from 'react';
import {Row, Col} from "react-bootstrap";
import RoundedSelect from "../../../atoms/Input/RoundedSelect/RoundedSelect";
import {IGuestOption} from "../../../../pages/Tours/PackageTours/PackageTours";
import user from "../../../../assets/user (2) 1.png";

interface IFilterSection {
    options: IGuestOption[],
    label:string,
    handleSelectGuest : (selectedOption:IGuestOption ) =>void
}
const sortOptions = [
    {label:'asc', value:1},
    {label:'desc', value:2}
]
const FilterSection : React.FC<IFilterSection>=({options,label,handleSelectGuest})=>{
    return (
        <Row className="tour-package-filter mt-4">
            <Col md={3} className="px-0   ">
                <div className="filter-line">
                    <RoundedSelect options={options} label={label} onChange={handleSelectGuest} image={user} placeholder={'Select'}/>
                </div>
            </Col>
            <Col md={6} className="px-0">
                <div className="d-flex justify-content-start align-items-center mt-4">
                    <span className="sub-content-1">5 places sorted by featured</span>
                    <span className="sub-content-2 ">Clear all filters</span>
                </div>
            </Col>
            <Col md={3} className="px-0 ">
                <div className="d-flex justify-content-end">
                    <RoundedSelect options={sortOptions} label={''} onChange={handleSelectGuest} image={null} placeholder={'Sort by'}/>
                </div>

            </Col>
        </Row>
    );
};

export default FilterSection;