import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import TabPanel from 'components/Tabs';

interface TabItem {
    id: string; // Assuming an `id` field is available and unique
    label: string;
    content: React.ReactNode;
}

interface CustomTabsProps {
    tabs: TabItem[];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (
        event: React.SyntheticEvent,
        newValue: number
    ): void => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        style={{
                            width: '50%',
                            zIndex: '8',
                            marginTop: '50px',
                            color: '#202a44'
                        }}
                    />
                ))}
            </Tabs>
            {tabs.map((tab) => (
                <TabPanel key={tab.id} value={value} index={tabs.indexOf(tab)}>
                    {tab.content}
                </TabPanel>
            ))}
        </div>
    );
};

export default CustomTabs;
