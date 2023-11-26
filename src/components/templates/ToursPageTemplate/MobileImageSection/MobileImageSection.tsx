import React, {useEffect, useState} from 'react';
import SingleImage from "../../../atoms/Images/SingleImage";

import MobileMenu from "../../../molecules/MenuSection/MobileMenu/MobileMenu";
import LocationInfo from "../LocationInfo/LocationInfo";
import PpBadge from "../../../atoms/Badges/PPBadge/PPBadge";
import SmallCard from "../../../atoms/Cards/SmallCard/SmallCard";

const MobileImageSection = ({handleShow, handleOpenDrawer,  src,mobileCards}:{handleShow: () => void, handleOpenDrawer:() => void, src:string, mobileCards:{icon:string, content:string}[] }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    const backgroundStyle = {
        backgroundColor: 'transparent',
        backgroundImage: loaded ? `url(${src})` : 'none',
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box',
        backgroundSize:'cover'
    };
    return (
        <div className="mobile-tour-details-section" style={backgroundStyle}>
            <MobileMenu handleOpenDrawer={handleOpenDrawer}/>
            <div className="content-box">
                <h4>Knuckles Spice Trail Trek  From Kandy</h4>
                <div className="">
                    <LocationInfo locationName="Knuckles, Sri Lanka" isMobile={true} />
                </div>
                <div className="mt-4">
                    <PpBadge content1={'$169'} content2={'USD pp'} />
                </div>
                <div className="d-flex small-cards-section">
                {
                    mobileCards.map((mobilecard, index) => (
                            <SmallCard content={mobilecard.content} icon={mobilecard.icon}/>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default MobileImageSection;