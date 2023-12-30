import React from 'react';

interface Props {
    name:string,
    onClick?: () => void;
    text:string
}
const FlatRoundButton:  React.FC<Props> = ({name, onClick, text}) => {

    function classNameGenerator(name:string) {
        if (name === "greenButton") {
            return 'rounded-flat-btn button-green-white'
        } else if (name === "whiteButton") {
            return 'rounded-flat-btn button-white-green'
        } else if (name === 'greenButtonBig') {
            return 'rounded-flat-btn button-green-white-big'
        } else if (name === 'greenButton2') {
            return 'rounded-flat-btn button-green-white-two'
        } else if (name === 'greenButton3') {
            return 'rounded-flat-btn button-green-white-three'
        } else if (name === 'greenButtonFull') {
            return 'rounded-flat-btn button-green-white-full'
        } else if (name === "whiteButtonFull") {
            return 'rounded-flat-btn button-white-green-full'
        } else if (name === "whiteBlackBig") {
            return 'rounded-flat-btn button-black-white-full'
        } else if (name === "whiteBlackBanner2") {
            return 'rounded-flat-btn button-black-white-banner2'
        }
    }

    return (
        <button className={classNameGenerator(name)} onClick={onClick}>
            {text}
        </button>
    );
};

export default FlatRoundButton;