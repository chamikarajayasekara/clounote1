import React from 'react';
import {Row, Col} from "react-bootstrap";
import RoundedSelect from "../../../atoms/Input/RoundedSelect/RoundedSelect";
import {IGuestOption} from "../../../../pages/Tours/PackageTours/PackageTours";
import user from "../../../../assets/user (2) 1.png";
import filter from "../../../../assets/filterList.svg";
import MobileFilter from "../../../atoms/Buttons/FilterButton/MobileFilter";

interface IFilterSection {
    options: IGuestOption[],
    label:string,
    handleSelectGuest : (selectedOption:IGuestOption ) =>void,
    mobileFilterOnClick: ()=> void
}
const sortOptions = [
    {label:'asc', value:1},
    {label:'desc', value:2}
]
const FilterSection : React.FC<IFilterSection>=({options,label,handleSelectGuest, mobileFilterOnClick})=>{
    return (
        <Row className="tour-package-filter ">
            <Col md={3} className=" ">
                <div className="filter-line">
                    <RoundedSelect options={options} label={label} onChange={handleSelectGuest} image={user} placeholder={'Select'}/>
                </div>
            </Col>
            <Col md={6} className="">
                <div className="d-flex justify-content-start align-items-center feature-line">
                    <span className="sub-content-1">5 places sorted by featured</span>
                    <span className="sub-content-2 ">Clear all filters</span>
                </div>
            </Col>
            <Col md={3} className="">
                <div className="sort-line">
                    <div className="mobile-filter">
                        {/*<RoundedSelect options={sortOptions} label={''} onChange={handleSelectGuest} image={null} placeholder={'Filter'}/>*/}
                        <MobileFilter label={'Filter'} image={filter} onClick={mobileFilterOnClick} badgeCount={'2'}/>
                    </div>
                    <div className="sortby">
                        <RoundedSelect options={sortOptions} label={''} onChange={handleSelectGuest} image={null} placeholder={'Sort by'}/>
                    </div>
                </div>
            </Col>
            <span className="sub-content-1-mobile m-1">5 places sorted by featured</span>
        </Row>
    );
};

export default FilterSection;