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
import MobileMenu from "../../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import MobileDrawer from "../../../components/organisms/MobileDarwer/MobileDrawer";
import FullScreenModal from "../../../components/molecules/FullWidthImageModal/FullScreenModal";
import MobileFilterModalHeader from "../../../components/molecules/Header/Modals/MobileFilterModalHeader";
import {useLocation} from "react-router-dom";

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobileFiletOpen, setIsMobileFiletOpen] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    useEffect(()=>{
        const query = searchParams.get('category') || '';
        if (query){
            setSelectedOptionsCategory([query])
        }
        console.log(query)
    },[]);

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };
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

    const mobileFilterOnClick =() =>{
        setIsMobileFiletOpen(true)
    }

    const mobileFilterClose =() =>{
        setIsMobileFiletOpen(false)
    }
    return (
        <div className="tours-package">
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            <Breadcrumb paths={TourPackageDataSet.paths} />
            <PageHeader title={'Tour Packages'} mobileShow={true}/>
            <Container>
                <FilterSection  options={ToursPageDetails?.pricing.guest} label={''} handleSelectGuest={handleSelectGuest} mobileFilterOnClick={mobileFilterOnClick}/>
                <Row className="tour-page-right-row">
                    <CheckboxSection handleCheckboxChange={handleCheckboxChange} selectedOptionsCategory={selectedOptionsCategory} selectedOptionsAttraction={selectedOptionsAttraction} selectedOptionsDuration={selectedOptionsDuration} selectedOptionsLanguage={selectedOptionsLanguage} selectedOptionsOffers={selectedOptionsOffers} setSelectedPriceRange={setSelectedPriceRange} />
                    <MainPackageSection/>
                </Row>
                <SeeMoreButtonSection/>
            </Container>
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
            {
                isMobileFiletOpen &&
                <FullScreenModal
                    title={''}
                    body={ <CheckboxSection handleCheckboxChange={handleCheckboxChange} selectedOptionsCategory={selectedOptionsCategory} selectedOptionsAttraction={selectedOptionsAttraction} selectedOptionsDuration={selectedOptionsDuration} selectedOptionsLanguage={selectedOptionsLanguage} selectedOptionsOffers={selectedOptionsOffers} setSelectedPriceRange={setSelectedPriceRange} />}
                    show={isMobileFiletOpen}
                    handleClose={mobileFilterClose}
                    button={<FlatRoundButton name={'greenButtonFull'} text={'Show 5 results'} onClick={mobileFilterClose} />}
                    header={<MobileFilterModalHeader/>}
                />
            }

        </div>
    );
};

export default PackageTours;