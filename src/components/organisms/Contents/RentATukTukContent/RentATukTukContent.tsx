import React from 'react';
import RentATukLeftSideContent from "../../../molecules/Contents/HomePageSubContents/RentATukContentAll/RentATukLeftSideContent";
import RentATukRightSideContent from "../../../molecules/Contents/HomePageSubContents/RentATukContentAll/RentATukRightSideContent";

interface RentATukProps {
    heading1:string,
    heading4:string,
    buttonText:string,
    url:string,
    heading3:string,
    heading2:string,
    heading1Mobile:string,
    heading2Mobile:string,
    heading5?:string,
    navigateURL:string
}
const RentATukTukContent:React.FC<RentATukProps> = ({heading1, heading4, buttonText, url, heading3, heading2, heading2Mobile,heading1Mobile, heading5,navigateURL}) => {
    return (
        <>
            <RentATukLeftSideContent heading1={heading1} heading4={heading4} buttonText={buttonText} heading3={heading3} heading2={heading2} heading1Mobile={heading1Mobile} heading2Mobile={heading2Mobile} navigateURL={navigateURL} heading5={heading5? heading5 : ''}/>
            <RentATukRightSideContent url={url}/>
        </>
    );
};

export default RentATukTukContent;