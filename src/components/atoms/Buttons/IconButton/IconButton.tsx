import React from 'react';

interface Props {
    name:string,
    onClick?: () => void;
    icon:string
    width:number
    height:number
}
const IconButton:React.FC<Props>= ({ onClick, icon, name, width, height}) => {
    return (
        <img src={icon} alt={name} onClick={onClick} width={width} height={height} className="icon-button"/>
    );
};

export default IconButton;