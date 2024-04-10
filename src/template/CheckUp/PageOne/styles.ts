import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
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
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
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

export const InputTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
