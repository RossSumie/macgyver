import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;
export const Heading = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
export const SubHeading = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SubHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Container = styled.div`
    margin-top: 48px;
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-between;
    gap: 24px;
    height: 100vh;
    width: 100%;
`;
export const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    margin: 8px;
`;
export const PageCouterText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.novumlight};
    font-weight: ${({ theme }) => theme.fontWeights.novumlight};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
