import OptionButton from 'components/Buttons/OptionButtons';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import QuestionHeader from 'components/QuestionHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import React, { useState } from 'react';
import Router from 'next/router';
import * as S from './styles';

interface TextArea {
    id: number;
    value: string;
}
const PageFiveTemplate = () => {
    const [bgColor, setBgColor] = useState<string>('');
    const [textAreas, setTextAreas] = useState<TextArea[]>([]);

    const handleClick = () => {
        const newColor = '#50A294';
        setBgColor(newColor);

        const newTextArea = {
            id: textAreas.length + 1, // simple counter to act as a key
            value: '' // initial value of the textarea
        };
        setTextAreas([...textAreas, newTextArea]); // Append new textarea to the array
    };

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageFour"
                nextPage="/"
            />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <S.PageCouterText>5/5</S.PageCouterText>
                    </S.SubHeader>
                    <BorderLinearProgress variant="determinate" value={100} />
                </S.SubHeaderContainer>
                <QuestionHeader title="Is there anything else you would like to report" />
                <S.ButtonContainer>
                    <OptionButton
                        bgColor={bgColor}
                        onClick={handleClick}
                        title="Yes"
                    />
                    <OptionButton
                        onClick={() => Router.push('/Home')}
                        title="No"
                    />
                </S.ButtonContainer>
                {textAreas.map((textArea) => (
                    <S.InputContainer>
                        <S.InputTitle>
                            Can you provide with detail what happened?
                        </S.InputTitle>
                        <textarea
                            key={textArea.id}
                            value={textArea.value}
                            onChange={(e) => {
                                // Update the value of the specific textarea
                                const updatedTextAreas = textAreas.map((ta) =>
                                    ta.id === textArea.id
                                        ? {
                                              ...ta,
                                              value: e.target.value
                                          }
                                        : ta
                                );
                                setTextAreas(updatedTextAreas);
                            }}
                            style={{
                                display: 'block',
                                margin: '10px 0',
                                width: '100%',
                                height: '60px'
                            }}
                        />
                    </S.InputContainer>
                ))}
                <FlowButton
                    previousPage="/"
                    nextPage="/CheckUp/Report"
                    hasIconLeft={false}
                    title="Go to report"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default PageFiveTemplate;
