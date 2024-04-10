import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export type TestProps = {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
};
const RowRadioButtonsGroup: React.FC<TestProps> = ({
    title1,
    title2,
    title3,
    title4,
    title5
}) => {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{ justifyContent: 'space-between' }}
            >
                <FormControlLabel
                    value={title1}
                    control={<Radio style={{ color: '#202A44' }} />}
                    label={title1}
                    labelPlacement="bottom"
                    style={{ marginLeft: '0px', marginRight: '0px' }}
                />
                <FormControlLabel
                    value={title2}
                    control={<Radio style={{ color: '#202A44' }} />}
                    label={title2}
                    labelPlacement="bottom"
                    style={{ marginLeft: '0px', marginRight: '0px' }}
                />
                <FormControlLabel
                    value={title3}
                    control={<Radio style={{ color: '#202A44' }} />}
                    label={title3}
                    labelPlacement="bottom"
                    style={{ marginLeft: '0px', marginRight: '0px' }}
                />
                <FormControlLabel
                    value={title4}
                    control={<Radio style={{ color: '#202A44' }} />}
                    label={title4}
                    labelPlacement="bottom"
                    style={{ marginLeft: '0px', marginRight: '0px' }}
                />
                <FormControlLabel
                    value={title5}
                    control={<Radio style={{ color: '#202A44' }} />}
                    label={title5}
                    labelPlacement="bottom"
                    style={{ marginLeft: '0px', marginRight: '0px' }}
                />
            </RadioGroup>
        </FormControl>
    );
};

export default RowRadioButtonsGroup;
