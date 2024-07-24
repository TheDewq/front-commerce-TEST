import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    InputGroup,
    Input,
    Box
  } from '@chakra-ui/react';

  import { useDisclosure } from "@chakra-ui/react";
  import { Button,Lorem } from "@chakra-ui/react";
  import { useFormik } from 'formik';
  import { initialValues, validationSchema } from './email_change.form';
import { User } from '@/api';
import { useAuth } from '@/hooks';

export default function EmailChange(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    const userCtrl = new User();
    const {user} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log(user.id)
                await userCtrl.updateMe({"email" : formValue.email, "username": formValue.email}, user.id)
                alert("email changed")   
            } catch (error) {
                console.log(error)
            }
            
        }
    })

    return(
        <>
            <Button onClick={onOpen}>Cambiar Correo</Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Cambiar Correo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={3} m={1}>
                            
                                
                                    <Input
                                        placeholder='Correo Nuevo'
                                        type='email'
                                        errorBorderColor='red.300'
                                        value={formik.values.email}
                                        isInvalid={formik.errors.email}
                                        onChange={formik.handleChange}
                                        name='email'/>
                                    <Input 
                                    placeholder='Confirmacion Correo Nuevo' 
                                    type='email'
                                    errorBorderColor='red.300' 
                                    value={formik.values.emailConfirmation} 
                                    isInvalid={formik.errors.emailConfirmation} 
                                    onChange={formik.handleChange}
                                    name='emailConfirmation'/>
                                
                                
                                <InputGroup>
                                    <Button colorScheme='blue' m={1} type='submit'>Confirmar</Button>
                                    <Button onClick={onClose} m={1}>Cancelar</Button>
                                </InputGroup>
                
                        </Stack>
                        </form>
                </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}