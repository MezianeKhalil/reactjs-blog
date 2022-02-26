import React from 'react'
import { Helmet } from 'react-helmet'
import { ArticleLayout } from './../components/Layout/_index'
import { Navbar, Footer } from '../components/blocs/_index'

export default function Article() {
  return (
    <>
        <Helmet>
            <title>Article |OurBlog</title>
        </Helmet>
        <Navbar/>
        <ArticleLayout/>   
        <Footer/> 
    </>
  )
}
