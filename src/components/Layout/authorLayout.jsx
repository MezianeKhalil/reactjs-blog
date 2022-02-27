import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { BlogAuthor } from './../blocs/_index'
import { useBlogsAuthor } from './../../swrHooks/useBlogsAuthor';


export default function AuthorLayout() {
  const { data, error} = useBlogsAuthor()
  // console.log("error: ", error.response)
  return (
    <Box maxW={"5xl"} mx="auto" my="6" fontFamily={"poppins"}>
        <Text textTransform={"capitalize"} fontSize="3xl" fontWeight={"medium"} color="gray.900">my Articles</Text>
        {
          !error && data && (
            <>
              {
                data.data.map(article=>{
                  return(
                    <BlogAuthor article={article}/>
                  )
                })
              }
            </>
          )
        }
    </Box>
  )
}