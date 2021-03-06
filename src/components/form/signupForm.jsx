import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import { InputField } from './types/_index'
import { Button, Text, Box } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup  from 'yup'
import { signupCall } from '../../services/httpClient'

const signupSchemaValidation = yup.object({
    username:yup.string().min(5,'user name to short').required('user name is required'),
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required'),
})

export default function SignupForm() {

    const navigate = useNavigate()
    const [isLoading,setLoading] = useState(false)
    const handelSubmit = async (body, actions)=>{
        try{
            setLoading(true)
            const response = await signupCall(body)
            localStorage.setItem("TOKEN", response.data.accessToken)
            navigate('/profile')
            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log("error:", error)
        }
    }
    return (
    <Formik
        initialValues={{email: "",password: "", username: ""}}
        validationSchema={signupSchemaValidation}
        onSubmit={
            (values,actions)=>{
                handelSubmit(values,actions)
            }
        }
    >
        {
            ()=>(
                <Box w="full" pr="12">
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
                </Box>
            )
        }
        </Formik>
    )
}