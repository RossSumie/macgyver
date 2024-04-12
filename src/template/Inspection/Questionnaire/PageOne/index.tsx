import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageOneTemplate = () => {
    const options1 = [
        { value: 'Clean', label: 'Clean' },
        { value: 'Dirty', label: 'Dirty' },
        { value: 'Very Dirty', label: 'Very Dirty' },
        { value: 'NA', label: 'NA' }
    ];
    const options2 = [
        { value: 'OK', label: 'OK' },
        { value: 'Few bends', label: 'Few bends' },
        { value: 'Very bent', label: 'Very bent' },
        { value: 'NA', label: 'NA' }
    ];

    const options3 = [
        { value: 'OK', label: 'OK' },
        { value: 'Loose', label: 'Loose' },
        { value: 'Worn', label: 'Worn' },
        { value: 'NA', label: 'NA' }
    ];

    const options4 = [
        { value: 'OK', label: 'OK' },
        { value: 'Some resistance', label: 'Some resistance' },
        { value: 'Catching', label: 'Catching' },
        { value: 'NA', label: 'NA' }
    ];

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/Inspection"
                nextPage="/Inspection/Questionnaire/PageTwo"
            />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <S.PageCouterText>1/2</S.PageCouterText>
                    </S.SubHeader>
                    <BorderLinearProgress variant="determinate" value={50} />
                </S.SubHeaderContainer>
                <S.QuestionContainer>
                    <S.Heading>
                        Open the motor hatch with the machine turned off
                    </S.Heading>
                    <S.SubHeading>
                        Please take a picture of your radiator
                    </S.SubHeading>
                    <ImageUploadMock />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>How dirty is your radiator</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question1"
                        options={options1}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Check your radiator for bent fins
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question2"
                        options={options2}
                    />
                </S.QuestionContainer>
                <S.SubHeading>
                    Take a picture of the belts to the water pump and fan
                </S.SubHeading>
                <ImageUploadMock />
                <S.QuestionContainer>
                    <S.SubHeading>
                        Check the tightness and condition of the belts to the
                        water pump and fan
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question3"
                        options={options3}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Check the rolling of the bearings for the fan, water
                        pump and alternator
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question4"
                        options={options4}
                    />
                </S.QuestionContainer>
                <FlowButton
                    previousPage="/Inspection/Inspection"
                    nextPage="/Inspection/Questionnaire/PageTwo"
                    hasIconLeft={false}
                    title="Next"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default PageOneTemplate;
