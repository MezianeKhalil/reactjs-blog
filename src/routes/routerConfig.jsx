import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Home, Login, Signup, Profile, Article, Author, CreateBlog } from '../pages/_index'

export default function RouterConfig() {
  return (
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/article/:id' element={<Article/>}/>

        <Route element={<NotAuth/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>

        <Route element={<RequireAuth/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/my-posts' element={<Author/>}/>
          <Route path='/create' element={<CreateBlog/>}/>
        </Route>

    </Routes>
  )
}

function RequireAuth() {
  const isAuth = localStorage.getItem('TOKEN')? true:false
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}

function NotAuth() {
  const isAuth = localStorage.getItem('TOKEN')? true:false
  if (isAuth) {
    return <Navigate to="/profile" />
  }
  return <Outlet />
}