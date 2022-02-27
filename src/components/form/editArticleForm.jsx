import React from 'react'
import { Formik, Form } from 'formik'
import { Box, ModalFooter, Button } from '@chakra-ui/react'
import { InputField, TextareaField } from './types/_index'
import * as yup  from 'yup'

const editSchemaValidation = yup.object({
  title:yup.string().min(6,'title to short').required('title is required'),
  content:yup.string().min(6,'content to short').required('content is required'),
})

export default function EditArticleForm({onClose}) {
  return (
    <Formik
        initialValues={{title:"",content:""}}
        validationSchema={editSchemaValidation}
        onSubmit={
            (values)=>{
                console.log("values:", values)
            }
        }
    >
        {
          ()=>(
            <Box w="full" px="6">
                <Form>
                    <InputField name='title' label="title" type="text" placeholder='title'/>
                    <TextareaField name='content' label="content" type="content" placeholder='content'/>
                    <ModalFooter pr="0">
                      <Button type="submit" colorScheme='purple' mr={2}>
                          Save
                      </Button>
                      <Button variant='outline' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Box>
          )
        }
    </Formik>
  )
}
