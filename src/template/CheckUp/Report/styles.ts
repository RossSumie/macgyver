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
    margin-top: 54px;
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;
export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Information = styled.div`
    display: flex;
    flex-direction: row;
`;
export const InformationColumn = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

export const SubHeading = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
