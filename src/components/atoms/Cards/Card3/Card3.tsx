import React from 'react';
interface Props {
    image:string,
    content1:any,
    content2: any
}
const Card3 :React.FC<Props>= ({image,content1,  content2}) => {
    const backgroundStyle = {
        backgroundColor: 'transparent',
        backgroundImage: `url(${image})`,
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box'
    };
    return (
        <div className="img-background-card-3" style={backgroundStyle}>
            <div className="content-section">
                <div className="content1">{content1}</div>
                <div className="content2"> {content2}</div>
            </div>
        </div>
    );
};

export default Card3;