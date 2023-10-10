import React from 'react';
import StarRatings from "react-star-ratings";

interface Props {
    rate:string,
    widths:string,
    space: string
    color: string
}
const Rating :React.FC<Props>= ({  rate, widths, space, color}) => {
    return (
        <StarRatings
            rating={parseInt(rate)}
            starDimension={widths}
            starSpacing={space}
            starRatedColor={color}
        />
    );
};

export default Rating;