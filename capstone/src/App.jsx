import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import Info from './pages/Info'
import Movies from './pages/Movies'
import Showcase from './pages/Showcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/showcase' element={<Showcase/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path="*" element={<h1>404 not found😥</h1>}/>
    </Routes>
  )
}

export default App
