import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import * as S from './styles';

const PageTwoTemplate = () => (
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
                <BorderLinearProgress variant="determinate" value={50} />
            </S.SubHeaderContainer>
            <S.QuestionContainer>
                <S.Heading>Weather</S.Heading>
                <S.SubHeading>How is the weather today?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="Hot"
                    title2="Cold"
                    title3="Windy"
                    title4="Downpour"
                    title5="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.Heading>Weather</S.Heading>
                <S.SubHeading>How is the weather today?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="Hot"
                    title2="Cold"
                    title3="Windy"
                    title4="Downpour"
                    title5="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.Heading>Weather</S.Heading>
                <S.SubHeading>How is the weather today?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="Hot"
                    title2="Cold"
                    title3="Windy"
                    title4="Downpour"
                    title5="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.Heading>Weather</S.Heading>
                <S.SubHeading>How is the weather today?</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="Hot"
                    title2="Cold"
                    title3="Windy"
                    title4="Downpour"
                    title5="NA"
                />
            </S.QuestionContainer>
            <FlowButton
                previousPage="/CheckUp/PageOne"
                nextPage="/"
                hasIconLeft={false}
                title="Next"
            />
        </S.Container>
    </S.Wrapper>
);
export default PageTwoTemplate;
