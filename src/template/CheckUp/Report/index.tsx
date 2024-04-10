import QuestionnaireHeader from 'components/QuestionnaireHeader';
import CircularWithValueLabel from 'components/ProgressCircle';
import * as S from './styles';

const ReportTemplate = () => (
    <S.Wrapper>
        <QuestionnaireHeader previousPage="/CheckUp/PageTwo" nextPage="/Home" />
        <S.Container>
            <S.Heading>General Report</S.Heading>
            <S.Information>
                <S.InformationColumn>
                    <S.SubHeading>Machine Type : EC210D</S.SubHeading>
                    <S.SubHeading>Operator : Arthur Paparounis</S.SubHeading>
                </S.InformationColumn>
                <S.InformationColumn>
                    <S.SubHeading>Machine Number : 11341186</S.SubHeading>
                    <S.SubHeading>Date: 10/04/24</S.SubHeading>
                </S.InformationColumn>
            </S.Information>
            <CircularWithValueLabel value={40} />
        </S.Container>
    </S.Wrapper>
);
export default ReportTemplate;
