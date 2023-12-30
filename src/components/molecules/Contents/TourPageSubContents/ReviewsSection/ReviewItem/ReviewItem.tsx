import React from 'react';

const ReviewItem = ({image, user, comment, date}:{ image:string, user:string, comment: string, date:string}) => {
    return (
        <div className='review-item'>
            <img src={image} alt=""/>
            <div className="comment">
                <h5>{user}</h5>
                <p>{comment}</p>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default ReviewItem;