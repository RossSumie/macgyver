import QuestionHeader from 'components/QuestionHeader';
import Router from 'next/router';
import * as S from './styles';

const MachineSelectionTemplate = () => (
    <S.Wrapper>
        <S.HeaderContainer>
            <S.LogoContainer>
                <img
                    src="/assets/Volvo-Spread-Word-Mark-Black.svg"
                    height={8}
                    alt="logo"
                />
            </S.LogoContainer>
        </S.HeaderContainer>
        <S.Container>
            <QuestionHeader title="Please select a machine" />
            <S.AddMachineButton>
                Add New Machine
                <img
                    src="/assets/Add.svg"
                    alt="add_icon"
                    width={24}
                    height={24}
                />
            </S.AddMachineButton>
            <S.ButtonContainer>
                <S.MenuButton
                    onClick={() => Router.push('/Home')}
                    style={{
                        backgroundImage: 'url("/assets/EC210D.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <S.ButtonText>EC210D 02</S.ButtonText>
                </S.MenuButton>
                <S.MenuButton
                    onClick={() => Router.push('/Home')}
                    style={{
                        backgroundImage: 'url("/assets/EC350D.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <S.ButtonText>EC350DD 01</S.ButtonText>
                </S.MenuButton>
                <S.MenuButton
                    onClick={() => Router.push('/Home')}
                    style={{
                        backgroundImage: 'url("/assets/EC950E.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <S.ButtonText>EC950E 01</S.ButtonText>
                </S.MenuButton>
                <S.MenuButton
                    onClick={() => Router.push('/Home')}
                    style={{
                        backgroundImage: 'url("/assets/EC350D.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <S.ButtonText>EC350D1 02</S.ButtonText>
                </S.MenuButton>
                <S.MenuButton
                    onClick={() => Router.push('/Home')}
                    style={{
                        backgroundImage: 'url("/assets/EC350D.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <S.ButtonText>EC350D1 03</S.ButtonText>
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default MachineSelectionTemplate;
