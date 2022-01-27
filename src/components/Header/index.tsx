import {useState} from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Container
} from './style';

interface PropsModal extends TouchableOpacityProps{
    OpenModal: () => void;
    CloseModal: () => void;
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
            
        </Container>
    );
};