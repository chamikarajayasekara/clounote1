
import React, {useEffect, useState} from 'react';

const SingleImage = ({ src, alt , styleSet, handleShow}: { src: string; alt: string; styleSet: string ,handleShow: () => void }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    const backgroundStyle = {
        backgroundColor: 'transparent',
        backgroundImage: loaded ? `url(${src})` : 'none',
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box',
        backgroundSize:'cover'
    };

    return(
        <div className={styleSet} style={backgroundStyle} onClick={()=> handleShow()}>
            <div className="overlay"></div>
            {
                styleSet === 'right-bottom-right-img' ? <div className="image-count" onClick={()=> handleShow()}><span>4/12</span></div> : null
            }
        </div>
    );
};
export default SingleImage;