import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from './types/_index'
import { Button, Text, Box } from '@chakra-ui/react'
import * as yup  from 'yup'
import { EditProfileCall } from './../../services/httpClient'
import { useProfile } from './../../swrHooks/useProfile'



const editSchemaValidation = yup.object({
    username:yup.string().min(5,'user name to short').required('user name is required'),
    email:yup.string().email('invalid email').required('email is required'),
})

export default function EditProfileForm({user}) {
    const { mutate } = useProfile()
    const handelEdit = async (body)=>{
        try{
            await EditProfileCall(body)
            mutate()
            onClose()
        }catch(error){
            console.log(error.response)
        }
    }

    return (
        <Formik
            initialValues={{email: user.email, username: user.username}}
            validationSchema={editSchemaValidation}
            onSubmit={
                (values)=>{
                    handelEdit(values)
                }
            }
        >
            {
                ()=>(
                    <Box w="full" pr="12" fontFamily={"poppins"}>
                        <Text fontSize="2xl" fontWeight="semibold" textTransform="capitalize">Edit Profile</Text>
                        <Form>
                            <InputField name='username' label="username" type="text" placeholder='username'/>
                            <InputField name='email' label="email" type="text" placeholder='email'/>
                            <Button colorScheme={"purple"} fontWeight="semibold" my="3" px="10" textTransform={"capitalize"} fontSize="lg" type='submit'>save</Button>
                        </Form>
                    </Box>
                )
            }
        </Formik>
    )
}