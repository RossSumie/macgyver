import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const HeadingContainer = styled.div`
    display: flex;
`;

export const Container = styled.div`
    margin-top: 48px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`;

export const SubHeading = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    text-align: justify;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
