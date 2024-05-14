import styled from 'styled-components';

interface ButtonProps {
    hasColor: boolean;
}

export const ButtonWrapper = styled.button<ButtonProps>`
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: ${({ hasColor }) => (hasColor ? '100%' : 'none')};
    border-radius: 24px;
    outline: none;
    border: none;
    background-color: ${({ hasColor, theme }) =>
        hasColor ? theme.colors.primary.main : 'transparent'};

    > h1 {
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        color: ${({ hasColor, theme }) =>
            hasColor ? theme.colors.primary.light : theme.colors.primary.dark};
    }
`;
