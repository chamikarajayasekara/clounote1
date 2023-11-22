import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import {IMultiRangeSliderProps} from "../../../../pages/Tours/PackageTours/PackageTours";

interface MultiRangeSliderProps {
    label: string;
    min: number;
    max: number;
    rangeValue:string;
    setSelectedPriceRange: React.Dispatch<React.SetStateAction<IMultiRangeSliderProps>>;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max,rangeValue, label,setSelectedPriceRange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback((value: number) =>
        Math.round(((value - min) / (max - min)) * 100), [min, max])

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
        setSelectedPriceRange({min:minVal, max:maxVal});
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
        setSelectedPriceRange({min:minVal, max:maxVal});
    }, [maxVal, getPercent]);

    return (
        <div className="range-comp">

            <h3>{label}</h3>
            <div className="range-text">{"$"+`${minVal}`+' - '+"$"+`${maxVal}`}</div>

            <div className="multi-range">

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="slider">
                    <div className="slider__track"></div>
                    <div ref={range} className="slider__range"></div>
                    {/*<div className="slider__left-value">{minVal}</div>*/}
                    {/*<div className="slider__right-value">{maxVal}</div>*/}
                </div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
