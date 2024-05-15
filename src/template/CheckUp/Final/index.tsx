import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import Router from 'next/router';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'; // A handy hook for getting window size
import * as S from './styles';

const FinalTemplate = () => {
    const { width, height } = useWindowSize(); // Get the size of the window

    const redirect = () => {
        Router.push('/Home/SecondHome'); // Change the route to the home page using Next.js's router
    };

    const confettiColors = [
        '#202A44',
        '#B8DED8',
        '#8DC9BF',
        '#66B3A6',
        '#C8E691',
        '#A8D46B',
        '#8FC54E'
    ];

    return (
        <S.Wrapper>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={200}
                recycle={false}
                gravity={0.2}
                colors={confettiColors}
                // You can add more properties to customize the confetti as needed
            />
            <QuestionnaireHeader
                previousPage="/CheckUp/Report"
                nextPage="/Home/SecondHome"
            />
            <img
                src="/assets/cute_loader.jpg"
                style={{
                    marginTop: 50,
                    width: '70%',
                    height: 'auto'
                }}
                alt="logo"
            />
            <S.Container>
                <S.Heading>Thank you for sending your report!</S.Heading>
                <S.SubHeading>
                    Your report, as well as your images, will be analyzed
                    internally, and if there is any reason for concern, we will
                    alert you. You can view the overall status of your machine
                    under the Machine Health Status option in the menu.
                </S.SubHeading>
                <S.Button onClick={redirect}>
                    <S.ButtonText>Back to Menu</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default FinalTemplate;
