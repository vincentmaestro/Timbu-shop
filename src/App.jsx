import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Shop from './shop'
import Footer from './footer'
import Navbar from './navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
