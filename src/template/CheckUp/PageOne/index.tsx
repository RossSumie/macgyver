import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageOneTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/CheckUp/PageTwo" nextPage="/Home" />
        <S.Container>
            <S.SubHeaderContainer>
                <S.SubHeader>
                    <S.PageCouterText>1/5</S.PageCouterText>
                </S.SubHeader>
                <BorderLinearProgress variant="determinate" value={20} />
            </S.SubHeaderContainer>
            <S.QuestionContainer>
                <S.Heading>Enviroment</S.Heading>
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
                <S.SubHeading>
                    What type of surface will be operated today?
                </S.SubHeading>
                <RowRadioButtonsGroup
                    title1="Soft"
                    title2="Firm"
                    title3="Large Rocks"
                    title4="Slippery"
                    title5="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>
                    Please take a picture of your working ground
                </S.SubHeading>
                <ImageUploadMock />
            </S.QuestionContainer>
            <FlowButton
                previousPage="/Home"
                nextPage="/CheckUp/PageTwo"
                hasIconLeft={false}
                title="Next"
            />
        </S.Container>
    </S.Wrapper>
);
export default PageOneTemplate;
