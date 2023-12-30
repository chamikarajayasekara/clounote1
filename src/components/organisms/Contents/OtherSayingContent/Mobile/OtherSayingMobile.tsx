import React from 'react';
import  image from '../../../../../assets/laugh.png'
import {Container} from "react-bootstrap";
import FlatRoundButton from "../../../../atoms/Buttons/FlatButton/FlatRoundButton";
const OtherSayingMobile = () => {
    return (
        <Container  className="other-saying-mobile">
            <div className="top-section">
                <div className="inside-box">
                    <h4>What others are saying</h4>
                    <p>One of the most beautiful, vivid and serene landscapes in the world. Immerse oneself in a heavenly experience. Can appreciate the beauty of nature to the max.</p>
                    <FlatRoundButton name={'greenButton3'} text={'See All'} onClick={()=>{}}/>
                </div>
            </div>
            <div className="bottom-section">
                <img src={image} alt="other-saying-mobile"/>
            </div>
        </Container>
    );
};

export default OtherSayingMobile;