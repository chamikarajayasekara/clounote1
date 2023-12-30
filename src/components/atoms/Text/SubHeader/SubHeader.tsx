import React from 'react';

const SubHeader = ({text, onClick, style}:{text:string, onClick: ()=> void, style:string}) => {
    return (
        <h4 className={style ? style : 'sub-header'} onClick={onClick}>{text}</h4>
    );
};

export default SubHeader;