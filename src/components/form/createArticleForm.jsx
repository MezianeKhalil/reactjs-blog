import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { InputField, TextareaField } from './types/_index'
import * as yup  from 'yup'

const createSchemaValidation = yup.object({
  title:yup.string().min(6,'title to short').required('title is required'),
  content:yup.string().min(6,'content to short').required('content is required'),
})

export default function CreateArticleForm({onClose}) {
  return (
    <Formik
        initialValues={{title:"",content:""}}
        validationSchema={createSchemaValidation}
        onSubmit={
            (values)=>{
                console.log("values:", values)
            }
        }
    >
        {
          ()=>(
            <Box maxW="4xl" mx="auto" px="6" py="9" fontFamily={"poppins"}>
                <Form>
                    <InputField name='title' label="title" type="text" placeholder='title'/>
                    <TextareaField name='content' label="content" type="content" placeholder='content'/>
                    <Button type="submit" colorScheme='purple' mr={2} mt="3">
                        Create Article
                    </Button>
                </Form>
            </Box>
          )
        }
    </Formik>
  )
}