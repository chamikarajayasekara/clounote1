import React, {useState} from 'react';
import MobileMenu from "../../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import Breadcrumb from "../../../components/molecules/Breadcrumb/Breadcrumb";
import {ThingsToDoDataset} from "../../../utils/json/ThingsToDoDataset/ThingsToDoDataset";
import PageHeader from "../../../components/atoms/Headers/PageHeader";
import {Col, Container, Row} from "react-bootstrap";
import MainLayoutThingToDo from "../../../components/templates/ThingsToDo/MainLayout/MainLayoutThingToDo";
import Banner1 from "../../../components/organisms/Banners/Banner1/Banner1";
import DiscoverExperience from "../../../components/templates/ThingsToDo/DiscoverExperience/DiscoverExperience";
import MobileDrawer from "../../../components/organisms/MobileDarwer/MobileDrawer";
import banner from "../../../assets/banner3.png";
import {LocalCraftsDiscoverDataset} from "../../../utils/json/LocalCraftsDataset/LocalCraftsDataset";

const LocalCraftDiscover = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <div className="things-to-do-page">
                <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
                <Breadcrumb paths={LocalCraftsDiscoverDataset.paths} />
                <PageHeader title={'Enjoy local crafts, specially in Knuckles'} mobileShow={true}/>
                <Container>
                    <Row className="mt-5">
                        <Col md={12} className="">
                            <MainLayoutThingToDo
                                discoverItems={LocalCraftsDiscoverDataset.discoverItems}
                                url={'/local-crafts-discover/local-crafts'}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Banner1
                borderRadius={'0'}
                paddingTop={'75'}
                paddingLeft={'90'}
                imageUrl={banner}
                height={'500px'}
                descriptionSideBorder={false}
                header={LocalCraftsDiscoverDataset.bannerText.question}
                description={LocalCraftsDiscoverDataset.bannerText.description}
                buttonDescription={LocalCraftsDiscoverDataset.bannerText.buttonText}
                leftSideLength={'540px'}
                h1FontSize={'67px'}
                h1LineHeight={'83px'}
                pFont={'18px'}
            />
            <DiscoverExperience item={LocalCraftsDiscoverDataset.banner2}/>
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </>
    );
};

export default LocalCraftDiscover;