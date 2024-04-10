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
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
export const SubHeading = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 24px 0 24px 0;
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
`;
export const SubHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Container = styled.div`
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-between;
    width: 100%;
`;
export const SubHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const PageCouterText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.novumlight};
    font-weight: ${({ theme }) => theme.fontWeights.novumlight};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
