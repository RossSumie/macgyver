/* eslint-disable react/button-has-type */
import QuestionHeader from 'components/QuestionHeader';
import Modal from 'components/Modal';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as S from './styles';

const MachineSelectionTemplate = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Definindo o tipo de estado como boolean
    const [fadeType, setFadeType] = useState<'in' | 'out'>('in');
    const [modalPage, setModalPage] = useState(1);

    useEffect(() => {
        setFadeType('in');
        setIsOpen(true); // Abre o modal automaticamente ao carregar
    }, []);

    const handleClose = () => {
        setFadeType('out');
        setTimeout(() => setIsOpen(false), 500); // Ensure fade-out completes
    };

    const handleNext = () => {
        setModalPage(2); // Move to the next page of the modal
    };

    return (
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
                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    fadeType={fadeType}
                >
                    {modalPage === 1 && (
                        <>
                            <S.ModalHeadertContainer>
                                <S.ModalTitle>Welcome to VolvoHS!</S.ModalTitle>
                                <S.CloseButton onClick={handleClose}>
                                    <CloseIcon
                                        style={{ width: 20, height: 20 }}
                                    />
                                </S.CloseButton>
                            </S.ModalHeadertContainer>
                            <S.ModalText>
                                This is a prototype created by students from BTH
                                and USP with the purpose of simulating what it
                                would be like for an operator to use the
                                VolvoHS. There are functionalities that have not
                                been developed at this stage (such as
                                integration with AR) and no data is being
                                collected or stored during the use of this
                                prototype.
                            </S.ModalText>
                            <S.ModalText>
                                All the analyses and responses you will see in
                                this prototype are fictitious and are only
                                intended to give you an idea of what the user
                                experience would be like.
                            </S.ModalText>
                            <S.ModalNextButton onClick={handleNext}>
                                Next
                            </S.ModalNextButton>
                        </>
                    )}
                    {modalPage === 2 && (
                        <>
                            <S.ModalHeadertContainer>
                                <S.ModalTitle>
                                    Developing team comments
                                </S.ModalTitle>
                                <S.CloseButton onClick={handleClose}>
                                    <CloseIcon
                                        style={{ width: 20, height: 20 }}
                                    />
                                </S.CloseButton>
                            </S.ModalHeadertContainer>
                            <S.IconContainer>
                                <img
                                    src="/assets/Book.svg"
                                    alt="book_icon"
                                    width={24}
                                    height={24}
                                />
                            </S.IconContainer>
                            <S.ModalText>
                                There are some comments throughout the prototype
                                to explain and facilitate the use of the app.
                                Click on the information book icons distributed
                                throughout the flow to better understand the
                                functionalities and the meaning of each screen
                            </S.ModalText>
                            <S.ModalNextButton onClick={handleClose}>
                                Got it!
                            </S.ModalNextButton>
                        </>
                    )}
                </Modal>
                <QuestionHeader title="Please select a machine" />
                <S.ButtonContainer>
                    <S.MenuButton
                        onClick={() => Router.push('/Home/FirstHome')}
                        style={{
                            backgroundImage: 'url("/assets/EC210D.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <S.ButtonText>EC210D 02</S.ButtonText>
                    </S.MenuButton>
                    <S.MenuButton
                        onClick={() => Router.push('/Home/FirstHome')}
                        style={{
                            backgroundImage: 'url("/assets/EC350D.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <S.ButtonText>EC350DD 01</S.ButtonText>
                    </S.MenuButton>
                    <S.MenuButton
                        onClick={() => Router.push('/Home/FirstHome')}
                        style={{
                            backgroundImage: 'url("/assets/EC950E.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <S.ButtonText>EC950E 01</S.ButtonText>
                    </S.MenuButton>
                    <S.MenuButton
                        onClick={() => Router.push('/Home/FirstHome')}
                        style={{
                            backgroundImage: 'url("/assets/EC350D.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <S.ButtonText>EC350D1 02</S.ButtonText>
                    </S.MenuButton>
                    <S.MenuButton
                        onClick={() => Router.push('/Home/FirstHome')}
                        style={{
                            backgroundImage: 'url("/assets/EC350D.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <S.ButtonText>EC350D1 03</S.ButtonText>
                    </S.MenuButton>
                </S.ButtonContainer>
                <S.AddMachineButton>
                    Add New Machine
                    <img
                        src="/assets/Add.svg"
                        alt="add_icon"
                        width={24}
                        height={24}
                    />
                </S.AddMachineButton>
            </S.Container>
        </S.Wrapper>
    );
};
export default MachineSelectionTemplate;
