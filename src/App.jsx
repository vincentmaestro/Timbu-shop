import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Shop from './shop'
import Product from './product'
import Cart from './cart'
import Checkout from './checkout'
import Footer from './footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product/:productID' element={<Product />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
