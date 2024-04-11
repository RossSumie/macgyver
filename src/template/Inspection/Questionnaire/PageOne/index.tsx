import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageOneTemplate = () => {
    const options = [
        { value: 'OK', label: 'OK' },
        { value: 'Faulty but OK', label: 'Faulty but OK' },
        { value: 'Faulty', label: 'Faulty' },
        { value: 'NA', label: 'NA' }
    ];

    const options1 = [
        { value: 'Very Dirty', label: 'Very Dirty' },
        { value: 'Dirty', label: 'Dirty' },
        { value: 'Clean', label: 'Clean' },
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
                        questionId="Iquestion1"
                        options={options1}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Check your radiator for bent fins
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="Iquestion2"
                        options={options}
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
                        questionId="Iquestion3"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Check the rolling of the bearings for the fan, water
                        pump and alternator
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="Iquestion4"
                        options={options}
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
