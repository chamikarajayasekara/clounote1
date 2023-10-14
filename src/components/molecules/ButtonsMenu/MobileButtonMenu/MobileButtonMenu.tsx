import React from 'react';
import {useNavigate} from "react-router-dom";
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import search from "../../../../assets/search.png";
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";

const MobileButtonMenu = () => {
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
        <div className="menu-section-buttons-mobile">
            <div className={`list-styles active-class `} >
                <div className="menu-item">
                    <FlatRoundButton name={'whiteButtonFull'} text={'Login'} onClick={()=>handleLogin()}/>
                    <div style={{ marginBottom: '12px' }}></div>
                    <FlatRoundButton name={'greenButtonFull'} text={'Register'} onClick={()=>handleRegister()}/>
                </div>
            </div>
        </div>
    );
};

export default MobileButtonMenu;