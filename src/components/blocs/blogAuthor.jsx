import React from 'react'
import { Box, Heading, Text, Stack, Button, Flex, Spacer, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiEdit, BiTrash  } from "react-icons/bi"
import { DeleteBlog, EditBlog } from '../modals/_index'

export default function BlogAuthor() {
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
            <Link to={`/article/${1}`}>
                <Heading
                    color="gray.900"
                    fontSize={'2xl'}
                    fontFamily="poppins"
                    fontWeight={600}
                >
                    Boost your conversion rate
                </Heading>  
            </Link>
            <Spacer />
            <Box>
              <EditBlog/>
              <DeleteBlog/>
            </Box>
          </Flex>
          <Text color={'gray.700'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
          </Text>
          <Text
              color={'purple.500'}
              textTransform={'uppercase'}
              fontWeight={500}
              fontSize={'sm'}
              letterSpacing={1.1}>
              Feb 08, 2021
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}