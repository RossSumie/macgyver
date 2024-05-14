import * as React from 'react';
import CircularProgress, {
    CircularProgressProps
} from '@mui/material/CircularProgress';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularWithValueLabelProps {
    value: number; // Progress value passed as a prop
    isSmall: boolean;
}

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number; isSmall: boolean }
) {
    const { value, isSmall, ...otherProps } = props; // Destructuring value, isSmall, and otherProps

    // Conditional style based on isSmall
    const size = isSmall ? 40 : 100;
    const thickness = isSmall ? 8 : 10;
    const fontSize = isSmall ? '8px' : '20px';

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                {...otherProps}
                value={value}
                size={size} // Conditional size
                thickness={thickness} // Conditional thickness
                sx={{ color: '#396976' }}
            />
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
                    sx={{ fontSize }} // Conditional font size
                >{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel({
    value,
    isSmall
}: CircularWithValueLabelProps) {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= value ? value : prevProgress + 1
            );
        }, 9); // Adjust the interval to control the animation speed

        return () => {
            clearInterval(timer);
        };
    }, [value]);

    return <CircularProgressWithLabel value={progress} isSmall={isSmall} />;
}
