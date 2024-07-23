import styles from "./settings.module.scss";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

  import { useDisclosure } from "@chakra-ui/react";
  import { Button,Lorem } from "@chakra-ui/react";
  
  export default function Settings() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        
      </>
    )
  }
