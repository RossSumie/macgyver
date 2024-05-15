import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(141, 201, 191, 2);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(141, 201, 191, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(141, 201, 191, 0);
  }
`;
export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;
export const IntentionButtonContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    animation: ${pulseAnimation} 2s infinite;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
`;

export const Container = styled.div`
    margin-top: 48px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    height: 100vh;
    width: 100%;
`;

export const MenuButton = styled.button`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
`;

export const NotificationBadge = styled.span`
    position: absolute;
    top: -5px; // Position it slightly above the top right corner
    right: -5px; // Position it slightly beyond the right edge
    width: 32px; // Small circle
    height: 32px; // Small circle
    background-color: red; // Make it stand out
    border-radius: 50%; // Circular shape
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.32);
`;
export const ButtonTitle = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
`;
export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    gap: 16px;
`;
export const InformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

export const StatusRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`;
export const ButtonText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
`;
