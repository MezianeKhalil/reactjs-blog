import React from 'react'
import { Helmet } from 'react-helmet'
import { ProfileLayout } from '../components/Layout/_index'
import { Navbar, Footer } from './../components/blocs/_index'

export default function Profile() {
  return (
    <>
         <Helmet>
            <title>Profile | OurBlog</title>
        </Helmet>
        <Navbar/>
        <ProfileLayout/>
        <Footer/>
    </>
  )
}
