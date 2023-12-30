import React, {useEffect, useState} from 'react';
import {IPriceListItem, IPricing} from "../../../../utils/json/ToursPageDataset/ToursPageData";
import star from '../../../../assets/Star 1.svg';
import BorderedSelect from "../../../atoms/Input/BorderSelect/BoderedSelect";

const PriceSelectorCard = ({pricing}:{pricing:IPricing}) => {

    const [numberOfGuest, setNumberOfGuest] = useState(0);
    const [guestPrice, setGuestPrice] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        setGuestPrice( numberOfGuest * pricing.pp)
    },[numberOfGuest])

    useEffect(()=>{
        console.log(guestPrice )
        if (guestPrice > 0){
            setTotal(getTotalValue(pricing.priceList) +guestPrice )
        }
    },[guestPrice])

    const handleChange = (selectedOption: any) => {
        setNumberOfGuest(selectedOption.value)
    };

    function findMinusValue(number:number) {
        return number < 0;
    }

    function getTotalValue(priceList:IPriceListItem[]) {
        return priceList.reduce((total, item) => total + item.price, 0);
    }
    return (
        <div className="price-card">
            <div className="line1 d-flex ">
                <div className="w-50">
                    <span className="pp">${pricing.pp}</span>&nbsp;
                    <span className="pp-1">person</span>
                </div>
                <div className="w-50 d-flex align-items-center justify-content-end">
                    <img src={star} alt="" width={16} height={16}/>&nbsp;
                    <span className="pp-3">{pricing.rate}</span>&nbsp;&nbsp;
                    <span className="pp-2">{pricing.reviews}</span>&nbsp;<span className="pp-2">reviews</span>
                </div>
            </div>
            <button className="contact-us w-100"><span>Contact us</span></button>
            <div className="price-section">
                <h5>Price details</h5>
                <BorderedSelect label={'GUESTS'} options={pricing.guest} onChange={handleChange}/>
                <div className="price-creator">
                    <div className="item-price d-flex align-items-center ">
                        <span className="w-50 d-flex justify-content-start">
                            <span className="text-decoration-underline">{pricing.pp}&nbsp;&times;&nbsp;{numberOfGuest} guests</span>
                        </span>
                        <span className="w-50 d-flex justify-content-end">${guestPrice}</span>
                    </div>
                    {
                        pricing.priceList.map((price, index)=>(
                            <>
                                <div className="item-price d-flex align-items-center ">
                                    <span className="w-50 d-flex justify-content-start">
                                        <span className="text-decoration-underline">{price.item}</span>
                                    </span>
                                    <span className={ findMinusValue(price.price) ? `w-50 d-flex justify-content-end minus-value` : 'w-50 d-flex justify-content-end'}>{price.symbol}{price.price}</span>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="total px-1 d-flex">
                <span className="w-50 d-flex justify-content-start">Total (USD)</span>
                <span className="w-50 d-flex justify-content-end">${total}</span>
            </div>
        </div>
    );
};

export default PriceSelectorCard;