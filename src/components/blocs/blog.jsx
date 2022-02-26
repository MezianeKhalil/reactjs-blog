import React from 'react'
import { Box, Heading, Text, Stack, useColorModeValue} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function BlogPost() {
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
            <Link to='/article/4'>
                <Heading
                    color="gray.900"
                    fontSize={'2xl'}
                    fontFamily="poppins"
                    fontWeight={600}
                >
                    Boost your conversion rate
                </Heading>  
            </Link>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
            </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>meziane khalil</Text>
            <Text color={'gray.500'}>Feb 08, 2021</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}