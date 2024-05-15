import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import { useAnswersContext } from 'hooks/answerContext';
import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
import * as S from './styles';

// Map of question IDs to their corresponding text
const questionTextMap: { [key: string]: string } = {
    question1: 'Weather',
    question2: 'Surface operated',
    question3: 'Track motor nuts',
    question4: 'Track wear',
    question5: 'Track tension',
    question6: 'Oil levels',
    question7: 'Oil leaks',
    question8: 'Coolant level',
    question9: 'Coolant leaks',
    question10: 'Abnormal sounds',
    question11: 'Abnormal vibrations',
    question12: 'Abnormal smells'
};

const ReportTemplate = () => {
    const { answers, resetAnswers } = useAnswersContext();
    const handleReset = () => {
        resetAnswers(); // Call resetAnswers function
        Router.push('/CheckUp/Final'); // Change the route to the home page using Next.js's router
    };

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageFive"
                nextPage="/Home/SecondHome"
            />
            <S.Container>
                <S.Heading>Daily CheckUp Report</S.Heading>
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
                <S.TableWrapper>
                    <S.HeadingContainer>
                        <S.Heading2>Report Log</S.Heading2>
                        <TeamCommentButton
                            title="Report Purpose"
                            content="The daily checkup should be conducted by the operator every day before starting work. This report is a formal record of what the Human Sensor was able to detect about their machine, allowing these data, once sent to Volvo, to be analyzed along with the information Volvo already has from the mechanical sensors (from Active Care). This analysis generates a prediction of the lifespan of concerning equipment parts that will be available in the Machine Health Status dashboard"
                        />
                    </S.HeadingContainer>
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
                    <S.HeadingContainer>
                        <S.Heading2>Images</S.Heading2>
                        <TeamCommentButton
                            title="Raw Images"
                            content="The images below are supposed to represent the pictures you took during your Daily Checkup flow. They will be sent to our database, where they will then be analyzed through AI to provide feedback on whether there are any concerning aspects."
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
                <S.Button onClick={handleReset}>
                    <S.ButtonText>Send</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
