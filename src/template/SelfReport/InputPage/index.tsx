import QuestionnaireHeader from 'components/QuestionnaireHeader';
import QuestionHeader from 'components/QuestionHeader';
import FlowButton from 'components/Buttons/FlowButton';
import ImageUploadMock from 'components/ImageUploadMock';
import MicrophoneComponent from 'components/AudioRec';
import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
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
                    <S.HeadingContainer>
                        <QuestionHeader title="Would you like to report any issues with your machine?" />
                        <TeamCommentButton
                            title="Speech recognition feature"
                            content="After some validations with the VolvoCE team, we discovered that the best way to obtain inputs from operators is through audio, since VolvoCE's experience indicates that there is difficulty in communicating via text with this group.For this prototype, the speech recognition module works only with English."
                        />
                    </S.HeadingContainer>
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
