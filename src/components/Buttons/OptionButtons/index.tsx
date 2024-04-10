import * as S from './styles';

export type TestProps = {
    title: string;
    onClick: () => void;
    bgColor?: string;
};

const OptionButton: React.FC<TestProps> = ({ title, onClick, bgColor }) => {
    return (
        <S.Wrapper
            style={{ backgroundColor: bgColor || undefined }}
            onClick={onClick}
        >
            <h1>{title}</h1>
        </S.Wrapper>
    );
};

export default OptionButton;
