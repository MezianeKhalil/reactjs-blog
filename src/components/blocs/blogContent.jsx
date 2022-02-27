import React from 'react'
import { Container, Text } from '@chakra-ui/react'

export default function BlogContent({article}) {
  return (
    <Container maxW={'8xl'} minH="64" py="8" px={{ base: 4, sm: 6, md: 10, xl: 44 }}  fontFamily="poppins">
        <Text textColor="gray.800" fontSize={"xl"} lineHeight="1.5">
            {article.content}
        </Text>
    </Container>
  )
}
