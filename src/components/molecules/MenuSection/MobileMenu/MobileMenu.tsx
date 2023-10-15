import React from 'react';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import menu from "../../../../assets/menu_black_24dp.svg";
import search from "../../../../assets/Path 101.svg"
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../../atoms/Logo/Logo";

interface Props {
    handleOpenDrawer:() => void
}
const MobileMenu = (props:Props) => {
    return (
        <Container className="mobile-nav">
            <Row>
                <Col xs={8} md={8}>
                    <Logo/>
                </Col>
                <Col xs={2} md={2}>
                    <div onClick={props.handleOpenDrawer} className="drawer-button">
                        <IconButton name={'menu'} icon={search} width={20} height={20}/>
                    </div>
                </Col>
                <Col xs={2} md={2}>
                    <div onClick={props.handleOpenDrawer} className="drawer-button">
                        <IconButton name={'menu'} icon={menu} width={20} height={20}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MobileMenu;