import React, {useEffect, useState} from 'react';
import IconButton from "../../atoms/Buttons/IconButton/IconButton";
import fb from "../../../assets/fb3.png";
import yt from "../../../assets/yt2.png";
import twt from "../../../assets/tit.png";
import fbb from "../../../assets/fbb.png";
import ytb from "../../../assets/ytb.png";
import twtb from "../../../assets/tb.png";
const SocialMediaMenu = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollPassed, setScrollPassed] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{

        if (isMobile){
            if (scrollTop <= 1230){
                setScrollPassed(true)
            }else if(scrollTop > 1231 && scrollTop < 1879){
                setScrollPassed(false)
            }else if (scrollTop > 1881 && scrollTop < 3116){
                setScrollPassed(true)
            }else if (scrollTop > 3200){
                setScrollPassed(false)
            }
        }else {
            if (scrollTop <= 325){
                setScrollPassed(false)
            }else if(scrollTop > 325 && scrollTop < 1890){
                setScrollPassed(true)
            }else if (scrollTop > 1891 && scrollTop < 2510){
                setScrollPassed(false)
            }else if (scrollTop > 2511 && scrollTop < 4489){
                setScrollPassed(true)
            }else if (scrollTop > 4490){
                setScrollPassed(false)
            }
        }

    },[scrollTop])
    return (
        <div  className={'social-media'} >
            {
                !scrollPassed ?
                    <>
                        <div className="social-media-icon">
                            <IconButton icon={fb} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                        <div  className="social-media-icon">
                            <IconButton icon={yt} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                        <div  className="social-media-icon">
                            <IconButton icon={twt} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                    </>
                    :
                    <>
                        <div className="social-media-icon">
                            <IconButton icon={fbb} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                        <div  className="social-media-icon">
                            <IconButton icon={ytb} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                        <div  className="social-media-icon">
                            <IconButton icon={twtb} height={15} width={15} name={'fb'} onClick={() => {}}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default SocialMediaMenu;