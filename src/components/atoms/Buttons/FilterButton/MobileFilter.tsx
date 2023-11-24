import React from 'react';

interface MobileFilterProps {
    label:string,
    badgeCount:string,
    onClick: () => void,
    image:string
}
const MobileFilter:React.FC<MobileFilterProps> = ({label,badgeCount, onClick,image}) => {
    return (
        <div className="mobile-filter-btn" onClick={onClick}>
            <span className="label">{label}</span>
            {image &&  <img src={image} alt="" width={24} height={24}/>}
            {badgeCount &&   <div className="badge"><span className="count">{badgeCount}</span></div>}
        </div>
    );
};

export default MobileFilter;