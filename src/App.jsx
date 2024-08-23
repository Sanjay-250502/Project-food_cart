
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import datas from "../products.json"
import Home from './Components/Home'
import Header from './Components/Header'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {
  
  const [cart,setCart] = useState([])
  const [products] = useState(datas)
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      
        <BrowserRouter>
        <div className='container'>
          <Header cart={cart} onSearch={handleSearch}/>
        </div>  
          <Routes>
             <Route path='/' element={<Home cart={cart} setCart={setCart} products={filteredProducts}/>} />
             <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>} />
          </Routes>  
              
        </BrowserRouter>
      
    </>
  )
}

export default App