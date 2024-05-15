import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    border: none;
    background-color: transparent;
    width: inherit;
`;
export const ModalTitle = styled.h1`
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 700;
    width: 85%;
    text-align: center;
`;

export const ModalText = styled.h1`
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 8px;
`;

export const ModalFooter = styled.h1`
    font-family: 'DM Sans';
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4px;
`;
export const ModalFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ModalHeadertContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
`;
export const Helper = styled.div`
    width: 32px;
    height: 32px;
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
