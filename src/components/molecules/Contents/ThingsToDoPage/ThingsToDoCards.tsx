import React from 'react';
import PackageCardHotels from "../../../atoms/Cards/PackageCradSquare/PackageCardHotels";
import heart2 from "../../../../assets/heart2.svg";

interface Props {
    title:string, packages:string, images:string[]
}
const ThingsToDoCards:React.FC<Props>= ({
    title,
    packages,
    images
}) => {
    return (
        <div className="things-to-do-card">
            <PackageCardHotels images={images}/>
            <img src={heart2} alt="rating" width={24} height={24} className="cursor-pointer whishlist"/>
            <div className="card-content-things-to-do ">
                <h6>{title}</h6>
                <p>{packages}</p>
            </div>
        </div>
    );
};

export default ThingsToDoCards;