import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import FlatRoundButton from "../../atoms/Buttons/FlatButton/FlatRoundButton";
import IconButton from "../../atoms/Buttons/IconButton/IconButton";
import search from "../../../assets/search.png";

const ButtonsMenuSection = () => {
    const navigate = useNavigate();
    const sayHi = () => {
        console.log("sayHi")
    }
    function handleLogin() {
        navigate('/login');
    }
    function handleRegister() {
        navigate('/register');
    }
    return (
        <div className="menu-section-buttons">
            <div className={`list-styles active-class `} >
                <div className="menu-item">
                    <IconButton icon={search} name={'search'} onClick={()=>sayHi()} width={17} height={17}/>
                    <span style={{ marginLeft: '25px' }}></span>
                    <FlatRoundButton name={'whiteButton'} text={'Login'} onClick={()=>handleLogin()}/>
                    <span style={{ marginLeft: '15px' }}></span>
                    <FlatRoundButton name={'greenButton'} text={'Register'} onClick={()=>handleRegister()}/>
                </div>
            </div>
        </div>
    );
};

export default ButtonsMenuSection;