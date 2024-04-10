import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import * as S from './styles';

const PageTwoTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader
            previousPage="/CheckUp/PageOne"
            nextPage="/CheckUp/PageThree"
        />
        <S.Container>
            <S.SubHeaderContainer>
                <S.SubHeader>
                    <S.PageCouterText>2/8</S.PageCouterText>
                </S.SubHeader>
                <BorderLinearProgress variant="determinate" value={60} />
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
                nextPage="/CheckUp/PageThree"
                hasIconLeft={false}
                title="Next"
            />
        </S.Container>
    </S.Wrapper>
);
export default PageTwoTemplate;
