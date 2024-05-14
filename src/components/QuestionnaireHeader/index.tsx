import React from 'react';
import FlowButton from 'components/Buttons/FlowButton';
// import { useRouter } from 'next/dist/client/router';

import { Container, IconContainer, LogoContainer } from './styles';

export type TestProps = {
    previousPage: string;
    nextPage: string;
};

const QuestionnaireHeader: React.FC<TestProps> = ({
    previousPage,
    nextPage
}) => {
    // const router = useRouter();
    return (
        <Container>
            <FlowButton
                hasIconLeft
                title="Back"
                previousPage={previousPage}
                nextPage={nextPage}
            />
            <LogoContainer>
                <img
                    src="/assets/Volvo-Spread-Word-Mark-Black.svg"
                    height={8}
                    alt="logo"
                />
            </LogoContainer>
            <IconContainer />
        </Container>
    );
};

export default QuestionnaireHeader;
