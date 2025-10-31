import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Lan from './components/lan/Lan'
import BackToTop from './components/btp/BackToTop'
import Seafood from './pages/seafood/Seafood'
import SmallFish from './pages/smallfish/SmallFish'
import FreshFish from './pages/freshfish/FreshFish'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Lan/>
      <BackToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seafood" element={<Seafood />} />
          <Route path="/smallfish" element={<SmallFish />} />
          <Route path="/freshfish" element={<FreshFish />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
