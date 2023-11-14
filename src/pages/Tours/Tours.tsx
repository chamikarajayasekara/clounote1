import React, {useState} from 'react';
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import Container from 'react-bootstrap/Container';
import PageHeader from "../../components/atoms/Headers/PageHeader";
import FourImageSection from "../../components/templates/ToursPageTemplate/FourImageSection/FourImageSection";
import LocationInfo from "../../components/templates/ToursPageTemplate/LocationInfo/LocationInfo";
import FullScreenModal from "../../components/molecules/FullWidthImageModal/FullScreenModal";
import CollageGallery from "../../components/molecules/Gallery/CollageGallery";

import GallerySlider from "../../components/organisms/Sliders/GallerySilder/GallerySlider";
import LowerPageSections from "../../components/templates/ToursPageTemplate/LowerPageSections/LowerPageSections";
import PageData from "../../utils/json/ToursPageDataset/ToursPageData"
import LocalCraftsSection from "../../components/templates/HomePagetemplates/LocalCraftsSection/LocalCraftsSection";
import HotelsSection from "../../components/templates/HomePagetemplates/HotelsSection/HotelsSection";
import TopToursSection from "../../components/templates/HomePagetemplates/TopToursSection/TopToursSection";



const Tours = () => {
    const [show, setShow] = useState(false);
    const [showCarousalModal, setShowCarousalModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const {paths, locationSource, tourPageDetails, imagesData, heading, highlights, tour, reviews, accordions, other, pricing } = PageData;

    const handleImageClick = (index:number) => {
        setSelectedImageIndex(index);
        setShowCarousalModal(true);
    };

    const handleCarousalModal = () => {
        setShowCarousalModal(false);
    }

    const handleShowModal = () => {
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
    };

    return (
        <div>
            <Container fluid className="tours">
                <Breadcrumb paths={paths} />
                <PageHeader title={'Knuckles Spice Trail Trek From Kandy'}/>
                <LocationInfo locationName="Knuckles, Sri Lanka" />
                <FourImageSection handleShow={handleShowModal} />
                <FullScreenModal show={show} handleClose={handleCloseModal} title={paths[1].name} body={<CollageGallery images={imagesData.images} handleImageClick={handleImageClick}/>}/>
                <FullScreenModal show={showCarousalModal} handleClose={handleCarousalModal} title={paths[1].name} body={<GallerySlider handleImageClick={handleImageClick} selectedImageIndex={selectedImageIndex} images={imagesData.images}/>}/>
                <LowerPageSections content={tourPageDetails} heading={heading} location={locationSource} highlights={highlights} tourIncluded={tour}  reviews={ reviews } accordions={accordions} other={other} pricing={pricing}/>
            </Container>
            <hr className="home-highlights"/>
            <LocalCraftsSection/>
            <HotelsSection/>
            <TopToursSection/>
        </div>

    );
};

export default Tours;