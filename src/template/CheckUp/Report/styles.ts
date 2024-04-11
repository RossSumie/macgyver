import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    margin-top: 54px;
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 24px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: row;
`;
export const InformationColumn = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

export const Heading2 = styled.h1`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const SubHeading = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const GraphContainer = styled.div`
    margin: 24px 0 24px 0;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
`;

export const GraphSubtitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto); /* Define three columns */
    align-items: center;
    width: 100%;
`;

export const TableCell = styled.div`
    padding: 8px;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto); /* Define three columns */
    align-items: center;
    width: 100%;
    gap: 8px;
    height: 300px;
`;
export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 8px;
    margin: 24px 0 24px 0;
`;

export const Button = styled.button`
    height: 44px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 24px;
`;

export const ButtonText = styled.p`
    font-family: ${({ theme }) => theme.fonts.novumregular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.light};
`;
