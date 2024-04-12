import QuestionnaireHeader from 'components/QuestionnaireHeader';
import { BorderLinearProgress } from 'components/ProgressBar';
import FlowButton from 'components/Buttons/FlowButton';
import RowRadioButtonsGroup from 'components/RadioButtonGroup';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const PageOneTemplate = () => {
    const options1 = [
        { value: 'Hot', label: 'Hot' },
        { value: 'Cold', label: 'Cold' },
        { value: 'Windy', label: 'Windy' },
        { value: 'Downpour', label: 'Downpour' },
        { value: 'NA', label: 'NA' }
    ];

    const options2 = [
        { value: 'Soft', label: 'Soft' },
        { value: 'Firm', label: 'Firm' },
        { value: 'Slippery', label: 'Slippery' },
        { value: 'Large Rocks', label: 'Large Rocks' },
        { value: 'NA', label: 'NA' }
    ];
    return (
        <S.Wrapper>
            <QuestionnaireHeader previousPage="/Home" nextPage="/Home" />
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
                        questionId="question1"
                        options={options1}
                    />
                </S.QuestionContainer>
                <S.QuestionContainer>
                    <S.SubHeading>
                        What type of surface will be operated today?
                    </S.SubHeading>
                    <RowRadioButtonsGroup
                        questionId="question2"
                        options={options2}
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
};
export default PageOneTemplate;
