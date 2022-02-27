import React from 'react'
import { Container, Stack, Flex, Heading, Text } from '@chakra-ui/react'
  
export default function ArticleHeader({article}) {
  return (
    <Container maxW={'8xl'} fontFamily="poppins" h="56" bg="gray.50">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 1, md: 3 }}
        py={{ base: 1, md: 3 }}
        direction={{ base: 'column', md: 'row' }}
        mx="auto"
        maxW='4xl'
      >
        <Stack flex={1} spacing={{ base: 2, md: 5 }}>
          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              position={'relative'}
              fontFamily="poppins"
              color={'gray.900'}
          >
              {article.title}
          </Heading>
          <Text color={'gray.700'} fontSize="lg">
            {article.content}
          </Text>
          <Stack mt={2} direction={'row'} spacing={2} align={'center'} justifyItems="center">
            <Flex direction={'row'} gap={2} justifyItems="center" align={"center"} alignItems="center" maxW="6xl" mx="auto">
              <Text fontWeight={600} fontSize="xl" textTransform={"capitalize"}>{article.user.username}</Text>
              <Text color={'gray.700'} fontSize="lg">{new Date(article.createdAt).toISOString().slice(0,10)}</Text>
            </Flex>
        </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}