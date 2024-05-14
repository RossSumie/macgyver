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

export const Container = styled.div`
    margin-top: 48px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    height: 100vh;
    width: 100%;
`;

export const MenuButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
`;
export const ButtonTitle = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
`;
export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    gap: 16px;
`;
export const InformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

export const StatusRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`;
export const ButtonText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
`;
