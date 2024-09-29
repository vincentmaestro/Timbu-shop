import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './navbar'
import Prompt from './prompt'
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
        <Route path='/' element={<Prompt message='Welcome to TimbuShop' />} />
        <Route path='shop' element={<Shop />} />
        <Route path='product/:productID' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
