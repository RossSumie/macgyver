import QuestionHeader from 'components/QuestionHeader';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import CircularWithValueLabel from 'components/ProgressCircle';
import * as S from './styles';

const HomeTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/" nextPage="/" />
        <S.Container>
            <S.InformationWrapper>
                <img
                    src="/assets/EC210D_.jpg"
                    alt="escava"
                    width={100}
                    height={100}
                />
                <S.InformationContainer>
                    <S.MachineTitle>EXCAVATOR EC210D</S.MachineTitle>
                    <S.MachineSubTitle>
                        Volvo Excavator EC210D, 39,6t
                    </S.MachineSubTitle>
                    <S.MachineHealthContainer>
                        <CircularWithValueLabel value={71} isSmall />
                        <S.MachineSubTitle>
                            Machine General Health Overview
                        </S.MachineSubTitle>
                    </S.MachineHealthContainer>
                </S.InformationContainer>
            </S.InformationWrapper>
            <QuestionHeader title="How can we assist you today?" />
            <S.ButtonContainer>
                <S.MenuButton onClick={() => Router.push('/CheckUp/PageOne')}>
                    <S.MenuText style={{ color: 'black' }}>
                        Daily CheckUp
                    </S.MenuText>
                </S.MenuButton>
                <S.MenuButton onClick={() => Router.push('/Inspection')}>
                    <S.MenuText style={{ color: 'black' }}>
                        Inspection
                    </S.MenuText>
                    <img
                        src="/assets/exclamation.svg"
                        alt="notification"
                        width={24}
                        height={24}
                    />
                </S.MenuButton>
                <S.MenuButton
                    onClick={() => Router.push('/SelfReport/InputPage')}
                >
                    <S.MenuText style={{ color: 'black' }}>
                        Self Report
                    </S.MenuText>
                </S.MenuButton>
                <S.MenuButton onClick={() => Router.push('/MachineHealth')}>
                    <S.MenuText style={{ color: 'black' }}>
                        Machine Health Status
                    </S.MenuText>
                </S.MenuButton>
                <S.MenuButton>
                    <S.MenuText>Troubleshoot Guide</S.MenuText>
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default HomeTemplate;
