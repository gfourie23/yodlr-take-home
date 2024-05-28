import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import Admin from './components/Admin'
import Homepage from './components/Homepage'

function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/signup" element = {<SignUpForm />} />
        <Route path="/admin" element = { <Admin /> } />

        
    </Routes>

  )
}

export default MyRoutes;