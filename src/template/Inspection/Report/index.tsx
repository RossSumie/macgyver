import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import { useAnswersContext } from 'hooks/answerContext';
import FlowButton from 'components/Buttons/FlowButton';
import * as S from './styles';

// Map of question IDs to their corresponding text
const questionTextMap: { [key: string]: string } = {
    question1: 'Radiator cleanliness',
    question2: 'Radiator fins state',
    question3: 'Condition of the belts',
    question4: 'Rolling of the bearings',
    question5: 'Coolant fluid leaks',
    question6: 'Water pump odd sounds',
    question7: 'Air-flow'
};

const ReportTemplate = () => {
    const { answers } = useAnswersContext();

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageTwo"
                nextPage="/Home"
            />
            <S.Container>
                <S.Heading>Inspection Report</S.Heading>
                <S.Information>
                    <S.InformationColumn>
                        <S.SubHeading>Machine Type : EC210D</S.SubHeading>
                        <S.SubHeading>
                            Operator : Arthur Paparounis
                        </S.SubHeading>
                    </S.InformationColumn>
                    <S.InformationColumn>
                        <S.SubHeading>Machine Number : 11341186</S.SubHeading>
                        <S.SubHeading>Date: 10/04/24</S.SubHeading>
                    </S.InformationColumn>
                </S.Information>
                <S.TextContainer>
                    <S.Heading2>Inspected Concern</S.Heading2>
                    <S.SubHeading>
                        Possible problems in cooling system
                    </S.SubHeading>
                </S.TextContainer>
                <S.TextContainer>
                    <S.Heading2>Reason for concern</S.Heading2>
                    <S.SubHeading>
                        Repeated abnormal temperature increases without
                        enviromental or workload causes
                    </S.SubHeading>
                </S.TextContainer>
                <S.TableWrapper>
                    <S.Heading2>Report Log</S.Heading2>
                    {Object.keys(answers).map((questionId) => (
                        <S.TableContainer>
                            <S.TableCell>
                                <S.SubHeading>
                                    {questionTextMap[questionId]}
                                </S.SubHeading>
                            </S.TableCell>
                            <S.TableCell>
                                <S.SubHeading>
                                    {answers[questionId]}
                                </S.SubHeading>
                            </S.TableCell>
                        </S.TableContainer>
                    ))}
                </S.TableWrapper>
                <S.ImagesContainer>
                    <S.Heading2>Images</S.Heading2>
                    <S.Images>
                        <img
                            src="/assets/motor.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/vara.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/roda.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/motorverde.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/escava.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                    </S.Images>
                </S.ImagesContainer>
                <S.Button onClick={() => Router.push('/Home')}>
                    <S.ButtonText>Download Report</S.ButtonText>
                </S.Button>
                <FlowButton
                    previousPage="/Inspection/Questionnaire/PageOne"
                    nextPage="/Home"
                    hasIconLeft={false}
                    title="Back to menu"
                />
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
