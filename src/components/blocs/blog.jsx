import React from 'react'
import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function BlogPost({article}) {
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
            <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={500}
                fontSize={'sm'}
                letterSpacing={1.1}>
                Blog
            </Text>
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
            <Text color={'gray.500'}>
                {article.content}
            </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{article.user.username}</Text>
            <Text color={'gray.500'}>{new Date(article.createdAt).toISOString().substring(0, 10)}</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}