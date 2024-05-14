import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    outline: none;
    width: 48px;
    height: 48px;
`;

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    padding: 8px;
    &:focus {
        outline: none;
    }
`;

export const RecordingText = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    text-align: center;
    font-weight: 600;
`;

export const TranscriptText = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    text-align: justify;
    color: ${({ theme }) => theme.colors.secondary.main};
`;

export const TranscriptContainer = styled.div`
    height: auto;
`;
export const RecordingTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 16px;
`;
