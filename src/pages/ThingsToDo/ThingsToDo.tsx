import React from 'react';
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/atoms/Headers/PageHeader";
import {Col, Container, Row} from "react-bootstrap";
import {ThingsToDoDataset} from "../../utils/json/ThingsToDoDataset/ThingsToDoDataset";
import MainLayoutThingToDo from "../../components/templates/ThingsToDo/MainLayoutThingToDo";

const ThingsToDo = () => {
    return (
        <div className="things-to-do-page">
            <Breadcrumb paths={ThingsToDoDataset.paths} />
            <PageHeader title={'Discover things to do'} mobileShow={true}/>
            <Container>
                <Row className="mt-5">
                    <Col md={12} className="">
                        <MainLayoutThingToDo discoverItems={ThingsToDoDataset.discoverItems}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThingsToDo;