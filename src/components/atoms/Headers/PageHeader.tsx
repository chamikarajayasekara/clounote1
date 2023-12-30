import React from 'react';
import {Container} from "react-bootstrap";

interface Props {
    title:string,
    mobileShow?:boolean
}
const PageHeader = (props:Props) => {
    return (
        <Container className={!props.mobileShow ? 'd-none' : 'page-header'}>
            <h1>{props.title}</h1>
        </Container>
    );
};

export default PageHeader;