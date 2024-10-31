import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import About from './components/About/About'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Menu/>
    </>
  )
}

export default App
