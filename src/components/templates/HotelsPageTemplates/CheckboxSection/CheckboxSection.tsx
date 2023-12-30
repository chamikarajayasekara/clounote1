import React from 'react';
import {IMultiRangeSliderProps} from "../../../../pages/Tours/PackageTours/PackageTours";
import {Col} from "react-bootstrap";
import CheckboxList from "../../../atoms/Input/CheckBoxList/CheckBoxList";
import MultiRangeSlider from "../../../atoms/Input/Range/MultiRangeSlider";
import {HotelPageDataset} from "../../../../utils/json/HotelPageDataset/HotelPagedataset";
import RadioInput from "../../../atoms/Input/Radio/RadioInput";

interface CheckBoxTemplateHotelsProps {
    selectedOptionsDuration:string[],
    selectedOptionsLanguage:string[],
    selectedOptionsAttraction:string[],
    selectedOptionsOffers:string[],
    selectedPlaceType:string,
    handleCheckboxChange: (newSelection: string[], group_header: string) => void,
    setSelectedPriceRange: React.Dispatch<React.SetStateAction<IMultiRangeSliderProps>>;
    handleRadio : (value:string)=> void;
}
const CheckboxSection :React.FC<CheckBoxTemplateHotelsProps> = (
    {   selectedOptionsDuration,
        selectedOptionsOffers,
        selectedOptionsLanguage,
        selectedOptionsAttraction,
        handleCheckboxChange,
        setSelectedPriceRange,
        selectedPlaceType,
        handleRadio
    }) => {
    return (
        <Col md={3} className=" mt-4 checkbox-section ">
            <RadioInput label={HotelPageDataset.radioInput.label} options={HotelPageDataset.radioInput.options} onChange={handleRadio} selectedValue={selectedPlaceType}  />
            <CheckboxList groups={HotelPageDataset?.checkboxGroups[0]} selectedOptions={ selectedOptionsDuration } onCheckboxChange={handleCheckboxChange} />
            <MultiRangeSlider label="Price" rangeValue={"$0 -$500+"}  max={500} min={0} setSelectedPriceRange={setSelectedPriceRange}/>
            <CheckboxList groups={HotelPageDataset?.checkboxGroups[1]} selectedOptions={ selectedOptionsLanguage } onCheckboxChange={handleCheckboxChange} />
            <CheckboxList groups={HotelPageDataset?.checkboxGroups[2]} selectedOptions={ selectedOptionsAttraction } onCheckboxChange={handleCheckboxChange} />
            <CheckboxList groups={HotelPageDataset?.checkboxGroups[3]} selectedOptions={ selectedOptionsOffers } onCheckboxChange={handleCheckboxChange} />
        </Col>
    );
};

export default CheckboxSection;