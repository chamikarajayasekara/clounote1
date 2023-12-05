import React, {useState} from 'react';
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/atoms/Headers/PageHeader";
import {Col, Container, Row} from "react-bootstrap";
import {ThingsToDoDataset} from "../../utils/json/ThingsToDoDataset/ThingsToDoDataset";
import MainLayoutThingToDo from "../../components/templates/ThingsToDo/MainLayout/MainLayoutThingToDo";
import Banner1 from "../../components/organisms/Banners/Banner1/Banner1";
import banner  from "../../assets/ttdbanner.png";
import DiscoverExperience from "../../components/templates/ThingsToDo/DiscoverExperience/DiscoverExperience";
import MobileMenu from "../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import MobileDrawer from "../../components/organisms/MobileDarwer/MobileDrawer";

const ThingsToDo = () => {
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
                <Breadcrumb paths={ThingsToDoDataset.paths} />
                <PageHeader title={'Discover things to do'} mobileShow={true}/>
                <Container>
                    <Row className="mt-5">
                        <Col md={12} className="">
                            <MainLayoutThingToDo
                                discoverItems={ThingsToDoDataset.discoverItems}
                                url={'/things-to-do/things-to-do-details'}
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
                header={ThingsToDoDataset.bannerText.question}
                description={ThingsToDoDataset.bannerText.description}
                buttonDescription={ThingsToDoDataset.bannerText.buttonText}
                leftSideLength={'540px'}
                h1FontSize={'67px'}
                h1LineHeight={'83px'}
                pFont={'18px'}
            />
            <DiscoverExperience item={ThingsToDoDataset.banner2}/>
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </>

    );
};

export default ThingsToDo;