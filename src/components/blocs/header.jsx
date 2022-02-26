import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
  
  export default function Header() {
    return (
      <Container maxW={'8xl'} fontFamily="poppins" h="64" bg="gray.100">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 2, md: 4 }}
          py={{ base: 4, md: 9 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            fontFamily="poppins"
            >
            Lorem ipsum dolor {' '}
            <Text as={'span'} color={'purple.600'} fontFamily="poppins">
              ourBlog
            </Text>
          </Heading>
          <Text color={'gray.700'} fontSize="lg" maxW={'4xl'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita. Reprehenderit voluptatem id vel animi corrupti itaque corporis eligendi in minima, ipsa cum saepe voluptas?
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link to="/signup">
                <Button
                rounded={'full'}
                px={8}
                py="2"
                colorScheme={'purple'}
                bg={'purple.500'}
                _hover={{ bg: 'purple.600' }}
                size="lg"
            >
                    Get started
                </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    );
}