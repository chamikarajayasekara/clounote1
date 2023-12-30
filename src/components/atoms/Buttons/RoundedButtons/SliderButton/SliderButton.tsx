import React from 'react';


interface Props {
    name:string,
    onClick?: () => void;
    icon:string
    width:number
    height:number
}
const SliderButton:React.FC<Props>= ({ onClick, icon, name, width, height}) => {
    return (
        <button className="slider-button" onClick={onClick}>
            <img src={icon} alt="" className="slider-icon"/>
        </button>
    );
};

export default SliderButton;