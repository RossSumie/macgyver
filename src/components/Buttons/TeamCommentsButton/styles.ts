import styled from 'styled-components';

export const IconContainer = styled.button`
    display: flex;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: none;
    background-color: #66b3a6;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.2);
`;
export const ModalTitle = styled.h1`
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 700;
    width: 85%;
`;

export const ModalText = styled.h1`
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-bottom: 8px;
`;

export const ModalHeadertContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
`;

export const CloseButton = styled.button`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: white;
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.2);
    border: none;
    align-items: center;
    justify-content: center;
`;
