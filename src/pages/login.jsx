import React from 'react'
import { Helmet } from "react-helmet"
import { LoginLayout } from './../components/Layout/_index'


export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login | OurBlog</title>
      </Helmet>
      <LoginLayout/>
      
    </>
  )
}