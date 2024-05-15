/* eslint-disable react/require-default-props */
import React, { useState, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'components/Modal';
import * as S from './styles';

interface NotDevelopedButtonProps {
    children?: ReactNode; // Optional prop to allow customization of the button's content
}

const NotDevelopedButton = ({ children }: NotDevelopedButtonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fadeType, setFadeType] = useState<'in' | 'out'>('in');

    const handleOpen = () => {
        setFadeType('in');
        setIsOpen(true);
    };

    const handleClose = () => {
        setFadeType('out');
        setTimeout(() => setIsOpen(false), 500);
    };

    return (
        <>
            <S.Container onClick={handleOpen}>
                {children || 'Open Modal'}
            </S.Container>
            <Modal isOpen={isOpen} onClose={handleClose} fadeType={fadeType}>
                <S.ModalHeadertContainer>
                    <S.Helper />
                    <S.ModalTitle>Oops!</S.ModalTitle>
                    <S.CloseButton onClick={handleClose}>
                        <CloseIcon style={{ width: 20, height: 20 }} />
                    </S.CloseButton>
                </S.ModalHeadertContainer>
                <S.ModalText>
                    It seems that this feature has not been developed yet!
                    Please contact a member of our team if you would like to
                    know more.
                </S.ModalText>
                <S.ModalFooterContainer>
                    <S.ModalFooter>ross.sumie@gmail.com</S.ModalFooter>
                    <S.ModalFooter>sowmya226002@gmail.com</S.ModalFooter>
                </S.ModalFooterContainer>
            </Modal>
        </>
    );
};

export default NotDevelopedButton;
