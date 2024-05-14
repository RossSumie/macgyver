import QuestionnaireHeader from 'components/QuestionnaireHeader';
import QuestionHeader from 'components/QuestionHeader';
import FlowButton from 'components/Buttons/FlowButton';
import ImageUploadMock from 'components/ImageUploadMock';
import MicrophoneComponent from 'components/AudioRec';
import * as S from './styles';

const InputPageTemplate = () => {
    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/Home"
                nextPage="/SelfReport/ResponsePage"
            />
            <S.Container>
                <S.QuestionContainer>
                    <QuestionHeader title="Would you like to report any issues with your machine?" />
                    <S.SubHeading>
                        Click the microphone button below and record a brief
                        audio message. Describe the issue you have noticed in as
                        much detail as possible
                    </S.SubHeading>
                    <MicrophoneComponent />
                    <S.SubHeading>
                        You can add pictures to your report by clicking the
                        camera button below
                    </S.SubHeading>
                    <ImageUploadMock />
                </S.QuestionContainer>
                <FlowButton
                    previousPage="/Home"
                    nextPage="/SelfReport/ResponsePage"
                    hasIconLeft={false}
                    title="Send"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default InputPageTemplate;
