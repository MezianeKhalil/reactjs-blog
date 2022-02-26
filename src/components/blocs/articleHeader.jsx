import React from 'react'
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    IconButton,
    createIcon,
  } from '@chakra-ui/react'
  
  export default function ArticleHeader() {
    return (
      <Container maxW={'8xl'} fontFamily="poppins" h="64" bg="gray.50">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 4, md: 9 }}
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
                Boost your conversion rate
            </Heading>
            <Text color={'gray.700'} fontSize="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem vel officiis magnam eum esse vero incidunt obcaecati tempore labore exercitationem, fugit sapiente illum ullam tempora nisi. Tenetur esse eaque assumenda possimus veritatis molestias quis dolore similique nobis et! Illum!
            </Text>
          </Stack>
        </Stack>
      </Container>
    )
  }