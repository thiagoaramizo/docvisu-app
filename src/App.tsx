import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'
import Header from './components/Header/Header'
import Editor from './Editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Editor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
