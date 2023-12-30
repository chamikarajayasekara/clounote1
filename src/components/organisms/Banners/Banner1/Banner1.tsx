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
    descriptionSideBorder?:boolean;
    h1FontSize?:string;
    h1LineHeight?:string;
    pFont?:string,
    borderRadius:string,
    paddingTop:string,
    paddingLeft:string,
}
const Banner1 : React.FC<BannerProps> = ({width,height,header, imageUrl,description,buttonDescription,leftSideLength, borderRadius , paddingLeft,paddingTop, descriptionSideBorder, h1FontSize,h1LineHeight, pFont }) => {
    const bannerStyle: React.CSSProperties = {
        width: width,
        height: height,
        background: `url(${imageUrl}) center/cover`,
        borderRadius: borderRadius,
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
    const DescriptionSide: React.CSSProperties = {
        borderRadius: descriptionSideBorder ? "20px 0px 0px 20px" : "unset",
    };

    const pStyles: React.CSSProperties = {
        fontSize:pFont
    };

    return (
        <div style={bannerStyle} className="banner1">
            <div className="description-side" style={DescriptionSide}>
                <div style={contentStyle} className="banner-contents">
                    {header && <h1 style={H1Style}>{header}</h1>}
                    {description && <p style={pStyles}>{description}</p>}
                    <div className="mt-4">
                        {buttonDescription &&  <FlatRoundButton name={'greenButtonBig'} text={buttonDescription}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;