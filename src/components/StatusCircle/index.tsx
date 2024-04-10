import * as S from './styles';

export type TestProps = {
    color: string;
};

const StatusCircle: React.FC<TestProps> = ({ color }) => {
    return <S.Circle style={{ backgroundColor: color }} />;
};

export default StatusCircle;
