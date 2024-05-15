import QuestionnaireHeader from 'components/QuestionnaireHeader';
import FlowButton from 'components/Buttons/FlowButton';
import QuestionHeader from 'components/QuestionHeader';
import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
import * as S from './styles';

const ResponsePageTemplate = () => {
    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/SelfReport/InputPage"
                nextPage="/Home"
            />
            <S.Container>
                <S.TextContainer>
                    <QuestionHeader title="Issue Analysis" />
                    <S.SubHeading>
                        The issue with your power decrease is most likely to
                        stem from hydraulic issues like valves and leaks. Would
                        you like to do a hydraulic inspection to increase
                        understanding of the problem?
                    </S.SubHeading>
                    <TeamCommentButton
                        title="Audio transcript analysis"
                        content="The analysis on this page represents the analysis that will be conducted based on the audio sent by the operator. If there is something concerning and immediately correlatable with one of the predefined inspections, the screen should direct the operator to the inspections screen, encouraging the operator to conduct a more thorough evaluation of their issue to collect specific data."
                    />
                </S.TextContainer>
                <FlowButton
                    previousPage="/Home"
                    nextPage="/Inspection"
                    hasIconLeft={false}
                    title="Start Inspection"
                />
            </S.Container>
        </S.Wrapper>
    );
};
export default ResponsePageTemplate;
