import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface RangeProps {
    label: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
    range:string
}

const Range: React.FC<RangeProps> = ({ label, min, max, step, value, onChange, range }) => {
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        onChange(newValue);
    };

    return (
        <Form.Group controlId={`range-${label}`}>
            <Form.Label>
                <h3>{label}</h3>
            </Form.Label>
            <span className="range-text">{range}</span>
            <Form.Control
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleRangeChange}
            />
            <Form.Text>{value}</Form.Text>
        </Form.Group>
    );
};

export default Range;
