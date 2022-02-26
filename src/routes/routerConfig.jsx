import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Profile } from '../pages/_index'

export default function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
