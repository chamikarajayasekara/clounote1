import React from 'react';
import Select from "react-select";


interface RoundedSelectProps {
    label: string;
    options: { value: number; label: string }[];
    onChange: (selectedOption: any) => void;
    image: string | null,
    placeholder:string
}

const RoundedSelect : React.FC<RoundedSelectProps> = ({ label, options, onChange, image,placeholder }) =>{
    return (
        <div className={image ? 'rounded-select-container-custom' : 'rounded-select-container-custom-small'}>
            <label className="rounded-select-label">{label}</label>
            <div className="rounded-select d-flex justify-content-center align-items-center">
                {image &&  <img src={image} alt="user" width={20} height={20}/>}
                <Select
                    className="option-control"
                    name={label}
                    id={label}
                    required={true}
                    options={options}
                    onChange={onChange}
                    placeholder={placeholder}
                    // value={selectedValues}
                />
            </div>
        </div>
    );
};

export default RoundedSelect;