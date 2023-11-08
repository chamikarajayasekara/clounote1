import React from 'react';
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import Container from 'react-bootstrap/Container';
import PageHeader from "../../components/atoms/Headers/PageHeader";
import FourImageSection from "../../components/templates/ToursPageTemplate/FourImageSection/FourImageSection";
import LocationInfo from "../../components/templates/ToursPageTemplate/LocationInfo/LocationInfo";

const paths = [
    { name: 'Home', url: '/' },
    { name: 'Knuckles Top Tours', url: '/tours' }
];

const Tours = () => {
    return (
        <Container fluid className="tours">
            <Breadcrumb paths={paths} />
            <PageHeader title={'Knuckles Spice Trail Trek From Kandy'}/>
            <LocationInfo locationName="Knuckles, Sri Lanka" />
            <FourImageSection/>
        </Container>
    );
};

export default Tours;