import React from 'react';

import {useNavigate} from "react-router-dom";
import AngleRoundedButtons from "../../atoms/Buttons/RoundedButtons/AngleRoundedButtons/AngleRoundedButtons";
import angleLeft from '../../../assets/angleLeft.png';
import angleRight from '../../../assets/angleRight.png';
import button2 from '../../../assets/angle2.svg';
import button3 from '../../../assets/angle3.svg';
import seAll from '../../../assets/navigate_next_black_24dp (3).svg';

interface Props {
    name:string,
    onClick?: () => void;
    noOfItems:number
    toNavigate:string
    handlePrev: ()=> void
    handleNext: ()=> void
}

const SectionHeader:React.FC<Props>= ({ onClick, name, noOfItems, toNavigate, handlePrev, handleNext}) => {
    const navigate = useNavigate()

    function handleNavigate() {
        navigate(toNavigate)
    }
    return (
            <div className="section-header">
                <div className="section-name">
                    <span>{name}</span>
                </div>
                <div className="view-all">
                    <span onClick={handleNavigate}>{`See All `}<img src={seAll} alt="" width={16} height={16}/></span>
                </div>
                <div className="section-controllers">
                    <span onClick={handleNavigate}>Show All ({noOfItems})</span>
                    {/*<AngleRoundedButtons name={'angleLeft'} icon={angleLeft} width={40} height={40} onClick={handlePrev}/>*/}
                    {/*<AngleRoundedButtons name={'angleRight'} icon={angleRight} width={40} height={40} onClick={handleNext}/>*/}
                    <img src={button3} alt="" width={40} height={40} className="slider-button2" onClick={handlePrev} />
                    <span></span>
                    <img src={button2} alt="" width={40} height={40} className="slider-button2"   onClick={handleNext}/>
                </div>
            </div>
    );
};

export default SectionHeader;