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
            <div className="logo-section">
                <Logo/>
            </div>
            <div className="buttons">
                <div onClick={props.handleOpenDrawer} className="drawer-button">
                    <IconButton name={'menu'} icon={search} width={17} height={17}/>
                </div>
                <div onClick={props.handleOpenDrawer} className="drawer-button">
                    <IconButton name={'menu'} icon={menu} width={20} height={20}/>
                </div>
            </div>
        </Container>
    );
};

export default MobileMenu;