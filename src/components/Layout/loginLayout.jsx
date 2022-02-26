import React from 'react'
import { Box, GridItem, SimpleGrid, Text, Image, Flex } from "@chakra-ui/react"
import { LoginForm } from '../form/_index'
import LoginImage from '../../assets/images/Login.png'

export default function LoginLayout() {
  return (
    <Box px={8} mx="auto" fontFamily={"poppins"}>
        <SimpleGrid
          alignItems="center"
          w="full"
          columns={{ base: 1, lg: 12 }}
          gap={{ base: 0, lg: 24 }}
          mx="auto"
          h="100vh"
        >
          <GridItem
            colSpan={{ base: 0, lg: 6 }}
            display={{ base:"none", lg:"block"}}
          >
            <Image src={LoginImage} w="80%" mx="auto"/>
          </GridItem>
          <GridItem
            colSpan={{ base: "auto", lg: 6 }}
          >
            <Box>
              <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize">login</Text>
              <Flex h="96" w="full" justifyItems={"center"} alignItems="center">
                <LoginForm/>
              </Flex>
            </Box>
          </GridItem>
        </SimpleGrid>
    </Box>
  )
}