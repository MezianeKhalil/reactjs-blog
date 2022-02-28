import React from 'react'
import { Formik, Form } from 'formik'
import { Box, ModalFooter, Button } from '@chakra-ui/react'
import { InputField, TextareaField } from './types/_index'
import * as yup  from 'yup'
import { EditBlogCall } from './../../services/httpClient'
import { useBlogsAuthor } from './../../swrHooks/useBlogsAuthor'

const editSchemaValidation = yup.object({
  title:yup.string().min(6,'title to short').required('title is required'),
  content:yup.string().min(6,'content to short').required('content is required'),
})

export default function EditArticleForm({onClose, article}) {

  const { mutate } = useBlogsAuthor()

  const handelEdit = async (body)=>{
      try{
          await EditBlogCall(body,article.id)
          mutate()
          onClose()
      }catch(error){
          console.log(error.response)
      }
  }

  return (
    <Formik
        initialValues={{title:article.title,content:article.content}}
        validationSchema={editSchemaValidation}
        onSubmit={
            (values)=>{
              handelEdit(values)
            }
        }
    >
        {
          ()=>(
            <Box w="full" px="6" fontFamily={"poppins"}>
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