import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton, useDisclosure, IconButton, Button, Text } from '@chakra-ui/react'
import { BiTrash  } from "react-icons/bi"
import { DeleteBlogCall } from './../../services/httpClient'
import { useBlogsAuthor } from './../../swrHooks/useBlogsAuthor'


export default function DeleteBlog({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { mutate } = useBlogsAuthor()
    const handelDelete = async ()=>{
        try{
            await DeleteBlogCall(id)
            mutate()
            onClose()
        }catch(error){
            console.log(error.response)
        }
    }

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
                <Button colorScheme='blue' mr={3} onClick={handelDelete}>
                    Delete
                </Button>
                <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}