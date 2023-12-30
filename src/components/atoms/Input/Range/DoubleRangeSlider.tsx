import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface DoubleRangeSliderProps {
    min: number;
    max: number;
    step: number;
    onChange: (values: [number, number]) => void;
}

const DoubleRangeSlider: React.FC<DoubleRangeSliderProps> = ({ min, max, step, onChange }) => {
    const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);

    const handleRangeChange = (index: number, value: number) => {
        const newValues = [...rangeValues];
        newValues[index] = value;
        // setRangeValues(newValues);
        // onChange(newValues);
    };

    return (
        <Form.Group>
            <Form.Label>Price Range:</Form.Label>
            <Form.Control
                type="range"
                min={min}
                max={max}
                step={step}
                value={rangeValues[0]}
                onChange={(e) => handleRangeChange(0, parseInt(e.target.value))}
            />
            <Form.Control
                type="range"
                min={min}
                max={max}
                step={step}
                value={rangeValues[1]}
                onChange={(e) => handleRangeChange(1, parseInt(e.target.value))}
            />
            <Form.Text>{`Price Range: $${rangeValues[0]} - $${rangeValues[1]}`}</Form.Text>
        </Form.Group>
    );
};

export default DoubleRangeSlider;
