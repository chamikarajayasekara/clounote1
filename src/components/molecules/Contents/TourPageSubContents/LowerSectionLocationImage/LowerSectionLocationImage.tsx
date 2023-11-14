import React from 'react';

const LowerSectionLocationImage = ({location}:{location:string}) => {
    return (
        <div className='location-img-section'>
            <img src={location} alt=""/>
        </div>
    );
};

export default LowerSectionLocationImage;