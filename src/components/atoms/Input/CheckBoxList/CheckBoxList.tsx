import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface CheckboxListProps {
    selectedOptions: string[] | any;
    groups: {
        header: string;
        mapName:string;
        options: string[];
    }
    onCheckboxChange: (selectedOptions: string[], group_header:string) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({  selectedOptions, onCheckboxChange,groups }) => {
    const handleCheckboxChange = (option: string,  group_header:string) => {
        const updatedSelection = [...selectedOptions];
        const index = updatedSelection.indexOf(option);

        if (index === -1) {
            // Add the option if it's not already selected
            updatedSelection.push(option);
        } else {
            // Remove the option if it's already selected
            updatedSelection.splice(index, 1);
        }

        // Call the parent component's callback with the updated selection
        onCheckboxChange(updatedSelection,  group_header);
    };

    const handleCheckedOptions = (option:string) => {
      return selectedOptions?.includes(option);
    }

    return (
        <Form>
            <div className="checkbox-list">
                <h3>{groups.header}</h3>
                <Form.Group>
                    {groups.options.map((option) => (
                        <Form.Check
                            key={option}
                            type="checkbox"
                            id={option}
                            label={option}
                            checked={selectedOptions?.includes(option)}
                            onChange={() => handleCheckboxChange(option, groups.mapName)}
                        />
                    ))}
                </Form.Group>
            </div>
        </Form>
    );
};

export default CheckboxList;
