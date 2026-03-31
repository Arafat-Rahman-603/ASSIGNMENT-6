import React from 'react'
import Navber from './components/Navber'
import Hero from './components/Hero'
import User from './components/User'
import Products from './components/Products'
import UseGuide from './components/UseGuide'

export default function App() {
  return (
    <div className=''>
      <Navber />
      <Hero />
      <User />
      <Products />
      <UseGuide />
    </div>
  )
}
