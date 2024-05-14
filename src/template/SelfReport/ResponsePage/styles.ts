import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
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
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const SubHeading = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-align: justify;
`;
