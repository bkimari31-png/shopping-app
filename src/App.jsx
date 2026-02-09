import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false)

  const [cart, setCart] = useState([])

  const [category, setCategory] = useState('all')

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
