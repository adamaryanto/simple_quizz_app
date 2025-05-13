import React from 'react'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Login from './Page/Login';
import Registrasi from './Page/Registrasi';
import Dashboard from './Page/Dashboard';
import PageQuiz from './Page Quizz/PageQuiz';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Registrasi/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/pagequiz' element={<PageQuiz/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App