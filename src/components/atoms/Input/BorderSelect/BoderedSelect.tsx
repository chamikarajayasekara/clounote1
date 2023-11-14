import React from 'react';
import Select from 'react-select';
interface BorderedSelectProps {
    label: string;
    options: { value: number; label: string }[];
    onChange: (selectedOption: any) => void;
}

const BoderedSelect: React.FC<BorderedSelectProps> = ({ label, options, onChange }) => {
    return (
        <div className="bordered-select-container-custom">
            <label className="bordered-select-label">{label}</label>
            <div className="bordered-select">
                <Select
                    className="option-control"
                    name={label}
                    id={label}
                    required={true}
                    options={options}
                    onChange={onChange}
                    // value={selectedValues}
                />
            </div>
        </div>
    );
};

export default BoderedSelect;