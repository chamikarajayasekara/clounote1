import React from 'react';
import locationimg from "../../../../assets/location.png";
import PPBadge from "../../Badges/PPBadge/PPBadge";

interface Props {
    image:string,
    content1:any,
    location:string,
    price: string,
    category:string,
}

const Card2:React.FC<Props>= ({image,content1,  location, price, category}) => {
    return (
        <div className="full-content-card" >
            <div className="img-content">
                <img src={image} alt="" className="full-content-card-img"/>
            </div>
            <div className="content-section">
                <div className="content1">
                    <span className="content">
                        {content1}
                    </span>
                    <span className="location">
                        <img src={locationimg} alt="" className='location-img'/>{location}
                    </span>
                </div>
                <div className="content2">
                    <PPBadge content1={price} content2={price}/>
                    <span className="category">
                        {category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card2;