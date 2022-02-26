import React from 'react'
import { HomeLayout } from '../components/Layout/_index'
import { Helmet } from 'react-helmet'
import { Navbar, Header } from '../components/blocs/_index'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OurBlog</title>
      </Helmet>
      <Navbar/>
      <Header/>
      <HomeLayout/>
    </>
  )
}
