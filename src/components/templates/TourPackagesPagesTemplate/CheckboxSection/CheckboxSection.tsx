import React from 'react';
import CheckboxList from "../../../atoms/Input/CheckBoxList/CheckBoxList";
import {TourPackageDataSet} from "../../../../utils/json/ToursPageDataset/ToursPageData";
import MultiRangeSlider from "../../../atoms/Input/Range/MultiRangeSlider";
import {Col} from "react-bootstrap";
import {IMultiRangeSliderProps} from "../../../../pages/Tours/PackageTours/PackageTours";

interface CheckBoxTemplateProps {
    selectedOptionsCategory:string[],
    selectedOptionsDuration:string[],
    selectedOptionsLanguage:string[],
    selectedOptionsAttraction:string[],
    selectedOptionsOffers:string[],
    handleCheckboxChange: (newSelection: string[], group_header: string) => void,
    setSelectedPriceRange: React.Dispatch<React.SetStateAction<IMultiRangeSliderProps>>;
}
const CheckboxSection:React.FC<CheckBoxTemplateProps> = ({selectedOptionsCategory, selectedOptionsDuration, selectedOptionsOffers, selectedOptionsLanguage, selectedOptionsAttraction, handleCheckboxChange, setSelectedPriceRange}) => {
    return (
        <Col md={3} className=" mt-4 checkbox-section">
            <CheckboxList groups={TourPackageDataSet?.checkboxGroups[0]} selectedOptions={ selectedOptionsCategory } onCheckboxChange={handleCheckboxChange} />
            <CheckboxList groups={TourPackageDataSet?.checkboxGroups[1]} selectedOptions={ selectedOptionsDuration } onCheckboxChange={handleCheckboxChange} />
            <MultiRangeSlider label="Price" rangeValue={"$0 -$500+"}  max={500} min={0} setSelectedPriceRange={setSelectedPriceRange}/>
            <CheckboxList groups={TourPackageDataSet?.checkboxGroups[2]} selectedOptions={ selectedOptionsLanguage } onCheckboxChange={handleCheckboxChange} />
            <CheckboxList groups={TourPackageDataSet?.checkboxGroups[3]} selectedOptions={ selectedOptionsAttraction } onCheckboxChange={handleCheckboxChange} />
            <CheckboxList groups={TourPackageDataSet?.checkboxGroups[4]} selectedOptions={ selectedOptionsOffers } onCheckboxChange={handleCheckboxChange} />
        </Col>
    );
};

export default CheckboxSection;