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
            <QuestionHeader title="Please select a Machine" />
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
                <S.MenuButton onClick={() => Router.push('/Home')}>
                    <img
                        src="/assets/crawler-excavator-ec950e.jpg"
                        alt="machine_image"
                        width={80}
                        height={80}
                    />
                    EC90E 01
                </S.MenuButton>
                <S.MenuButton onClick={() => Router.push('/Home')}>
                    <img
                        src="/assets/crawler-excavator-ec950e.jpg"
                        alt="machine_image"
                        width={80}
                        height={80}
                    />
                    EC90E 02
                </S.MenuButton>{' '}
                <S.MenuButton onClick={() => Router.push('/Home')}>
                    <img
                        src="/assets/crawler-excavator-ec950e.jpg"
                        alt="machine_image"
                        width={80}
                        height={80}
                    />
                    EC90E 03
                </S.MenuButton>{' '}
                <S.MenuButton onClick={() => Router.push('/Home')}>
                    <img
                        src="/assets/wheel-loader-l260h.jpg"
                        alt="machine_image"
                        width={80}
                        height={80}
                    />
                    L260H 01
                </S.MenuButton>{' '}
                <S.MenuButton onClick={() => Router.push('/Home')}>
                    <img
                        src="/assets/articulated-hauler-a60h.jpg"
                        alt="machine_image"
                        width={80}
                        height={80}
                    />
                    A60H 01
                </S.MenuButton>
            </S.ButtonContainer>
        </S.Container>
    </S.Wrapper>
);
export default MachineSelectionTemplate;
