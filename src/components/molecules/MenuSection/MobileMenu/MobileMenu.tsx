import React, {useEffect} from 'react';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import menu from "../../../../assets/menu_black_24dp.svg";
import search from "../../../../assets/Path 101.svg"
import back from "../../../../assets/back34.svg"
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../../atoms/Logo/Logo";
import {useLocation, useNavigate} from "react-router-dom";

interface Props {
    handleOpenDrawer:() => void
}
const MobileMenu = (props:Props) => {
    const [isHome, setIsHome] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if (location.pathname.split('/')[1] === ""){
            setIsHome(true)
        }
    },[location]);

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <Container className="mobile-nav">
            <div className="logo-section">
                {
                    isHome ?
                        <Logo/>
                        :
                        <IconButton name={'back'} icon={back} width={50} height={50} onClick={handleBack}/>

                }
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