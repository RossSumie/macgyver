import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageTwoTemplate = () => {
    const options2 = [
        { value: 'OK', label: 'OK' },
        { value: 'Untightened', label: 'Untightened' },
        { value: 'Cracked', label: 'Cracked' },
        { value: 'NA', label: 'NA' }
    ];

    const options3 = [
        { value: 'OK', label: 'OK' },
        { value: 'Worn', label: 'Worn' },
        { value: 'Broken', label: 'Broken' },
        { value: 'NA', label: 'NA' }
    ];

    const options4 = [
        { value: 'OK', label: 'OK' },
        { value: 'Tight', label: 'Tight' },
        { value: 'Loose', label: 'Loose' },
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
                        questionId="question2"
                        options={options2}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your track wear</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question3"
                        options={options3}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>Evaluate your track tension</S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question4"
                        options={options4}
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
