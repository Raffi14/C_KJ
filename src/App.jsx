import { useState } from 'react'
import './Source_code/Login.css'
import Log_in from './Source_code/Login.jsx'
import Home from './Source_code/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Log_in />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
  )
}
