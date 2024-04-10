import * as S from './styles';

export type TestProps = {
    title: string;
};

const QuestionHeader: React.FC<TestProps> = ({ title }) => (
    <S.Wrapper>
        <h1>{title}</h1>
    </S.Wrapper>
);

export default QuestionHeader;
