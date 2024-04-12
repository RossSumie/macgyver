import QuestionHeader from 'components/QuestionHeader';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import StatusCircle from 'components/StatusCircle';
import * as S from './styles';

const InspectionHomePageTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/Home" nextPage="/" />
        <S.Container>
            <QuestionHeader title="Self Inspection" />
            <S.ButtonContainer>
                <S.MenuButton
                    onClick={() =>
                        Router.push('/Inspection/Questionnaire/PageOne')
                    }
                >
                    <S.ButtonTitle>Cooling System Inspection</S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText>Concern Level</S.ButtonText>
                            <S.ButtonText>Dificulty</S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText>50%</S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText>Easy</S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton
                    onClick={() =>
                        Router.push('/Inspection/Questionnaire/PageOne')
                    }
                >
                    <S.ButtonTitle>Hydraulic System Inspection</S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText>Concern Level</S.ButtonText>
                            <S.ButtonText>Dificulty</S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText>50%</S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText>Intermediate</S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton>
                    <S.ButtonTitle>Moving Parts Inspection</S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText>Concern Level</S.ButtonText>
                            <S.ButtonText>Dificulty</S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText>50%</S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText>Intermediate</S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton>
                    <S.ButtonTitle>
                        Engine Lubrification Inspection
                    </S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText>Concern Level</S.ButtonText>
                            <S.ButtonText>Dificulty</S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText>50%</S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText>Easy</S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default InspectionHomePageTemplate;
