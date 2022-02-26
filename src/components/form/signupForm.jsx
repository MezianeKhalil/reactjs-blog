import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from './types/_index'
import { Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function SignupForm() {
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
                <div>
                    <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize">create account</Text>
                    <Form>
                        <InputField name='username' label="username" type="text" placeholder='username'/>
                        <InputField name='email' label="email" type="text" placeholder='email'/>
                        <InputField name='password' label="password" type="password" placeholder='password'/>
                        <Button colorScheme={"purple"} fontWeight="semibold" my="3" px="10" w="full" textTransform={"capitalize"} fontSize="lg" type='submit'>signup</Button>
                    </Form>
                    <Text 
                        fontSize="md" 
                        textAlign="center" 
                        color="gray.700" 
                        textTransform="capitalize" 
                    >
                        already have account? 
                        <Link to="/login">
                            <Text display="inline" px="2" fontWeight="semibold" color="purple.500">Login</Text>
                        </Link>
                    </Text>
                </div>
            )
        }
    </Formik>
  )
}