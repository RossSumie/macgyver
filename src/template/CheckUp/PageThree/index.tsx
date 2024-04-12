import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageThreeTemplate = () => {
    const options6 = [
        { value: 'OK', label: 'OK' },
        { value: 'Close to minimum', label: 'Close to minimum' },
        { value: 'Below minimum', label: 'Below minimum' },
        { value: 'NA', label: 'NA' }
    ];

    const options7 = [
        { value: 'OK', label: 'OK' },
        { value: 'Oil droplets', label: 'Oil droplets' },
        { value: 'Clear leak', label: 'Clear leak' },
        { value: 'NA', label: 'NA' }
    ];
    const options9 = [
        { value: 'OK', label: 'OK' },
        { value: 'Coolant droplets', label: 'Coolant droplets' },
        { value: 'Clear leak', label: 'Clear leak' },
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
                        questionId="question6"
                        options={options6}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Evaluate if there are any oil leaks
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question7"
                        options={options7}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your coolant level</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question8"
                        options={options6}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Evaluate if there are any coolant leaks
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question9"
                        options={options9}
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
