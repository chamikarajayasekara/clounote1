import React, {FC} from 'react';
import FlatRoundButton from "../../../atoms/Buttons/FlatButton/FlatRoundButton";
interface BannerProps {
    width?: string ;
    height?: string;
    imageUrl?: string;
    header?: string;
    description?: string;
    buttonDescription?: string;
    leftSideLength?: string;
    borderRadius:string,
    paddingTop:string,
    paddingLeft:string,
}
const Banner1 : React.FC<BannerProps> = ({width,height,header, imageUrl,description,buttonDescription,leftSideLength, borderRadius , paddingLeft,paddingTop }) => {
    const bannerStyle: React.CSSProperties = {
        width: width,
        height: height,
        background: `url(${imageUrl}) center/cover`,
        borderRadius: borderRadius
    };;

    const contentStyle: React.CSSProperties = {
        zIndex: 2,
        width: leftSideLength,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft
    };
    const H1Style: React.CSSProperties = {
        width: leftSideLength,
    };


    return (
        <div style={bannerStyle} className="banner1">
            <div className="description-side">
                <div style={contentStyle} className="banner-contents">
                    {header && <h1 style={H1Style}>{header}</h1>}
                    {description && <p>{description}</p>}
                    <div className="mt-4">
                        {buttonDescription &&  <FlatRoundButton name={'greenButtonBig'} text={buttonDescription}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;