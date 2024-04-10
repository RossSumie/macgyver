import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import * as S from './styles';

const PageFourTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader
            previousPage="/CheckUp/PageThree"
            nextPage="/Home"
        />
        <S.Container>
            <S.SubHeaderContainer>
                <S.SubHeader>
                    <S.PageCouterText>4/5</S.PageCouterText>
                </S.SubHeader>
                <BorderLinearProgress variant="determinate" value={80} />
            </S.SubHeaderContainer>
            <S.QuestionContainer>
                <S.Heading>Please, start your engine</S.Heading>
                <S.SubHeading>Can you hear any abnormal sounds?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Are there any abnormal vibrations?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Are there any abnormal smells?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <FlowButton
                previousPage="/CheckUp/PageFour"
                nextPage="/CheckUp/PageFive"
                hasIconLeft={false}
                title="Next"
            />
        </S.Container>
    </S.Wrapper>
);
export default PageFourTemplate;
