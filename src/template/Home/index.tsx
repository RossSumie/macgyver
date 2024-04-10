import QuestionHeader from 'components/QuestionHeader';
import Router from 'next/router';
import * as S from './styles';

const HomeTemplate = () => (
    <S.Wrapper>
        <S.HeaderContainer>
            <S.LogoContainer>
                <img
                    src="/assets/Volvo-Spread-Word-Mark-Black.svg"
                    height={8}
                    alt="logo"
                />
            </S.LogoContainer>
        </S.HeaderContainer>
        <S.Container>
            <QuestionHeader title="How can we assist you today?" />
            <S.ButtonContainer>
                <S.MenuButton onClick={() => Router.push('/CheckUp/PageOne')}>
                    Daily CheckUp
                </S.MenuButton>
                <S.MenuButton>Inspection</S.MenuButton>
                <S.MenuButton>Self Report</S.MenuButton>
                <S.MenuButton>Troubleshoot Guide</S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default HomeTemplate;
