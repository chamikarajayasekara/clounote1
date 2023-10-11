import React, {useState} from 'react';
import NavigationBar from "../../../organisms/NavigationBar/NavigationBar";
import HeroSlider from "../../../organisms/Sliders/HeroSLider/HeroSlider";
import hero1 from "../../../../assets/hss1.png";
import hero2 from "../../../../assets/h3.png";
import hero3 from "../../../../assets/h4.png";
import menu from "../../../../assets/dmb.png";
import MobileDrawer from '../../../organisms/MobileDarwer/MobileDrawer';
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";

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
            <NavigationBar/>
            <HeroSlider images={images}/>
            <div className="drawer-round-button">
                  <div onClick={handleOpenDrawer} className="drawer-button">
                        <IconButton name={'menu'} icon={menu} width={20} height={20}/>
                    </div>
            </div>

            {
                isDrawerOpen ? <MobileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> : null
            }
        </div>
    );
};

export default HomePageHeroSection;