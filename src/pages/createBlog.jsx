import React from 'react'
import { CreateLayout } from '../components/Layout/_index'
import { Helmet } from 'react-helmet'
import { Navbar, Footer } from '../components/blocs/_index'

export default function CreateBlog() {
  return (
    <>
        <Helmet>
            <title>Create | OurBlog</title>
        </Helmet>
        <Navbar/>
        <CreateLayout/>
        <Footer/>
    </>
  )
}