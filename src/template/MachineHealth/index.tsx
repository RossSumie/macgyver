import React from 'react';
import CustomTabs from 'components/CustomTabs';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import SystemsHealth from './systemshealth';
import Irregularities from './irregularities';

const MachineHealthTemplate: React.FC = () => {
    const tabData = [
        {
            id: 'systems-health', // Unique identifier
            label: 'Systems Health',
            content: <SystemsHealth />
        },
        {
            id: 'irregularities', // Unique identifier
            label: 'Irregularities',
            content: <Irregularities />
        }
    ];

    return (
        <div>
            <QuestionnaireHeader previousPage="/Home" nextPage="/Home" />
            <CustomTabs tabs={tabData} />
        </div>
    );
};

export default MachineHealthTemplate;
