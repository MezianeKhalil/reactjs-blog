import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from './types/_index'
import { Button, Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function LoginForm() {
  return (
    <Formik
        initialValues={{email:"",password:""}}
        onSubmit={
            (values)=>{
                console.log("values:", values)
            }
        }
    >
        {
            ()=>(
                <Box w='full' h="full" mt="12">
                    <Form>
                        <InputField name='email' label="email" type="text" placeholder='email'/>
                        <InputField name='password' label="password" type="password" placeholder='password'/>
                        <Button colorScheme={"purple"} fontWeight="semibold" my="3" px="10" w="full" textTransform={"capitalize"} fontSize="lg" type='submit'>login</Button>
                    </Form>
                    <Text 
                        fontSize="md" 
                        textAlign="center" 
                        color="gray.700" 
                        textTransform="capitalize" 
                    >
                        don't have account? 
                        <Link to="/signup">
                            <Text display="inline" px="2" fontWeight="semibold" color="purple.500">Create</Text>
                        </Link>
                    </Text>
                </Box>
            )
        }
    </Formik>
  )
}
