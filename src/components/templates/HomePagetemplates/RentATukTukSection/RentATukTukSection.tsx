import React from 'react';
import RentATukTukContent from "../../../organisms/Contents/RentATukTukContent/RentATukTukContent";
import tuktuk from "../../../../assets/3wl.jpg";

const RentATukTukSection = () => {
    return (
        <div className="rent-a-tuk">
            <RentATukTukContent
                heading1={`Roll with the`}
                heading2={`rentals!`}
                heading3={'We provide transportation services with the'}
                heading4={'highest quality and best price.'}
                buttonText={'Explore'}
                url={tuktuk}
                heading1Mobile={'Roll with the rentals!'}
                heading2Mobile={'We provide transportation services with the highest quality and best price.'}
                navigateURL={'/things-to-do/things-to-do-details?category=Tuk Tuk Tours'}
            />
        </div>
    );
};

export default RentATukTukSection;