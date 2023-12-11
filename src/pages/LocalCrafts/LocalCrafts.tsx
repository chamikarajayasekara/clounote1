import React, {useEffect, useState} from 'react';
import MobileMenu from "../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/atoms/Headers/PageHeader";
import {LocalCraftsDataset} from "../../utils/json/LocalCraftsDataset/LocalCraftsDataset";
import {Container, Row} from "react-bootstrap";
import {IMultiRangeSliderProps} from "../Tours/PackageTours/PackageTours";
import FilterSection from "../../components/templates/TourPackagesPagesTemplate/FilterSection/FilterSection";
import ToursPageDetails from "../../utils/json/ToursPageDataset/ToursPageData";
import CheckboxSection from "../../components/templates/LocalCraftsPageTemplate/CheckBoxSection/CheckBoxSection";
import LocalCraftMainPackage
    from "../../components/templates/LocalCraftsPageTemplate/MainPackage/LocalCraftMainPackage";
import SeeMoreButtonSection
    from "../../components/templates/TourPackagesPagesTemplate/SeemoreButtonSection/SeeMoreButtonSection";
import MobileDrawer from "../../components/organisms/MobileDarwer/MobileDrawer";
import FullScreenModal from "../../components/molecules/FullWidthImageModal/FullScreenModal";
import MobileFilterModalHeader from "../../components/molecules/Header/Modals/MobileFilterModalHeader";
import FlatRoundButton from "../../components/atoms/Buttons/FlatButton/FlatRoundButton";
import {useLocation, useParams} from "react-router-dom";

const LocalCrafts = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedOptionsCategory, setSelectedOptionsCategory] = useState<string[]>([]);
    const [selectedOptionsOffers, setSelectedOptionsOffers] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<IMultiRangeSliderProps>({min:0, max:0});
    const [isMobileFiletOpen, setIsMobileFiletOpen] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);


    useEffect(()=>{
        const query = searchParams.get('category') || '';
        if (query){
            setSelectedOptionsCategory([query])
        }
    },[]);

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };
    const mobileFilterOnClick =() =>{
        setIsMobileFiletOpen(true)
    }

    const mobileFilterClose =() =>{
        setIsMobileFiletOpen(false)
    }
    const handleCheckboxChange = (newSelection: string[], group_header: string) => {
        const headerToSetterMap: Record<string, React.Dispatch<React.SetStateAction<string[]>>> = {
            Categories: setSelectedOptionsCategory,
            SpecialOffers: setSelectedOptionsOffers
        };
        const setter = headerToSetterMap[group_header];
        if (setter) {
            setter(newSelection);
        }
    };

    return (
        <div className="local-crafts">
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            <Breadcrumb paths={LocalCraftsDataset.paths} />
            <PageHeader title={'Enjoy local crafts, specially in Knuckles'} mobileShow={true}/>
            <Container>
                <FilterSection  options={ToursPageDetails?.pricing.guest} label={''}  mobileFilterOnClick={mobileFilterOnClick}/>
                <Row className="local-craft-layout">
                    <CheckboxSection  handleCheckboxChange={handleCheckboxChange} selectedOptionsCategory={selectedOptionsCategory} setSelectedPriceRange={setSelectedPriceRange} selectedOptionsOffers={selectedOptionsOffers}/>
                    <LocalCraftMainPackage  />
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
                            selectedOptionsOffers={selectedOptionsOffers}
                            setSelectedPriceRange={setSelectedPriceRange}
                            selectedOptionsCategory={selectedOptionsCategory}
                        />
                    }
                    show={isMobileFiletOpen}
                    handleClose={mobileFilterClose}
                    header={<MobileFilterModalHeader/>}
                    button={<FlatRoundButton name={'greenButtonFull'} text={'Show 5 results'} onClick={mobileFilterClose} />
                }
                />
            }
        </div>
    );
};

export default LocalCrafts;