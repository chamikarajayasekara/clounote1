import React from 'react';
import Banner2 from "../../../organisms/Banners/Banner2/Banner2";
import SocialSection from "../../../organisms/Contents/AboutUsSubContent/SocialSection";
import  Banner from "../../../../assets/aboutus-banner.png";
import {Col, Row} from "react-bootstrap";
import RentATukTukContent from "../../../organisms/Contents/RentATukTukContent/RentATukTukContent";
import image from "../../../../assets/aboutUs3.png";

export interface SocialMedia {
    logo: string;
    name: string;
    alt: string;
    url: string;
}
export interface  Highlight {
    label: string;
    name: string;
}
interface AboutExploreProps {
    header:string,
    description: string,
    imageUrl:string,
    story: { header:string,stories:string[] },
    subHeading1:string,
    subDescription:string,
    socialMedia:SocialMedia[],
    highlights:Highlight[],
    talkUs:{
        heading1:string,
        heading2:string,
        heading3:string,
        heading4:string,
        heading5:string,
        buttonText:string,
        url:string,
        heading1Mobile:string,
        heading2Mobile:string,
    }
}
const AboutUsExplore:React.FC<AboutExploreProps> = ({header, description,imageUrl, story,subHeading1, subDescription,socialMedia, highlights, talkUs}) => {
    return (
        <div>
            <h2>{header}</h2>
            <div className="description-section">
                <p>{description}</p>
            </div>
            <div className="banner-section">
                <img src={Banner} alt="" className="img-banner-about-us"/>
            </div>
            <Row>
                    {
                        highlights.map((highlight, index) => (
                            <Col lg={4} md={12}>
                                <div className="highlights-aboutus">
                                    <h5>{highlight.label}</h5>
                                    <p>{highlight.name}</p>
                                </div>
                            </Col>
                        ))
                    }
            </Row>
            <div className="sub-heading-content">
                <h5>{story.header}</h5>
                {
                    story.stories.map(content => (
                        <p className={'our-story-text'}>{content}</p>
                    ))
                }
            </div>
            <div className="rent-a-tuk w-100">
                <RentATukTukContent
                    heading1={talkUs.heading1}
                    heading2={talkUs.heading2}
                    heading3={talkUs.heading3}
                    heading4={talkUs.heading4}
                    buttonText={talkUs.buttonText}
                    url={image}
                    heading1Mobile={talkUs.heading1Mobile}
                    heading2Mobile={talkUs.heading2Mobile}
                    heading5={talkUs.heading5}
                />
            </div>
            <SocialSection subHeading1={subHeading1} subDescription={subDescription} socialMedia={socialMedia}/>
        </div>
    );
};

export default AboutUsExplore;