import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer } from '../components/blocs/_index'
import { AuthorLayout } from './../components/Layout/_index'

export default function Author() {
  return (
    <>
        <Helmet>
            <title>My Articles | OurBlog</title>
        </Helmet>
        <Navbar/>
        <AuthorLayout/>
        <Footer/>
    </>
  )
}
