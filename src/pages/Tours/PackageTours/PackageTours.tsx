import React, {useEffect, useState} from 'react';
import PackageCard from "../../../components/atoms/Cards/PackageCard/PackageCard";
import { Container, Row, Col } from 'react-bootstrap';
import TourPackageRight
    from "../../../components/molecules/Contents/TourPackagePage/TourPackageRight/TourPackageRight";
import ToursPageDetails, {TourPackageDataSet} from "../../../utils/json/ToursPageDataset/ToursPageData";
import CheckboxList from "../../../components/atoms/Input/CheckBoxList/CheckBoxList";
import banner from '../../../assets/tourPackagebanner.png';
import MultiRangeSlider from "../../../components/atoms/Input/Range/MultiRangeSlider";
import Banner1 from "../../../components/organisms/Banners/Banner1/Banner1";
import FlatRoundButton from "../../../components/atoms/Buttons/FlatButton/FlatRoundButton";
import CheckboxSection from "../../../components/templates/TourPackagesPagesTemplate/CheckboxSection/CheckboxSection";
import MainPackageSection
    from "../../../components/templates/TourPackagesPagesTemplate/MainPackageSection/MainPackageSection";
import SeeMoreButtonSection
    from "../../../components/templates/TourPackagesPagesTemplate/SeemoreButtonSection/SeeMoreButtonSection";
import FilterSection from "../../../components/templates/TourPackagesPagesTemplate/FilterSection/FilterSection";
import Breadcrumb from "../../../components/molecules/Breadcrumb/Breadcrumb";
import PageHeader from "../../../components/atoms/Headers/PageHeader";

export interface IMultiRangeSliderProps {
    min: number;
    max: number;
}
export interface IGuestOption {
    label:string,
    value:number
}
const PackageTours = () => {
    const [selectedOptionsCategory, setSelectedOptionsCategory] = useState<string[]>([]);
    const [selectedOptionsDuration, setSelectedOptionsDuration] = useState<string[]>([]);
    const [selectedOptionsLanguage, setSelectedOptionsLanguage] = useState<string[]>([]);
    const [selectedOptionsAttraction, setSelectedOptionsAttraction] = useState<string[]>([]);
    const [selectedOptionsOffers, setSelectedOptionsOffers] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<IMultiRangeSliderProps>({min:0, max:0});
    const [rangeValue, setRangeValue] = useState<number>(50);
    const [numberOfGuest, setNumberOfGuest] = useState<number>(0);

    const handleCheckboxChange = (newSelection: string[], group_header: string) => {
        const headerToSetterMap: Record<string, React.Dispatch<React.SetStateAction<string[]>>> = {
            Categories: setSelectedOptionsCategory,
            Duration: setSelectedOptionsDuration,
            Language: setSelectedOptionsLanguage,
            PopularAttraction: setSelectedOptionsAttraction,
            SpecialOffers: setSelectedOptionsOffers
        };

        const setter = headerToSetterMap[group_header];

        if (setter) {
            setter(newSelection);
        }
    };

    const handleSelectGuest = (selectedOption:IGuestOption ) => {
        setNumberOfGuest(selectedOption.value)
    }
    return (
        <div className="tours-package px-0 ">
            <Breadcrumb paths={TourPackageDataSet.paths} />
            <PageHeader title={'Tour Packages'}/>
            <Container fluid>
                <FilterSection  options={ToursPageDetails?.pricing.guest} label={''} handleSelectGuest={handleSelectGuest}/>
                <Row className="px-0">
                    <CheckboxSection handleCheckboxChange={handleCheckboxChange} selectedOptionsCategory={selectedOptionsCategory} selectedOptionsAttraction={selectedOptionsAttraction} selectedOptionsDuration={selectedOptionsDuration} selectedOptionsLanguage={selectedOptionsLanguage} selectedOptionsOffers={selectedOptionsOffers} setSelectedPriceRange={setSelectedPriceRange} />
                    <MainPackageSection/>
                </Row>
                <SeeMoreButtonSection/>
            </Container>
        </div>
    );
};

export default PackageTours;