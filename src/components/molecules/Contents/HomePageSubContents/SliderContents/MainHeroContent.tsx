import React from 'react';

interface Props {
    index: number
}
const MainHeroContent = (props:Props) => {
    const {index} = props
    return (
        <div className="carousel-content-1">
            {
                index === 0 ?    <span>The rhythm of Knuckles</span> : null
            }
            {
                index === 1 ?    <span>Hunting the unexplored wilderness</span> : null
            }
            {
                index === 2 ?    <span>A unique climate that changes hourly</span> : null
            }
        </div>
    );
};

export default MainHeroContent;