import React from 'react';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import fb from "../../../../assets/fb3.png";
import yt from "../../../../assets/yt2.png";
import twt from "../../../../assets/tit.png";
import li from "../../../../assets/li.png";
import ig from "../../../../assets/ig3.png";
import taa from "../../../../assets/trip.png";

const SocialMediaFooter = () => {
    return (
        <div className="social-media-footer">
            <span className="ml-6">
                 <IconButton icon={fb} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-6">
            <IconButton icon={yt} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-6">
            <IconButton icon={li} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-6">
            <IconButton icon={ig} height={17} width={17} name={'fb'} onClick={() => {}}/>
            </span>
            <span className="ml-6">
            <IconButton icon={taa} height={21} width={21} name={'fb'} onClick={() => {}}/>
            </span>
        </div>
    );
};

export default SocialMediaFooter;