import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EastIcon from '@mui/icons-material/East';
import Router from 'next/router';
import * as S from './styles';

export type TestProps = {
    title: string;
    hasIconLeft: boolean;
    previousPage: string;
    nextPage: string;
};

const FlowButton: React.FC<TestProps> = ({
    title,
    hasIconLeft,
    previousPage,
    nextPage
}) => {
    const redirect = () => {
        Router.push(hasIconLeft ? previousPage : nextPage);
    };
    return hasIconLeft ? (
        <S.ButtonWrapper hasColor={false} onClick={redirect}>
            <ArrowBackIosNewIcon style={{ color: '#141414' }} />
            <h1>{title}</h1>
        </S.ButtonWrapper>
    ) : (
        <S.ButtonWrapper hasColor onClick={redirect}>
            <h1>{title}</h1>
            <EastIcon style={{ color: 'white', marginLeft: '8px' }} />
        </S.ButtonWrapper>
    );
};

export default FlowButton;
