import React, {useEffect, useRef, useState} from 'react';
import {IPricing} from "../../../../../utils/json/ToursPageDataset/ToursPageData";
import PriceSelectorCard from "../../../../molecules/CardsMenu/PriceSelectorCard/PriceSelectorCard";

const ToursPageLowerRight = ({pricing}:{pricing:IPricing}) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollPassed, setScrollPassed] = useState(false);
    const [isAbsolute, setIsAbsolute] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);

            const currentWidth = window.innerWidth;
            const isMobile = currentWidth <= 768;

            if (isMobile) {
                setIsMobile(true);
                setScrollPassed(false);
                setIsAbsolute(false);
            }else{
                if (scrollTop < 853) {
                    setScrollPassed(false);
                } else if (scrollTop > 854 && scrollTop < 3165) {
                    setScrollPassed(true);
                    setIsAbsolute(false);
                }else if (scrollTop > 3165 && scrollTop < 3764 ){
                    setIsAbsolute(true);
                    setScrollPassed(false);
                }
                else if (scrollTop > 3165) {
                    setScrollPassed(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrollTop]);

    function generateCSS() {
        if (scrollPassed) {
            return 'd-flex fixed-styles justify-content-end';
        } else if (isAbsolute) {
            return 'd-flex absolute-styles justify-content-end';
        }else if (isMobile) {
            return 'd-flex justify-content-end';
        }else{
            return 'd-flex justify-content-end';
        }
    }



    return (
        <div className={generateCSS()} >
            <PriceSelectorCard pricing={pricing} />
        </div>
    );
};

export default ToursPageLowerRight;