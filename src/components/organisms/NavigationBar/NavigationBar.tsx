import React from 'react';
import Logo from "../../atoms/Logo/Logo";
import FlatRoundButton from "../../atoms/Buttons/FlatButton/FlatRoundButton";
import Container from 'react-bootstrap/Container';
import MenuSection from "../../molecules/MenuSection/MenuSection";
import ButtonsMenuSection from "../../molecules/ButtonsMenu/ButtonsMenuSection";

const NavigationBar = () => {

    return (
        <Container fluid className="navigation-bar">
            <div className='navigation-bar-wrapper'>
                <div className="logo-section">
                    <a href={"/"}>
                        <Logo/>
                    </a>
                </div>
                <MenuSection mobile={false}/>
                <ButtonsMenuSection/>
            </div>
        </Container>
    );
};

export default NavigationBar;