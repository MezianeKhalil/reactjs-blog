import React from 'react'
import { Helmet } from 'react-helmet'
import { ArticleLayout } from './../components/Layout/_index'
import { Navbar } from '../components/blocs/_index'

export default function Article() {
  return (
    <>
        <Helmet>
            <title>OurBlog</title>
        </Helmet>
        <Navbar/>
        <ArticleLayout/>    
    </>
  )
}
