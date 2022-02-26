import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  export default function SmallCentered() {
    return (
        <Box
            bg="gray.100"
            color="gray.700"
            py="5"
            mt="4"
            fontFamily="poppins"
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Text>logo</Text>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
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
                {/* links */}
                <Text>link 1</Text>
                <Text>link 1</Text>
                <Text>link 1</Text>
                <Text>link 1</Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
  }  