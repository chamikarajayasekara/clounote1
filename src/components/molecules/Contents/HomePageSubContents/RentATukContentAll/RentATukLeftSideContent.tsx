import React from 'react';
import FlatRoundButton from "../../../../atoms/Buttons/FlatButton/FlatRoundButton";
import MobileButton from "../../../../atoms/Buttons/FlatButton/MobileButton/MobileButton";

interface Props {
    heading1:string,
    heading2:string,
    heading3:string,
    heading4:string,
    buttonText:string,
    heading1Mobile:string,
    heading2Mobile:string,
    heading5?:string
}
const RentATukLeftSideContent:React.FC<Props> = ({heading1, heading4, buttonText,heading3, heading2, heading1Mobile, heading2Mobile,heading5}) => {
    return (
        <div className="left-side-content">
            <h1>{heading1}<br/>{heading2}</h1>
            <h2>{heading1Mobile}</h2>
            <span>{heading3}<br/>{heading4} </span><br/>
            {
                heading5 ? <span>{heading5}</span> : null
            }
            <span className="mobile-span">{heading2Mobile}</span>
            <div className="explore">
                <FlatRoundButton name={'greenButtonBig'} text={buttonText} onClick={() => {}}/>
            </div>
            <div className="explore-mobile">
                <MobileButton name={'mobile-button'} text={buttonText}  onClick={() => {}}/>
            </div>
        </div>
    );
};

export default RentATukLeftSideContent;