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
  import { initialValues, validationSchema } from './password_change.form';
import { User } from '@/api';
import { useAuth } from '@/hooks';

export default function PasswordChange(){
    const {isOpen, onOpen, onClose} = useDisclosure();
    const valido = true;
    const userCtrl = new User();
    const {user} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log(user.id)
                await userCtrl.updateMe({"password" : formValue.password}, user.id)
                alert("password changed")   
            } catch (error) {
                console.log(error)
            }
            
        }
    })

    return(
        <>
            <Button onClick={onOpen}>Cambiar Contraseña</Button>
  
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Cambiar Contraseña</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={3} m={1}>
                           
                               
                                    <Input
                                     placeholder='Contraseña Nueva'
                                      errorBorderColor='red.300'
                                       value={formik.values.password}
                                        isInvalid={formik.errors.password}
                                         onChange={formik.handleChange}
                                         name='password'/>
                                    <Input 
                                    placeholder='Confirmacion Contraseña Nueva' 
                                    errorBorderColor='red.300' 
                                    value={formik.values.passwordConfirmation} 
                                    isInvalid={formik.errors.passwordConfirmation} 
                                    onChange={formik.handleChange}
                                    name='passwordConfirmation'/>
                                
                                
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