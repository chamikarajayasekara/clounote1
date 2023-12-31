import React, {useState} from 'react';
import NavigationBar from "../../../organisms/NavigationBar/NavigationBar";
import HeroSlider from "../../../organisms/Sliders/HeroSLider/HeroSlider";
import hero1 from "../../../../assets/heros1.jpg";
import hero2 from "../../../../assets/heros2.jpg";
import hero3 from "../../../../assets/heros3.jpg";
import menu from "../../../../assets/dmb.png";
import MobileDrawer from '../../../organisms/MobileDarwer/MobileDrawer';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import MobileMenu from "../../../molecules/MenuSection/MobileMenu/MobileMenu";

const HomePageHeroSection = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        console.log("click")
        setIsDrawerOpen(false);
    };

    const images = [
        hero1,hero2,hero3
    ];

    return (
        <div className="hero-section">
            <HeroSlider images={images}/>
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </div>
    );
};

export default HomePageHeroSection;