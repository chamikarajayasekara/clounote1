import React from 'react';
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";

interface BannerProps {
    width?: string ;
    height?: string;
    imageUrl?: string;
    header?: string;
    description?: string;
    buttonDescription?: string;
    leftSideLength?: string;
    descriptionSideBorder?:boolean;
    h1FontSize?:string;
    h1LineHeight?:string;
    borderRadius:string,
    paddingTop:string,
    paddingLeft:string,
}
const Banner2:React.FC<BannerProps> = ({ width,height,header, imageUrl,description,buttonDescription,leftSideLength, borderRadius , paddingLeft,paddingTop, descriptionSideBorder, h1FontSize,h1LineHeight}) => {
    const bannerStyle: React.CSSProperties = {
        width: width,
        height: height,
        background: `url(${imageUrl}) center/cover`,
        borderRadius: borderRadius,
        objectFit: "cover"
    };

    const contentStyle: React.CSSProperties = {
        zIndex: 2,
        width: leftSideLength,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft
    };
    const H1Style: React.CSSProperties = {
        width: leftSideLength,
        fontSize: h1FontSize ? h1FontSize : '38px',
        lineHeight:h1LineHeight ? h1LineHeight : '42px',
    };


    return (
        <div style={bannerStyle} className="banner2">
            <div className="description-side-2" >
                <div style={contentStyle} className="banner-contents-2">
                    {header && <h1 style={H1Style}>{header}</h1>}
                    <div className="mt-4">
                        {buttonDescription &&  <FlatRoundButton name={'whiteBlackBanner2'} text={buttonDescription}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;