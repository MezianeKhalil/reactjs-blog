import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { BlogAuthor } from './../blocs/_index'


export default function AuthorLayout() {
  return (
    <Box maxW={"5xl"} mx="auto" my="6" fontFamily={"poppins"}>
        <Text textTransform={"capitalize"} fontSize="3xl" fontWeight={"medium"} color="gray.900" >my Articles</Text>
        <BlogAuthor/>
        <BlogAuthor/>
        <BlogAuthor/>
        <BlogAuthor/>
        <BlogAuthor/>
    </Box>
  )
}