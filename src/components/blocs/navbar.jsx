import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { BiDownArrow } from "react-icons/bi"
import { useProfile } from '../../swrHooks/useProfile'

export default function Navbar() {
  const {user, isLoadingProfile, error}= useProfile()
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
                    localStorage.getItem('TOKEN')? <IsAuth user={user?.data}/>:<NotAuth/>
                  }
              </Flex>
          </Flex>
      </Box>
    </>
  )
}

const IsAuth = ({user})=>{
  const navigate = useNavigate()
    return(
      <Menu>
        <MenuButton
          as={Button}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
          px="20"
        >
          <Button size="lg" color="gray.800" textTransform="capitalize" variant="none" leftIcon={<BiDownArrow/>}>{user?.username}</Button>
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
          <MenuItem onClick={()=>{localStorage.clear();navigate("/login")}}>Logout</MenuItem>
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