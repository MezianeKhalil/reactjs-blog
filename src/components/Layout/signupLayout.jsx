import React from 'react'
import { Box, GridItem, SimpleGrid, Text, Image, Flex } from "@chakra-ui/react"
import { SignupForm } from '../form/_index'
import LoginImage from '../../assets/images/Login.png'



export default function SignupLayout() {
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
            display={{base:"none", lg:"block"}}
          >
           <Image src={LoginImage} w="80%" mx="auto"/>
          </GridItem>
          <GridItem
            colSpan={{ base: "auto", md: 6 }}
          >
            <Box>
              <Flex h="96" w="full" justifyItems={"center"} alignItems="center">
                <SignupForm/>
              </Flex>
            </Box>
          </GridItem>
        </SimpleGrid>
    </Box>
  )
}