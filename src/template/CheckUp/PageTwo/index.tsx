import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
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
                    <S.PageCouterText>2/5</S.PageCouterText>
                </S.SubHeader>
                <BorderLinearProgress variant="determinate" value={40} />
            </S.SubHeaderContainer>
            <S.QuestionContainer>
                <S.Heading>Tracks</S.Heading>
                <S.SubHeading>
                    Please take a picture of your tracks
                </S.SubHeading>
                <ImageUploadMock />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Evaluate your track motor nuts</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Evaluate your track wear</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
                />
            </S.QuestionContainer>
            <S.QuestionContainer>
                <S.SubHeading>Evaluate your track tension</S.SubHeading>
                <RowRadioButtonsGroup
                    title1="OK"
                    title2="Faulty but OK"
                    title3="Faulty"
                    title4="NA"
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
