import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

  import { useDisclosure, Button } from '@chakra-ui/react';
import AddressForm from './address_form';
export default function NewAddressModal(props){
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Button onClick={onOpen}>Agregar Direccion</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Agregar direccion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <AddressForm Close={onClose} onReload={props.onReload}/>
            </ModalBody>

            </ModalContent>
        </Modal>
    

        </>
    )
}