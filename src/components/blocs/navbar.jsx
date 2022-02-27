import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiDownArrow } from "react-icons/bi"

export default function Navbar() {

  return (
    <>
      <Box fontFamily="poppins" px={{ base: 4, sm: 6, md: 8, xl: 28 }} shadow={"md"}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Heading as="h1" fontSize="3xl" fontFamily="poppins" fontWeight="semibold">
                <Link to="/">
                  OurBlog
                </Link>
              </Heading>
              <Flex alignItems={'center'}>
                  {
                    true? <IsAuth/>:<NotAuth/>
                  }
              </Flex>
          </Flex>
      </Box>
    </>
  )
}

const IsAuth = ()=>{
    return(
      <Menu>
        <MenuButton
          as={Button}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
          px="20"
        >
          <Button size="lg" color="gray.800" textTransform="capitalize" variant="none" leftIcon={<BiDownArrow/>}>meziane khalil</Button>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/create">Create Post</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/my-posts">My Posts</Link>
          </MenuItem>
          <MenuDivider/>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    )
}

const NotAuth = ()=>{
  return(
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
  )
}