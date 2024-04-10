import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.novumlight};
    font-weight: ${({ theme }) => theme.fontWeights.novumlight};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.dark};
`;

export const InputContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
`;

export const PhotoInput = styled.input`
    display: none;
`;

export const CameraButton = styled.button`
    border: 'none';
    background-color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
    padding: 8px;
    border-radius: 100%;
`;
