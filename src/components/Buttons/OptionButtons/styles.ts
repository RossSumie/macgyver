import styled from 'styled-components';

export const Wrapper = styled.button`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.main};

    > h1 {
        font-family: 'DM Sans', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary.light};
    }
`;
