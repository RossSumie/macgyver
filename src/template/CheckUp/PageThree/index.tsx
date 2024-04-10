import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageThreeTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/CheckUp/PageTwo" nextPage="/Home" />
        <S.Container>
            <S.SubHeaderContainer>
                <S.SubHeader>
                    <S.PageCouterText>1/8</S.PageCouterText>
                </S.SubHeader>
                <BorderLinearProgress variant="determinate" value={90} />
            </S.SubHeaderContainer>
            <S.QuestionContainer>
                <S.Heading>Engine|Picture</S.Heading>
                <S.SubHeading>
                    Please take a picture of the hydraulic system
                </S.SubHeading>
                <ImageUploadMock />
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
export default PageThreeTemplate;
