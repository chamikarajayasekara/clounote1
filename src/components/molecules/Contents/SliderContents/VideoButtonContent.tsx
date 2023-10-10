import React from 'react';
import vw from "../../../../assets/wv.png";

const VideoButtonContent = () => {
    return (
        <div className="d-flex align-items-center">
            <img src={vw} alt="" width={38} height={38}/>
            <span className={'watch-video'}>Watch Video</span>
        </div>
    );
};

export default VideoButtonContent;