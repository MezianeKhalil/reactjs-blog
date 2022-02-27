import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { InputField, TextareaField } from './types/_index'
import * as yup  from 'yup'
import { CreateBlogCall } from "../../services/httpClient"
import { useNavigate } from 'react-router-dom'


const createSchemaValidation = yup.object({
  title:yup.string().min(6,'title to short').required('title is required'),
  content:yup.string().min(6,'content to short').required('content is required'),
})

export default function CreateArticleForm({onClose}) {
    const navigate = useNavigate() 
    const handelSubmit = async (body)=>{
    try{
      const response = await CreateBlogCall(body)
      navigate('/my-posts')

    }catch(error){
      console.log(error.response)
    }
  }
  return (
    <Formik
        initialValues={{title:"",content:""}}
        validationSchema={createSchemaValidation}
        onSubmit={
            (values)=>{
                handelSubmit(values)
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