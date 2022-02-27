import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton, useDisclosure, IconButton, Button } from '@chakra-ui/react'
import { BiEdit  } from "react-icons/bi"
import { EditArticleForm } from '../form/_index'

export default function EditBlog() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton onClick={onOpen} mr="1" icon={<BiEdit />} size="sm"  colorScheme="purple" variant="outline"></IconButton>
            <Modal isOpen={isOpen} size="lg" onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent fontFamily={"poppins"}>
                    <ModalHeader>Edit Article</ModalHeader>
                    <ModalCloseButton />
                    <EditArticleForm onClose={onClose}/>
                </ModalContent>
            </Modal>
        </>
    )
}