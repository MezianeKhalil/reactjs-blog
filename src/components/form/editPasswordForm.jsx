import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from './types/_index'
import { Button, Text, Box } from '@chakra-ui/react'
import * as yup  from 'yup'


const editSchemaValidation = yup.object({
    password: yup.string().min(6,'password to short').required('password is required'),
    newPassword: yup.string().min(6,'password to short').required('password is required'),
})

export default function EditPasswordForm() {
  return (
    <Formik
        initialValues={{password: "", newPassword: ""}}
        validationSchema={editSchemaValidation}
        onSubmit={
            (values)=>{
                console.log("values:", values)
            }
        }
    >
        {
            ()=>(
                <Box w="full" pr="12" fontFamily={"poppins"}>
                    <Text fontSize="2xl" fontWeight="semibold" textTransform="capitalize">Edit password</Text>
                    <Form>
                        <InputField name='password' label="password" type="text" placeholder='password'/>
                        <InputField name='newPassword' label="new password" type="password" placeholder='new password'/>
                        <Button colorScheme={"purple"} fontWeight="semibold" my="3" px="10" textTransform={"capitalize"} fontSize="lg" type='submit'>save</Button>
                    </Form>
                </Box>
            )
        }
    </Formik>
  )
}