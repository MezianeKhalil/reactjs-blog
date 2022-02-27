import React from 'react'
import { Container } from '@chakra-ui/react'
import { BlogPost } from '../blocs/_index'
import { useBlogs } from '../../swrHooks/useBlogs'

export default function HomeLayout() {
  const {data, isLoading, error} = useBlogs()
  return (
    <>
        <Container maxW={'4xl'}>
          {
            !isLoading && data && 
            (
              data.data.map((article)=>{
                return(
                  <BlogPost article={article}/>
                )
              })
            )
          }
        </Container>
    </>
  )
}