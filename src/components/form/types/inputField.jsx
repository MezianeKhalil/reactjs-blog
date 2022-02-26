import React from 'react'
import { Input, Text } from '@chakra-ui/react'
import { useField } from 'formik'

export default function InputField(props) {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={field.name}>
                <Text my="3" textTransform={"capitalize"} fontSize="lg">{props.label}</Text>
            </label>
            <Input {...field} {...props}/>
        </>
    )
}
