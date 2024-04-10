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
    gap: 16px;
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
    height: 100px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-position: 'center';
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
    padding: 16px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &::before {
        content: '';
        position: absolute;
        border-radius: 8px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(
            0,
            0,
            0,
            0.3
        ); // Adjust the darkness by changing the opacity
        z-index: 1;
    }
`;

export const ButtonText = styled.h1`
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.light};
    font-family: ${({ theme }) => theme.fonts.novumlight};
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
