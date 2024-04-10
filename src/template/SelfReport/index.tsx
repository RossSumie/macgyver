import QuestionnaireHeader from 'components/QuestionnaireHeader';
import QuestionHeader from 'components/QuestionHeader';
import FlowButton from 'components/Buttons/FlowButton';
import ImageUploadMock from 'components/ImageUploadMock';
import * as S from './styles';

const SelfReportTemplate = () => {
    return (
        <S.Wrapper>
            <QuestionnaireHeader previousPage="/Home" nextPage="/Home" />
            <S.Container>
                <S.QuestionContainer>
                    <QuestionHeader title="Would you like to report any issues with your machine?" />
                    <S.TextArea />
                    <S.SubHeading>Would you like to add pictures?</S.SubHeading>
                    <ImageUploadMock />
                </S.QuestionContainer>
                <FlowButton
                    previousPage="/Home"
                    nextPage="/Home"
                    hasIconLeft={false}
                    title="Send"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default SelfReportTemplate;
