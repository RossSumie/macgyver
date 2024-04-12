import QuestionnaireHeader from 'components/QuestionnaireHeader';
import FlowButton from 'components/Buttons/FlowButton';
import QuestionHeader from 'components/QuestionHeader';
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
