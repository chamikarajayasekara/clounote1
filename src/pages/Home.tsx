import React from 'react';
import HomePageHeroSection from "../components/templates/HomePagetemplates/HomePageHeroSection/HomePageHeroSection";
import ThingsToDoSection from "../components/templates/HomePagetemplates/ThingsToDoSection/ThingsToDoSection";
import SocialMediaMenu from "../components/molecules/SocialMediaMenu/SocialMediaMenu";
import TopToursSection from "../components/templates/HomePagetemplates/TopToursSection/TopToursSection";
import RentATukTukSection from "../components/templates/HomePagetemplates/RentATukTukSection/RentATukTukSection";
import LocalCraftsSection from "../components/templates/HomePagetemplates/LocalCraftsSection/LocalCraftsSection";
import HotelsSection from "../components/templates/HomePagetemplates/HotelsSection/HotelsSection";
import WhatOtherSayingSection
    from "../components/templates/HomePagetemplates/WhatOtherSayingSection/WhatOtherSayingSection";
import Footer from "../components/templates/Footer/Footer";
import Test from "../components/templates/Test/Test";
import CardCarouselTest from "../components/templates/Test/Test";
import VariableWidth from "../components/templates/Test/Test";

const Home = () => {
    return (
        <div className="home">
            <HomePageHeroSection/>
            <ThingsToDoSection/>
            <TopToursSection/>
            <RentATukTukSection/>
            <LocalCraftsSection/>
            <HotelsSection/>
            <WhatOtherSayingSection/>
            <Footer/>
            <SocialMediaMenu/>
        </div>
    );
};

export default Home;