import React from 'react'
import { Box, GridItem, SimpleGrid, Text, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

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
            display={{base:"none", lg:"block"}}
          >
            {/* image */}
            <Box h="96" w="full" bg="green.500"></Box>
            {/* end image */}
          </GridItem>
          <GridItem
            colSpan={{ base: "auto", md: 6 }}
          >
            <Box>
              <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize" pt={2}>login</Text>

              {/* login form */}
              <Box h="96" w="full" bg="red.500"></Box>
              {/* end login form */}
              <Text 
                fontSize="md" 
                textAlign="center" 
                color="gray.700" 
                textTransform="capitalize" 
              >
                don't have account? 
                <Link to="/signup">
                    <Text display="inline" px="2" fontWeight="semibold" color="green.500">Create</Text>
                </Link>
              </Text>
            </Box>
          </GridItem>
        </SimpleGrid>
    </Box>
  )
}