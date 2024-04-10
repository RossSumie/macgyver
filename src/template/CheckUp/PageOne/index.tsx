import OptionButton from 'components/Buttons/OptionButtons';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import QuestionHeader from 'components/QuestionHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import React, { useState } from 'react';
import * as S from './styles';

const PageOneTemplate = () => {
    const [bgColor, setBgColor] = useState<string>('');

    const handleClick = () => {
        const newColor = '#50A294';
        setBgColor(newColor);
    };
    return (
        <S.Wrapper>
            <QuestionnaireHeader />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <FlowButton
                            previousPage="/"
                            nextPage="/CheckUp/PageTwo"
                            title="back"
                            hasIconLeft
                        />
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
                    <OptionButton onClick={handleClick} title="No" />
                </S.ButtonContainer>
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
