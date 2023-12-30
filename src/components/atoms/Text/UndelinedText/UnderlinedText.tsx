import React from 'react';

const UnderlinedText = ({text, onClick, style}:{text:string, onClick: ()=> void, style:string}) => {
    return (
       <p className={style ? style : 'underlinedtext'} onClick={onClick}>{text}</p>
    );
};

export default UnderlinedText;