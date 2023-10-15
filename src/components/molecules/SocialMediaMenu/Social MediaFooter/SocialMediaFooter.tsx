import React from 'react';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import fb from "../../../../assets/facebook.svg";
import yt from "../../../../assets/youtube.svg";
import twt from "../../../../assets/tit.png";
import li from "../../../../assets/linkedin.svg";
import ig from "../../../../assets/instagram (1).svg";
import taa from "../../../../assets/tripadvisor-logotype.svg";

const SocialMediaFooter = () => {
    return (
        <div className="social-media-footer">
            <span className="ml-8">
                 <IconButton icon={fb} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-8">
            <IconButton icon={yt} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-8">
            <IconButton icon={li} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-8">
            <IconButton icon={ig} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-8">
            <IconButton icon={taa} height={21} width={21} name={'fb'} onClick={() => {}}/>
            </span>
        </div>
    );
};

export default SocialMediaFooter;