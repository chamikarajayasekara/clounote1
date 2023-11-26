import React from 'react';

interface SmallCard {
    content:string,
    icon:string
}
const SmallCard:React.FC<SmallCard> = ({content, icon}) => {
    return (
        <div className="small-card ">
            <img src={icon} alt="" width={24} height={24}/>
            <p className="content4">{content}</p>
        </div>
    );
};

export default SmallCard;