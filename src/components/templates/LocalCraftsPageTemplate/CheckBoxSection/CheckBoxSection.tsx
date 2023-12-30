import React from 'react';
import {IMultiRangeSliderProps} from "../../../../pages/Tours/PackageTours/PackageTours";
import {Col} from "react-bootstrap";
import CheckboxList from "../../../atoms/Input/CheckBoxList/CheckBoxList";
import MultiRangeSlider from "../../../atoms/Input/Range/MultiRangeSlider";
import {LocalCraftsDataset} from "../../../../utils/json/LocalCraftsDataset/LocalCraftsDataset";

interface CheckBoxTemplateHotelsProps {
    selectedOptionsCategory:string[],
    selectedOptionsOffers:string[],
    handleCheckboxChange: (newSelection: string[], group_header: string) => void,
    setSelectedPriceRange: React.Dispatch<React.SetStateAction<IMultiRangeSliderProps>>;
}
const CheckboxSection :React.FC<CheckBoxTemplateHotelsProps> = (
    {   selectedOptionsCategory,
        selectedOptionsOffers,
        handleCheckboxChange,
        setSelectedPriceRange,
    }) => {
    return (
        <Col md={3} className=" mt-4 checkbox-section ">
            <CheckboxList groups={LocalCraftsDataset?.checkboxGroups[0]} selectedOptions={ selectedOptionsCategory } onCheckboxChange={handleCheckboxChange} />
            <MultiRangeSlider label="Price" rangeValue={"$0 -$500+"}  max={500} min={0} setSelectedPriceRange={setSelectedPriceRange}/>
            <CheckboxList groups={LocalCraftsDataset?.checkboxGroups[1]} selectedOptions={ selectedOptionsOffers } onCheckboxChange={handleCheckboxChange} />
        </Col>
    );
};

export default CheckboxSection;