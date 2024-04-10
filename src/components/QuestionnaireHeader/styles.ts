import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    height: 48px;
    position: fixed;
    z-index: 8;
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

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    height: 36px;
    width: 36px;
`;
