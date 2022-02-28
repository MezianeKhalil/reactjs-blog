import React from 'react'
import { Input, Text, Box } from '@chakra-ui/react'
import { useField, ErrorMessage } from 'formik'

export default function InputField(props) {
    const [field, meta] = useField(props)
    return (
        <Box position={"relative"} pb="6">
            <label htmlFor={field.name}>
                <Text my="3" textTransform={"capitalize"} fontSize="lg">{props.label}</Text>
            </label>
            <Input autoComplete="off" {...field} {...props} isInvalid={meta.touched && meta.error} errorBorderColor='crimson'/>
            <Text color={"red.500"} fontWeight="400" textTransform={"capitalize"} position="absolute" bottom={-1} left="2">
                <ErrorMessage name={field.name} component="span"/>
            </Text>
        </Box>
    )
}