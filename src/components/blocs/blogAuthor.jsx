import React from 'react'
import { Box, Heading, Text, Stack, Button, Flex, Spacer, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiEdit, BiTrash  } from "react-icons/bi"
import { DeleteBlog, EditBlog } from '../modals/_index'

export default function BlogAuthor({article}) {
  return (
    <Box py={3} fontFamily="poppins">
      <Box
        maxW={'4xl'}
        w={'full'}
        bg="white"
        boxShadow={'lg'}
        rounded={'md'}
        p={5}
        overflow={'hidden'}>
        <Stack>
          <Flex justifyItems={"center"} alignItems="center" align={"center"}>
            <Link to={`/article/${article.id}`}>
                <Heading
                    color="gray.900"
                    fontSize={'2xl'}
                    fontFamily="poppins"
                    fontWeight={600}
                >
                   {article.title}
                </Heading>  
            </Link>
            <Spacer />
            <Box>
              <EditBlog article={article}/>
              <DeleteBlog id={article.id}/>
            </Box>
          </Flex>
          <Text color={'gray.700'}>
              {article.content}
          </Text>
          <Text
              color={'purple.500'}
              textTransform={'uppercase'}
              fontWeight={500}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {new Date(article.createdAt).toISOString().slice(0,10)}
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}