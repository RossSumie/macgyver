import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { useAnswersContext } from 'hooks/answerContext';
import Router from 'next/router';
import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
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
    const { answers, resetAnswers } = useAnswersContext();

    const handleReset = () => {
        resetAnswers(); // Call resetAnswers function
        Router.push('/Home'); // Change the route to the home page using Next.js's router
    };

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/Inspection/Questionnaire/PageTwo"
                nextPage="/Home"
            />
            <S.Container>
                <S.Heading>Inspection Report</S.Heading>
                <S.Information>
                    <S.InformationColumn>
                        <S.InformationCell>
                            <S.InformationTitle>
                                Machine Type :
                            </S.InformationTitle>
                            <S.InformationText>EC210D</S.InformationText>
                        </S.InformationCell>
                        <S.InformationCell>
                            <S.InformationTitle>Operator:</S.InformationTitle>
                            <S.InformationText>
                                Artur Paparounis
                            </S.InformationText>
                        </S.InformationCell>
                    </S.InformationColumn>
                    <S.InformationColumn>
                        <S.InformationCell>
                            <S.InformationTitle>
                                Machine Number :
                            </S.InformationTitle>
                            <S.InformationText>11341186</S.InformationText>
                        </S.InformationCell>
                        <S.InformationCell>
                            <S.InformationTitle>Date:</S.InformationTitle>
                            <S.InformationText>05/16/24</S.InformationText>
                        </S.InformationCell>
                    </S.InformationColumn>
                </S.Information>
                <S.TextContainer>
                    <S.Heading2>Inspected Concern</S.Heading2>
                    <S.SubHeading>
                        Possible problems in cooling system
                    </S.SubHeading>
                </S.TextContainer>
                <S.TextContainer>
                    <S.HeadingContainer>
                        <S.Heading2>Reason for concern</S.Heading2>
                        <TeamCommentButton
                            title="Reason for requesting this inspection"
                            content="After the data have been analyzed, if the VolvoHS system concludes that there is a likelihood of a malfunction in any part of the machine, the reason for requesting the inspection should appear in this field."
                        />
                    </S.HeadingContainer>
                    <S.SubHeading>
                        We have noticed repeated abnormal temperature increases
                        without enviromental or workload causes
                    </S.SubHeading>
                    <S.ImagesContainer>
                        <S.HeadingContainer>
                            <S.Heading2>Analyzed Images</S.Heading2>
                            <TeamCommentButton
                                title="AI analyzed images"
                                content="Here, the user should be able to view the images that they previously uploaded during Daily Checkups along with the assessments made by the VolvoHS image analysis AI."
                            />
                        </S.HeadingContainer>
                        <S.SubHeading>
                            These images taken during your daily checkups raised
                            concern when analyzed through our AI system
                        </S.SubHeading>
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
                </S.TextContainer>
                <S.TableWrapper>
                    <S.Heading2>Report Log</S.Heading2>
                    {Object.keys(answers).map((questionId) => (
                        <S.TableContainer>
                            <S.TableCell>
                                <S.ReportLogText>
                                    {questionTextMap[questionId]}
                                </S.ReportLogText>
                            </S.TableCell>
                            <S.TableCell>
                                <S.ReportLogText>
                                    {answers[questionId]}
                                </S.ReportLogText>
                            </S.TableCell>
                        </S.TableContainer>
                    ))}
                </S.TableWrapper>
                <S.ImagesContainer>
                    <S.HeadingContainer>
                        <S.Heading2>Images taken during inspection</S.Heading2>
                        <TeamCommentButton
                            title="Raw Images"
                            content="The images below are supposed to represent the pictures you took during your Inspection flow. They will also be sent to our database for further analysis"
                        />
                    </S.HeadingContainer>
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
                <S.GreenButton>
                    <S.ButtonText>Download Report</S.ButtonText>
                </S.GreenButton>
                <S.Button onClick={handleReset}>
                    <S.ButtonText>Back to menu</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
