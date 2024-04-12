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
                    <S.ButtonTitle style={{ color: 'black' }}>
                        Cooling System Inspection
                    </S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText style={{ color: 'black' }}>
                                Concern Level
                            </S.ButtonText>
                            <S.ButtonText style={{ color: 'black' }}>
                                Dificulty
                            </S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    50%
                                </S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    Easy
                                </S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton>
                    <S.ButtonTitle style={{ color: 'black' }}>
                        Hydraulic System Inspection
                    </S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText style={{ color: 'black' }}>
                                Concern Level
                            </S.ButtonText>
                            <S.ButtonText style={{ color: 'black' }}>
                                Dificulty
                            </S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    21%
                                </S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    Intermediate
                                </S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton>
                    <S.ButtonTitle style={{ color: 'black' }}>
                        Moving Parts Inspection
                    </S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText style={{ color: 'black' }}>
                                Concern Level
                            </S.ButtonText>
                            <S.ButtonText style={{ color: 'black' }}>
                                Dificulty
                            </S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    19%
                                </S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="yellow" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    Intermediate
                                </S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
                <S.MenuButton>
                    <S.ButtonTitle style={{ color: 'black' }}>
                        Engine Lubrification Inspection
                    </S.ButtonTitle>
                    <S.InformationContainer>
                        <S.InformationColumn>
                            <S.ButtonText style={{ color: 'black' }}>
                                Concern Level
                            </S.ButtonText>
                            <S.ButtonText style={{ color: 'black' }}>
                                Dificulty
                            </S.ButtonText>
                        </S.InformationColumn>
                        <S.InformationColumn>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    9%
                                </S.ButtonText>
                            </S.StatusRow>
                            <S.StatusRow>
                                <StatusCircle color="green" />
                                <S.ButtonText style={{ color: 'black' }}>
                                    Easy
                                </S.ButtonText>
                            </S.StatusRow>
                        </S.InformationColumn>
                    </S.InformationContainer>
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default InspectionHomePageTemplate;
