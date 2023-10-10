import React from 'react';

interface Props {
    index: number
}
const MainHeroContent = (props:Props) => {
    const {index} = props
    return (
        <div className="carousel-content-1">
            {
                index === 0 ?    <span>The Knuckles Mountain Range</span> : null
            }
            {
                index === 1 ?    <span>Worlds Beautiful train ride</span> : null
            }
            {
                index === 2 ?    <span>Most Attractive beaches</span> : null
            }
        </div>
    );
};

export default MainHeroContent;