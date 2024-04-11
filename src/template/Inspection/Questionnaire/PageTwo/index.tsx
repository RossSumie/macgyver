import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import * as S from './styles';

const PageTwoTemplate = () => {
    const options = [
        { value: 'OK', label: 'OK' },
        { value: 'Faulty but OK', label: 'Faulty but OK' },
        { value: 'Faulty', label: 'Faulty' },
        { value: 'NA', label: 'NA' }
    ];

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/Inspection/Questionnaire/PageOne"
                nextPage="/Inspection/Home"
            />
            <S.Container>
                <S.SubHeaderContainer>
                    <S.SubHeader>
                        <S.PageCouterText>2/2</S.PageCouterText>
                    </S.SubHeader>
                    <BorderLinearProgress variant="determinate" value={100} />
                </S.SubHeaderContainer>
                <S.QuestionContainer>
                    <S.Heading>
                        Keep the hatch open and turn on yout motor (be careful
                        for moving parts)
                    </S.Heading>
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Inspect the hoses for any leaks of coolant fluid
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="Iquestion5"
                        options={options}
                    />
                    <S.SubHeading>
                        Listed for odd sounds from the water pump
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="Iquestion6"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Ensure the fan is spinning correctly and creating an
                        air-flow through the radiator and motor block
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="Iquestion7"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        Bleed the coolant to ensure there are no air-pockets
                        disrupting the flow
                    </S.SubHeading>
                </S.QuestionContainer>
                <FlowButton
                    previousPage="/Inspection/Questionnaire/PageOne"
                    nextPage="/Inspection"
                    hasIconLeft={false}
                    title="Next"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default PageTwoTemplate;
