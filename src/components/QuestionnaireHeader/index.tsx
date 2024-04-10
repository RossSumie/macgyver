import React from 'react';
// import { useRouter } from 'next/dist/client/router';

import { Container, IconContainer, LogoContainer } from './styles';

const QuestionnaireHeader: React.FC = () => {
    // const router = useRouter();
    return (
        <Container>
            <IconContainer>
                <img
                    src="/assets/Action_Home_Black.svg"
                    alt="home_icon"
                    width={24}
                    height={24}
                />
            </IconContainer>
            <LogoContainer>
                <img
                    src="/assets/Volvo-Spread-Word-Mark-Black.svg"
                    height={8}
                    alt="logo"
                />
            </LogoContainer>
            <IconContainer>
                <img
                    src="/assets/Symbol_Info_Black.svg"
                    alt="home_icon"
                    width={24}
                    height={24}
                />
            </IconContainer>
        </Container>
    );
};

export default QuestionnaireHeader;
