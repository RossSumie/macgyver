import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageThreeTemplate = () => {
    const options = [
        { value: 'OK', label: 'OK' },
        { value: 'Faulty but OK', label: 'Faulty but OK' },
        { value: 'Faulty', label: 'Faulty' },
        { value: 'NA', label: 'NA' }
    ];
    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageTwo"
                nextPage="/CheckUp/PageFour"
            />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <S.PageCouterText>3/5</S.PageCouterText>
                    </S.SubHeader>
                    <BorderLinearProgress variant="determinate" value={60} />
                </S.SubHeaderContainer>
                <S.QuestionContainer>
                    <S.Heading>Engine</S.Heading>
                    <S.SubHeading>
                        Please take a picture of your engine and coolant system
                    </S.SubHeading>
                    <ImageUploadMock />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your oil level</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question4"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Evaluate if there are any oil leaks
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question5"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your coolant level</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question6"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Evaluate if there are any coolant leaks
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question7"
                        options={options}
                    />
                </S.QuestionContainer>
                <FlowButton
                    previousPage="/CheckUp/PageTwo"
                    nextPage="/CheckUp/PageFour"
                    hasIconLeft={false}
                    title="Next"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default PageThreeTemplate;
