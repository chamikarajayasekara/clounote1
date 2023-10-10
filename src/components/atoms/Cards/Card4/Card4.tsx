import React from 'react';
import StarRatings from 'react-star-ratings';
import Rating from "../../Rating/Rating";
import locationimg from "../../../../assets/location.png";


interface Props {
    image:string,
    content1:any,
    rating:string,
    category: string,
    price: string,
    location:string,
    unit:string
}

const Card4 :React.FC<Props>= ({image,content1, rating, category, location, price, unit}) => {

    return (
        <div className="img-background-card-4" >
            <img src={image} alt="" className="img-section"/>
            <div className="content-section-card4">
                <div className="content1">
                    <span className="hotel-name">
                        <Rating rate={rating} space={'2px'} widths={'12px'} color={'#FF8300'}/>
                    </span>
                    <span className="hotel-category">{category}</span>
                </div>
                <div className="content2">{content1}</div>
                <div className="content3">
                      <span className="location">
                        <img src={locationimg} alt="" className='location-img'/>{location}
                    </span>
                    <div className="price-sec">
                        <span className="price">{price}</span>&nbsp;<span className="unit">/{unit}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card4;