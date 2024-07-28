import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react';
import React from 'react';
import { Address as ApiAddress } from '@/api/address';

export default function AddressDelete(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const {id, onReload} = props
    const deleteFun = async ()=>{
        try {
            const dirCtrl = new ApiAddress();
            console.log(await dirCtrl.DeleteOne(id))
            onReload()
            onClose()

            console.log("Deleted")
        } catch (error) {
            console.log("Delete error: ", error)
        }
    }
    return (
      <>
        <i class="bi bi-trash3" onClick={onOpen}></i>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Eliminar direccion
              </AlertDialogHeader>
  
              <AlertDialogBody>
                mensaje de confirmacion
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={deleteFun} ml={3}>
                  Borrar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }