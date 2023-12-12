import React from 'react';
import {SocialMedia} from "../../../templates/AboutUsPageTemplate/ExploreSection/AboutUsExplore";
import {Row} from "react-bootstrap";


interface SocialSection {
    subHeading1:string,
    subDescription:string,
    socialMedia:SocialMedia[]
}
const SocialSection:React.FC<SocialSection> = ({subHeading1, subDescription, socialMedia}) => {
    return (
        <div className="about-us-social-media">
            <h5>{subHeading1}</h5>
            <p>{subDescription}</p>
            <div  className={'social-media-card'}>
                {
                    socialMedia.map((social,index) => (
                        <div className={"social-card-box"} key={index}>
                            <div className="social-card" >
                                <img src={social.logo} alt=""/>
                            </div>
                            <div className="link">
                                <h6>{social.name}</h6>
                                <p>{social.alt}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SocialSection;