import React, {useState} from 'react';
import AboutUsExplore from "../../components/templates/AboutUsPageTemplate/ExploreSection/AboutUsExplore";
import {AboutUsDataset} from "../../utils/json/AboutUsDataset/AboutUsDataset";
import MobileMenu from "../../components/molecules/MenuSection/MobileMenu/MobileMenu";
import MobileDrawer from "../../components/organisms/MobileDarwer/MobileDrawer";

const AboutUs = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <div className="about-us">
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
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
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </div>
    );
};

export default AboutUs;