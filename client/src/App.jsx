import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Landing from './Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Signup/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/' element = {<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
