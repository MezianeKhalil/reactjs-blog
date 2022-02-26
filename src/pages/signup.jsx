import React from 'react'
import {Helmet} from "react-helmet"
import { SignupLayout } from './../components/Layout/_index'


export default function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup | OurBlog</title>
      </Helmet>
      <SignupLayout/>
    </>
  )
}