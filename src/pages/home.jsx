import React from 'react'
import { HomeLayout } from '../components/Layout/_index'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OurBlog</title>
      </Helmet>
      <HomeLayout/>
    </>
  )
}
