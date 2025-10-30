import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Lan from './components/lan/Lan'
import BackToTop from './components/btp/BackToTop'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Lan/>
      <BackToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
