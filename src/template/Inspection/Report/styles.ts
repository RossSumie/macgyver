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
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 24px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
export const InformationCell = styled.div``;
export const InformationColumn = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

export const Heading2 = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-align: left;
`;

export const TableWrapper = styled.div`
    align-items: left;
    width: 100%;
    margin: 24px 0 16px 0;
`;

export const SubHeading = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-align: justify;
`;

export const ReportLogText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const InformationTitle = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const InformationText = styled.p`
    font-family: 'DM Sans', sans-serif;
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
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    width: 100%;
`;

export const TableCell = styled.div`
    padding: 8px;
    text-align: left;
    justify-content: left;
`;

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
    grid-auto-rows: minmax(
        50px,
        auto
    ); /* Minimum row height of 100px, auto-adjust based on content */
    gap: 10px; /* Gap between grid items */
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
`;
export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 8px;
    margin: 24px 0 24px 0;
`;

export const GreenButton = styled.button`
    height: 44px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary.main};
    border-radius: 24px;
    border: none;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    height: 44px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 24px;
    border: none;
    margin-bottom: 16px;
`;

export const ButtonText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.light};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 8px;
    margin: 24px 0 0 0;
`;
