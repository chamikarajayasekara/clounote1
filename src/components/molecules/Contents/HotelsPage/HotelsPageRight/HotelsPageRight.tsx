import React from 'react';
import PackageCardHotels from "../../../../atoms/Cards/PackageCradSquare/PackageCardHotels";
import heart2 from "../../../../../assets/heart2.svg";

interface HotelPageRightSection {
    title:string,
    name:string,
    time:string,
    price:string,
    images:string[]
}

const HotelsPageRight:React.FC<HotelPageRightSection> = ({title,name,time, price, images}) => {
    return (
        <div className="hotel-page-right-section ">
            <PackageCardHotels images={images}/>
            <img src={heart2} alt="rating" width={24} height={24} className="cursor-pointer whishlist"/>
            <div className="card-content">
                <h6>{title}</h6>
                <p className="name">{name}</p>
                <p className="name">{time}</p>
                <p className="price">{price}<span className="item">night</span></p>
            </div>
        </div>
    );
};

export default HotelsPageRight;