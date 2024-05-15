import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Fade-out animation
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Background do Modal
export const ModalBackdrop = styled.div<{ fadeType: 'in' | 'out' }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: ${({ fadeType }) => (fadeType === 'in' ? fadeIn : fadeOut)} 0.5s
        ease-out forwards;
`;

// Caixa de Conteúdo do Modal
export const ModalContent = styled.div<{ fadeType: 'in' | 'out' }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 85%;
    animation: ${({ fadeType }) => (fadeType === 'in' ? fadeIn : fadeOut)} 0.5s
        ease-out forwards;
`;
