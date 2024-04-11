import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import CircularWithValueLabel from 'components/ProgressCircle';
import StatusCircle from 'components/StatusCircle';
import Router from 'next/router';
import { useAnswersContext } from 'hooks/answerContext';
import * as S from './styles';

const calculateResult = (answers: { [key: string]: string }) => {
    const trackResults = ['question1', 'question2', 'question3'].map(
        (question) => answers[question]
    );
    const engineResults = [
        'question4',
        'question5',
        'question8',
        'question9',
        'question10'
    ].map((question) => answers[question]);
    const coolantResults = ['question6', 'question7'].map(
        (question) => answers[question]
    );

    const calculateSubResult = (results: string[]) => {
        if (results.includes('Faulty')) {
            return { result: 'Needs Repair', color: 'red' };
        }
        if (results.includes('Faulty but OK')) {
            return { result: 'Needs Inspection', color: 'yellow' };
        }
        return { result: 'OK', color: 'green' };
    };

    const trackResult = calculateSubResult(trackResults);
    const engineResult = calculateSubResult(engineResults);
    const coolantResult = calculateSubResult(coolantResults);

    return { trackResult, engineResult, coolantResult };
};

const ReportTemplate = () => {
    const { answers, totalValue } = useAnswersContext(); // Retrieve totalValue from context
    const { trackResult, engineResult, coolantResult } =
        calculateResult(answers);

    let subtitle;
    if (totalValue > 80) {
        // Use totalValue for condition
        subtitle = 'Good!';
    } else if (totalValue > 60) {
        // Use totalValue for condition
        subtitle = 'Caution!';
    } else {
        subtitle = 'Danger';
    }

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageTwo"
                nextPage="/Home"
            />
            <S.Container>
                <S.Heading>General Report</S.Heading>
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
                <S.GraphContainer>
                    <CircularWithValueLabel value={totalValue} />{' '}
                    {/* Use totalValue from context */}
                    <S.GraphSubtitle>{subtitle}</S.GraphSubtitle>
                </S.GraphContainer>
                <S.TableContainer>
                    <S.TableCell>
                        <S.SubHeading>Track</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color={trackResult.color} />
                        <S.SubHeading>{trackResult.result}</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <S.SubHeading>Engine</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color={engineResult.color} />
                        <S.SubHeading>{engineResult.result}</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <S.SubHeading>Cooling System</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color={coolantResult.color} />
                        <S.SubHeading>{coolantResult.result}</S.SubHeading>
                    </S.TableCell>
                </S.TableContainer>
                <S.ImagesContainer>
                    <S.Heading2>Images</S.Heading2>
                    <S.Images>
                        <img
                            src="/assets/motor.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto',
                                paddingTop: 'calc(100% - 8px)' // Set the height based on the width
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/vara.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto',
                                paddingTop: 'calc(100% - 8px)' // Set the height based on the width
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/roda.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto',
                                paddingTop: 'calc(100% - 8px)' // Set the height based on the width
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/motorverde.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto',
                                paddingTop: 'calc(100% - 8px)' // Set the height based on the width
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/escava.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto',
                                paddingTop: 'calc(100% - 8px)' // Set the height based on the width
                            }}
                            alt="logo"
                        />
                    </S.Images>
                </S.ImagesContainer>
                <S.Button onClick={() => Router.push('/Home')}>
                    <S.ButtonText>Back to Menu</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
