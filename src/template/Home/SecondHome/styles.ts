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

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TitleContainer = styled.div`
    display: flex;
`;
export const MachineHealthContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
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
    gap: 3vh;
    height: 100vh;
    width: 100%;
    margin-top: 48px;
`;

export const MenuButton = styled.button`
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding: 16px;
    gap: 16px;
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

export const IntentionButtonContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    animation: ${pulseAnimation} 2s infinite;
`;

export const SmallIntentionButtonContainer = styled.div`
    border-radius: 50%;
    height: 24px;
    animation: ${pulseAnimation} 2s infinite;
`;
export const MenuText = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: 'black';
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

export const MachineTitle = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: 'black';
`;

export const MachineSubTitle = styled.h2`
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: 'black';
`;
