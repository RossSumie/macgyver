// import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import * as S from './styles';

interface ModalProps {
    isOpen: boolean; // Define se o modal está aberto ou não
    children: ReactNode; // Conteúdo do modal
    onClose: () => void; // Função chamada para fechar o modal
    fadeType: 'in' | 'out'; // Adding fadeType to the interface
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    children,
    onClose,
    fadeType
}) => {
    if (!isOpen) return null;

    return (
        <S.ModalBackdrop onClick={onClose} fadeType={fadeType}>
            <S.ModalContent
                onClick={(e) => e.stopPropagation()}
                fadeType={fadeType}
            >
                {children}
            </S.ModalContent>
        </S.ModalBackdrop>
    );
};
export default Modal;
