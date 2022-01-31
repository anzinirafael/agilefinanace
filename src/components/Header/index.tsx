import {useState} from 'react';
import { Modal, ModalProps, TouchableOpacityProps } from 'react-native';
import {
    Container,
    Content,
    ComponentTitle,
    MenuTitleFinance,
    MenutTitleAgile,
    HamburguerMenu
} from './style';

interface PropsModal extends TouchableOpacityProps{ 
    OpenModal: () => void;
    CloseModal: () => void;
}

interface PropsModal extends ModalProps{
    visible: boolean;
}

export function Header({OpenModal, CloseModal, ...rest}: PropsModal){
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal(){
        setOpenModal(true);
    }

    function handleCloseModal(){
        setOpenModal(false);
    }

    return(
        <Container> 
            <Content>
                <ComponentTitle>
                    <MenuTitleFinance>
                        finance
                    </MenuTitleFinance>
                    <MenutTitleAgile>
                        agile
                    </MenutTitleAgile>
                </ComponentTitle>
            <Modal visible={handleOpenModal}>
            </Modal>
            </Content>
        </Container>
    );
}