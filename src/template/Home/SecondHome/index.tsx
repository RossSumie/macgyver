import QuestionHeader from 'components/QuestionHeader';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import CircularWithValueLabel from 'components/ProgressCircle';
import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
import * as S from './styles';

// the text color is in "inline" because somehow the color wasn't being rendered on iphones

const SecondHomeTemplate = () => (
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
            <S.TitleContainer>
                <QuestionHeader title="How can we assist you today?" />
                <S.SmallIntentionButtonContainer>
                    <TeamCommentButton
                        title="App Flow"
                        content="Now, after many daily checkups, we have collected sufficient data (alongside data from the machine sensors) to predict malfunctions in specific systems of the machine. If the data begin to show concerning trends, the app will notify the operator to conduct an inspection of the affected area of the machine to gather specific data and refine our predictions."
                    />
                </S.SmallIntentionButtonContainer>
            </S.TitleContainer>
            <S.ButtonContainer>
                <S.MenuButton onClick={() => Router.push('/CheckUp/PageOne')}>
                    <S.MenuText style={{ color: 'black' }}>
                        Daily CheckUp
                    </S.MenuText>
                </S.MenuButton>
                <S.IntentionButtonContainer>
                    <S.MenuButton
                        onClick={() =>
                            Router.push('/Inspection/RequiredInspectionHome')
                        }
                    >
                        <S.MenuText style={{ color: 'black' }}>
                            Inspection
                            <S.NotificationBadge>!</S.NotificationBadge>
                        </S.MenuText>
                    </S.MenuButton>
                </S.IntentionButtonContainer>
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
                    <S.MenuText style={{ color: 'black' }}>
                        Troubleshoot Guide
                    </S.MenuText>
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default SecondHomeTemplate;
