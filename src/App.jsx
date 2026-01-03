import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'products':
        return <Products setCurrentPage={setCurrentPage} />
      case 'solutions':
        return <Solutions setCurrentPage={setCurrentPage} />
      case 'about':
        return <About setCurrentPage={setCurrentPage} />
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App