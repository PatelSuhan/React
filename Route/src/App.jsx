import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './component/About'
import Services from './component/Services'
import Blog from './component/Blog'
import Home from './component/Home'
import Contect from './component/Contect'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contect" element={<Contect />}/>
      </Routes>
    </>
  )
}

export default App
