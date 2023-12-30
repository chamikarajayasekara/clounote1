import React from 'react';
import {IReviews} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import SubHeader from "../../../../atoms/Text/SubHeader/SubHeader";
import ReviewItem from "./ReviewItem/ReviewItem";
import UnderlinedText from "../../../../atoms/Text/UndelinedText/UnderlinedText";
import Rating from "../../../../atoms/Rating/Rating";

const Reviews = ({ reviews}:{ reviews:IReviews}) => {
    return (
        <div className='reviews'>
            <div className="header">
                <div className="heading">
                    <SubHeader text={reviews.count +"  " +  reviews.name} onClick={() => {}} style={''}/>
                </div>
                <div className="count">
                    <span>{reviews.reviewRate}</span>
                    <div className="star">
                        <Rating rate={'4'} space={'2px'} widths={'16px'} color={'#FFC425'}/>
                        <div className='sub-count'>({reviews.count} reviews)</div>
                    </div>
                </div>
            </div>
            <div className="comments">
                {
                    reviews.comments.map((review, index) => (
                        <ReviewItem
                            key={index}
                            image={review.picture}
                            user={review.name}
                            comment={review.comment}
                            date={review.date}
                        />
                    ))
                }
            </div>
            <div className="underlined-sec">
                <UnderlinedText text={reviews.underlined1} onClick={() => {}} style={'green-underlined-text'}/>
                <UnderlinedText text={reviews.underlined2} onClick={() => {}} style={''}/>
            </div>

        </div>
    );
};

export default Reviews;