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
const PageOneTemplate = () => {
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
                previousPage="/Home"
                nextPage="/CheckUp/PageTwo"
            />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <S.PageCouterText>1/8</S.PageCouterText>
                    </S.SubHeader>
                    <BorderLinearProgress variant="determinate" value={30} />
                </S.SubHeaderContainer>
                <QuestionHeader title="Have you noticed any strange noise, smell or other irregularities yesterday?" />
                <S.ButtonContainer>
                    <OptionButton
                        bgColor={bgColor}
                        onClick={handleClick}
                        title="Yes"
                    />
                    <OptionButton
                        onClick={() => Router.push('/CheckUp/PageTwo')}
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
                    nextPage="/CheckUp/PageTwo"
                    hasIconLeft={false}
                    title="Next"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default PageOneTemplate;
