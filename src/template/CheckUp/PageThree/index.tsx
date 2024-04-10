import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageThreeTemplate = () => (
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
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Evaluate if there are any oil leaks</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Evaluate your coolant level</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>
                    Evaluate if there are any coolant leaks
                </S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
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
export default PageThreeTemplate;
