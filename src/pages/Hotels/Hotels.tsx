import React, {useState} from 'react';
import {Container, Row} from "react-bootstrap";
import PageHeader from "../../components/atoms/Headers/PageHeader";
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import {HotelPageDataset} from "../../utils/json/HotelPageDataset/HotelPagedataset";
import FilterSection from "../../components/templates/TourPackagesPagesTemplate/FilterSection/FilterSection";
import ToursPageDetails from "../../utils/json/ToursPageDataset/ToursPageData";
import SeeMoreButtonSection
    from "../../components/templates/TourPackagesPagesTemplate/SeemoreButtonSection/SeeMoreButtonSection";
import {IGuestOption, IMultiRangeSliderProps} from "../Tours/PackageTours/PackageTours";
import CheckboxSection from '../../components/templates/HotelsPageTemplates/CheckboxSection/CheckboxSection';
import MainPackage from "../../components/templates/HotelsPageTemplates/MainPackage/MainPackage";
import MobileMenu from "../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import MobileDrawer from "../../components/organisms/MobileDarwer/MobileDrawer";
import FullScreenModal from "../../components/molecules/FullWidthImageModal/FullScreenModal";
import MobileFilterModalHeader from "../../components/molecules/Header/Modals/MobileFilterModalHeader";
import FlatRoundButton from "../../components/atoms/Buttons/FlatButton/FlatRoundButton";

const Hotels = () => {
    const [numberOfGuest, setNumberOfGuest] = useState<number>(0);
    const [isMobileFiletOpen, setIsMobileFiletOpen] = useState(false);
    const [selectedOptionsDuration, setSelectedOptionsDuration] = useState<string[]>([]);
    const [selectedOptionsLanguage, setSelectedOptionsLanguage] = useState<string[]>([]);
    const [selectedOptionsAttraction, setSelectedOptionsAttraction] = useState<string[]>([]);
    const [selectedOptionsOffers, setSelectedOptionsOffers] = useState<string[]>([]);
    const [selectedPlaceType, setSelectedPlaceType] = useState<string>('');
    const [selectedPriceRange, setSelectedPriceRange] = useState<IMultiRangeSliderProps>({min:0, max:0});
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleSelectGuest = (selectedOption:IGuestOption ) => {
        setNumberOfGuest(selectedOption.value)
    }

    const handleCheckboxChange = (newSelection: string[], group_header: string) => {
        const headerToSetterMap: Record<string, React.Dispatch<React.SetStateAction<string[]>>> = {
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
    const mobileFilterOnClick =() =>{
        setIsMobileFiletOpen(true)
    }

    const mobileFilterClose =() =>{
        setIsMobileFiletOpen(false)
    }
    const handleRadio = (value: string) => {
        setSelectedPlaceType(value);
    }

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="hotel-package">
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            <Breadcrumb paths={HotelPageDataset.paths} />
            <PageHeader title={'Best hotels in Knuckles'} mobileShow={true}/>
            <Container>
                <FilterSection  options={ToursPageDetails?.pricing.guest} label={''} handleSelectGuest={handleSelectGuest} mobileFilterOnClick={mobileFilterOnClick}/>
                <Row className="hotel-layout">
                    <CheckboxSection
                        handleCheckboxChange={handleCheckboxChange}
                        selectedPlaceType={selectedPlaceType}
                        selectedOptionsAttraction={selectedOptionsAttraction}
                        selectedOptionsDuration={selectedOptionsDuration}
                        selectedOptionsLanguage={selectedOptionsLanguage}
                        selectedOptionsOffers={selectedOptionsOffers}
                        setSelectedPriceRange={setSelectedPriceRange}
                        handleRadio={handleRadio}
                    />
                    <MainPackage/>
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
                    body={
                        <CheckboxSection
                            handleCheckboxChange={handleCheckboxChange}
                            selectedPlaceType={selectedPlaceType}
                            selectedOptionsAttraction={selectedOptionsAttraction}
                            selectedOptionsDuration={selectedOptionsDuration}
                            selectedOptionsLanguage={selectedOptionsLanguage}
                            selectedOptionsOffers={selectedOptionsOffers}
                            setSelectedPriceRange={setSelectedPriceRange}
                            handleRadio={handleRadio}
                        />
                    }
                    show={isMobileFiletOpen}
                    handleClose={mobileFilterClose}
                    button={<FlatRoundButton name={'greenButtonFull'} text={'Show 5 results'} onClick={mobileFilterClose} />}
                    header={<MobileFilterModalHeader/>}
                />
            }
        </div>
    );
};

export default Hotels;