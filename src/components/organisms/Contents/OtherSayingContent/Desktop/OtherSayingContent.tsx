import React from 'react';
import  image from '../../../../../assets/haha.jpg'
import OtherSayingLeft from "../../../../molecules/Contents/HomePageSubContents/OtherSayingContentAll/OtherSayingLeft";
import OtherSayingRight from "../../../../molecules/Contents/HomePageSubContents/OtherSayingContentAll/OtherSayingRight";


const OtherSayingContent = () => {
    const backgroundStyle = {
        backgroundColor: 'transparent',
        backgroundImage: `url(${image})`,
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box',
        backgroundSize: 'cover'
    };
    return (
        <div className="other-saying" style={backgroundStyle}>
            <OtherSayingLeft/>
            <OtherSayingRight/>
        </div>
    );
};

export default OtherSayingContent;