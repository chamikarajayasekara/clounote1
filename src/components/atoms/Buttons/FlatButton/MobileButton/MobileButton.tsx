import React from 'react';

interface Props {
    name:string,
    onClick?: () => void;
    text:string
}
const MobileButton:  React.FC<Props>  = ({name, onClick, text}) => {
    return (
        <button className={'mobile-button-1'} onClick={onClick}>
            {text}
        </button>
    );
};

export default MobileButton ;