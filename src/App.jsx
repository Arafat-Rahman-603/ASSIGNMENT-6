import React, { useMemo, useRef, useState } from 'react'
import Navber from './components/Navber'
import Hero from './components/Hero'
import User from './components/User'
import Products from './components/Products'
import UseGuide from './components/UseGuide'
import Priceing from './components/Priceing'
import Footer from './components/Footer'

export default function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [activeTab, setActiveTab] = useState('products')
  const productsSectionRef = useRef(null)

  const cartCount = useMemo(
    () => cartProducts.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [cartProducts]
  )

  const handleShowCart = () => {
    setActiveTab('cart')
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <Navber cartCount={cartCount} onCartClick={handleShowCart} />
      <Hero />
      <User />
      <Products
        ref={productsSectionRef}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <UseGuide />
      <Priceing />
      <Footer/>
    </div>
  )
}
