import React from 'react';


interface Image {
    url:string
}
const RentATukRightSideContent:React.FC<Image> = ({url}) => {
    return (
        <div className="right-side-content">
            <img src={url} alt="" className="wheel-img"/>
        </div>
    );
};

export default RentATukRightSideContent;