import * as React from 'react';
import CircularProgress, {
    CircularProgressProps
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularWithValueLabelProps {
    value: number; // Progress value passed as a prop
}

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
) {
    const { value, ...otherProps } = props; // Destructuring value and otherProps
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                {...otherProps}
                value={value}
                size={100}
                thickness={10}
            />{' '}
            {/* Using value */}
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(value)}%`}</Typography>{' '}
                {/* Using value */}
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel({
    value
}: CircularWithValueLabelProps) {
    return <CircularProgressWithLabel value={value} />;
}
