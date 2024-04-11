import QuestionHeader from 'components/QuestionHeader';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import * as S from './styles';

const HomeTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/" nextPage="/" />
        <S.Container>
            <QuestionHeader title="How can we assist you today?" />
            <S.ButtonContainer>
                <S.MenuButton onClick={() => Router.push('/CheckUp/PageOne')}>
                    <S.MenuText>Daily CheckUp</S.MenuText>
                </S.MenuButton>
                <S.MenuButton onClick={() => Router.push('/Inspection')}>
                    <S.MenuText>Inspection</S.MenuText>.
                </S.MenuButton>
                <S.MenuButton onClick={() => Router.push('/SelfReport')}>
                    <S.MenuText>Self Report</S.MenuText>
                </S.MenuButton>
                <S.MenuButton>Troubleshoot Guide</S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default HomeTemplate;
