import React from 'react'
import { Container } from '@chakra-ui/react'
import { BlogPost } from '../blocs/_index'

export default function HomeLayout() {
  return (
    <>
        <Container maxW={'4xl'}>
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
        </Container>
    </>
  )
}
