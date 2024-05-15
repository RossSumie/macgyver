import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'components/Modal';
import * as S from './styles';

// Define props interface if you use TypeScript, or just use props directly
interface ARModalProps {
    partName: string; // Prop for customizing the part name in the button
}

const ARModal = ({ partName = 'Radiator' }: ARModalProps) => {
    // Default "Radiator" if not provided
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
                <S.ButtonText>Locate {partName}</S.ButtonText>
                <img
                    src="/assets/AR_Black.svg"
                    alt="AR icon"
                    width={16}
                    height={16}
                />
            </S.Container>
            <Modal isOpen={isOpen} onClose={handleClose} fadeType={fadeType}>
                <S.ModalHeadertContainer>
                    <S.Helper />
                    <S.ModalTitle>AR feature</S.ModalTitle>
                    <S.CloseButton onClick={handleClose}>
                        <CloseIcon style={{ width: 20, height: 20 }} />
                    </S.CloseButton>
                </S.ModalHeadertContainer>
                <S.ModalText>
                    Upon clicking this button, the user should be taken to an AR
                    environment that interacts with the surroundings, indicating
                    where the desired part is located. This feature is designed
                    to instruct the operator (who is not a technician) to better
                    understand their machine. This feature has not been
                    developed yet! Please contact a member of our team if you
                    would like to know more.
                </S.ModalText>
                <S.ModalFooterContainer>
                    <S.ModalFooter>ross.sumie@gmail.com</S.ModalFooter>
                    <S.ModalFooter>sowmya226002@gmail.com</S.ModalFooter>
                </S.ModalFooterContainer>
            </Modal>
        </>
    );
};

export default ARModal;
