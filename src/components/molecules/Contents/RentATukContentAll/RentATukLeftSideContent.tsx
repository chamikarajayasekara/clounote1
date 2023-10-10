import React from 'react';
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";

const RentATukLeftSideContent = () => {
    return (
        <div className="left-side-content">
            <h1>Rent a <br/> Tuk Tuk?</h1>
            <p>We provide tourists transportation services with the <br/> highest quality and best price </p>
            <FlatRoundButton name={'greenButtonBig'} text={'Explore'} onClick={() => {}}/>
        </div>
    );
};

export default RentATukLeftSideContent;