import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={<h3>404:Page not found UwU</h3>}/>
    </Routes>
  )
}

export default App
