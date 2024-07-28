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
export default function ModifyAddressModal(props){
    const { data, id } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <i class="bi bi-pencil-square" onClick={onOpen}></i>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modificar direccion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <AddressForm Close={onClose} onReload={props.onReload} id={id} data={data}/>
            </ModalBody>

            </ModalContent>
        </Modal>
    

        </>
    )
}