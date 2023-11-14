import React from 'react';
import {ImageArray} from "../../../utils/json/ToursPageDataset/ToursPageData";

const CollageGallery = ({images, handleImageClick}: {images: ImageArray, handleImageClick: (index:number)=> void}) => {
    return (
        <div className="collage-gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img loading="lazy" src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(index)} />
                </div>
            ))}
        </div>
    );
};

export default CollageGallery;