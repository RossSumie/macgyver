import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 768px) {
    }
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const HeadingContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const SysHealthContainer = styled.div`
    padding-top: 56px;
`;
export const Heading = styled.h1`
    font-family: 'DM Sans';
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Heading2 = styled.h1`
    font-family: 'DM Sans';
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;

export const SubHeading = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
export const IrregularitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 16px;
`;
export const IrregularitiesItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const GraphContainer = styled.div`
    margin: 24px 0 24px 0;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
`;

export const GraphSubtitle = styled.p`
    font-family: 'DM Sans';
    font-size: 16px;
    font-weight: 600;
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

export const ButtonText = styled.p`
    font-family: 'DM Sans';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.light};
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
