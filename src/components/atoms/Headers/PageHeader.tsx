import React from 'react';
import {Container} from "react-bootstrap";

interface Props {
    title:string
}
const PageHeader = (props:Props) => {
    return (
        <Container className="page-header">
            <h1>{props.title}</h1>
        </Container>
    );
};

export default PageHeader;