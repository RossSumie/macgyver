import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
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
                        questionId="question1"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your track wear</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question2"
                        options={options}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your track tension</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question3"
                        options={options}
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
};
export default PageTwoTemplate;
