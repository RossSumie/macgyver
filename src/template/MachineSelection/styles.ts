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
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    width: 100%;
`;

export const MenuButton = styled.button`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.light};
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
    gap: 16px;
`;

export const AddMachineButton = styled.button`
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    border-radius: 24px;
    outline: none;
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
`;
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
    width: 100%;
    height: 48px;

    background-color: ${({ theme }) => theme.colors.primary.light};
    //box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
`;
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 72px;
`;
