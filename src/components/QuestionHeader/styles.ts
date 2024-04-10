import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    > h1 {
        font-family: ${({ theme }) => theme.fonts.novumregular};
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primary.dark};
    }
`;
