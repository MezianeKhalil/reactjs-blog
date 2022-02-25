import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
//   Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Box fontFamily="poppins" px={4} px="16" shadow={"md"}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Heading as="h1" fontSize="3xl" fontFamily="poppins" fontWeight="medium">OurBlog</Heading>
                <Flex alignItems={'center'}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link to="/login">
                            <Button px="4" py="2" fontSize="lg" fontWeight="medium" variant="none"  textTransform="capitalize">login</Button>
                        </Link> 
                        <Link to="/signup">
                            <Button px="4" py="2" fontSize="lg" fontWeight="medium" variant="none" textColor="white" textTransform="capitalize" bg="purple.500">signup</Button>
                        </Link>
                    </HStack>
                </Flex>
            </Flex>

            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
                </Stack>
            </Box>
            ) : null}
        </Box>
    </>
  );
}


const Menuy = ()=>{
    return(
        <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
    )
}