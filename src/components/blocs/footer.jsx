import React from 'react'
import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

  export default function SmallCentered() {
    return (
        <Box
          bg="gray.100"
          color="gray.800"
          py="5"
          mt="4"
          px={{ base: 4, sm: 6, md: 8, xl: 28 }}
          fontFamily="poppins"
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Text fontSize="2xl" fontWeight={"medium"} color="gray.800">OurBlog</Text>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={'gray.300'}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>©2022 OurBlog. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
                <Text><Link to="/">Home</Link></Text>
                <Text><Link to="/profile">account</Link></Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
  }  