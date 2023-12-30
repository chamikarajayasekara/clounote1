import React from 'react';
import { Form } from 'react-bootstrap';

interface ReusableRadioInputProps {
    label: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioInput: React.FC<ReusableRadioInputProps> = (
    {
        label,
        options,
        selectedValue,
        onChange,
    }
) => {
    return (
        <Form.Group className="radio-input">
            <Form.Label>{label}</Form.Label>
            <div>
                {options.map((option) => (
                    <Form.Check
                        key={option.value}
                        type="radio"
                        id={option.value}
                        label={option.label}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                    />
                ))}
            </div>
        </Form.Group>
    );
};

export default RadioInput;