import React from 'react';
import AboutUsExplore from "../../components/templates/AboutUsPageTemplate/ExploreSection/AboutUsExplore";
import {AboutUsDataset} from "../../utils/json/AboutUsDataset/AboutUsDataset";

const AboutUs = () => {
    return (
        <div className="about-us">
           <AboutUsExplore
               header={AboutUsDataset.heading}
               description={AboutUsDataset.description}
               imageUrl={AboutUsDataset.imageUrl}
               story={AboutUsDataset.story}
               subHeading1={AboutUsDataset.subHeading1}
               subDescription={AboutUsDataset.subDescription}
               socialMedia={AboutUsDataset.socialMedia}
               highlights={AboutUsDataset.highlights}
               talkUs={AboutUsDataset.talkUs}
           />
        </div>
    );
};

export default AboutUs;