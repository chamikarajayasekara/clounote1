import React from 'react';
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";
import MobileButton from "../../../atoms/Buttons/FlatButton/MobileButton/MobileButton";

const RentATukLeftSideContent = () => {
    return (
        <div className="left-side-content">
            <h1>Rent a <br/> Tuk Tuk?</h1>
            <h2>Rent a Tuk Tuk?</h2>
            <p>We provide tourists transportation services with the <br/> highest quality and best price </p>
            <div className="explore">
                <FlatRoundButton name={'greenButtonBig'} text={'Explore'} onClick={() => {}}/>
            </div>
            <div className="explore-mobile">
                <MobileButton name={'mobile-button'} text={'Explore'}  onClick={() => {}}/>
            </div>
        </div>
    );
};

export default RentATukLeftSideContent;