import React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

// Set default props for TabPanel
TabPanel.defaultProps = {
    children: null // You can use `null` or an empty `<></>` depending on what makes sense in your context
};

export default TabPanel;
