import { useAnswersContext } from 'hooks/answerContext';

import React from 'react';
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material';

interface Option {
    value: string;
    label: string;
}

interface CustomRowRadioButtonGroupProps {
    questionId: string;
    options: Option[];
}

const CustomRowRadioButtonGroup: React.FC<CustomRowRadioButtonGroupProps> = ({
    questionId,
    options
}) => {
    const { updateAnswer, answers } = useAnswersContext();
    const [selectedValue, setSelectedValue] = React.useState(
        answers[questionId] || ''
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSelectedValue(value);
        updateAnswer(questionId, value);
    };

    return (
        <FormControl>
            <RadioGroup
                row
                aria-label={questionId}
                name={questionId}
                value={selectedValue}
                onChange={handleChange}
                style={{ justifyContent: 'space-between' }}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio style={{ color: '#202A44' }} />}
                        label={option.label}
                        labelPlacement="bottom"
                        style={{ marginLeft: '0px', marginRight: '0px' }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRowRadioButtonGroup;
