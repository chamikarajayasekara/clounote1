import React from 'react';
import FlatRoundButton from "../../../../atoms/Buttons/FlatButton/FlatRoundButton";
const HeadShake = require("react-reveal/HeadShake")

const OtherSayingLeft = () => {
    return (
        <div className="left-side">
            <div className="content-box">
                <h1>What others are saying</h1>
                <p>One of the most beautiful, vivid and serene landscapes in the world. Immerse oneself in a heavenly experience. Can appreciate the beauty of nature to the max.</p>
                <FlatRoundButton name={'greenButtonBig'} text={'See All'} onClick={() => {}}/>
            </div>

        </div>
    );
};

export default OtherSayingLeft;