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
      <Container maxW={'5xl'} fontFamily="poppins">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            fontFamily="poppins"
            
            >
            Meeting scheduling{' '}
            <Text as={'span'} color={'purple.600'} fontFamily="poppins">
              made easy
            </Text>
          </Heading>
          <Text color={'gray.700'} fontSize="lg" maxW={'4xl'}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
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