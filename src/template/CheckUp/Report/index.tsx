import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import { useAnswersContext } from 'hooks/answerContext';
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
        Router.push('/Home'); // Change the route to the home page using Next.js's router
    };

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageTwo"
                nextPage="/Home"
            />
            <S.Container>
                <S.Heading>Daily CheckUp Report</S.Heading>
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
                <S.Button onClick={handleReset}>
                    <S.ButtonText>Back to Menu</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
