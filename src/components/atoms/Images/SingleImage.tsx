
import React from 'react';

const SingleImage = ({ src, alt , styleSet}: { src: string; alt: string; styleSet: string }) => {
    const backgroundStyle = {
        backgroundColor: 'transparent',
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box',
        backgroundSize:'cover'
    };
    return(
        <div className={styleSet} style={backgroundStyle}></div>
    );
};
export default SingleImage;