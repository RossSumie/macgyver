import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'components/Modal';
import * as S from './styles';

interface TeamCommentButtonProps {
    title: string;
    content: string;
}

const TeamCommentButton = ({ title, content }: TeamCommentButtonProps) => {
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
            <S.IconContainer onClick={handleOpen}>
                <img
                    src="/assets/Book.svg"
                    alt="book_icon"
                    width={16}
                    height={16}
                />
            </S.IconContainer>
            <Modal isOpen={isOpen} onClose={handleClose} fadeType={fadeType}>
                <S.ModalHeadertContainer>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <S.CloseButton onClick={handleClose}>
                        <CloseIcon style={{ width: 20, height: 20 }} />
                    </S.CloseButton>
                </S.ModalHeadertContainer>
                <S.ModalText>{content}</S.ModalText>
            </Modal>
        </>
    );
};

export default TeamCommentButton;
