import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton, useDisclosure, IconButton, Button, Text } from '@chakra-ui/react'
import { BiTrash  } from "react-icons/bi"


export default function DeleteBlog() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <IconButton onClick={onOpen} mr="1" icon={<BiTrash />} size="sm" colorScheme="red" variant="outline"></IconButton>
        <Modal isOpen={isOpen} size="lg" onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent fontFamily={"poppins"}>
                <ModalHeader>Delete Article</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text textTransform={"capitalize"} fontSize="lg">this action will delete you article</Text>
                </ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Delete
                </Button>
                <Button variant='ghost'>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}