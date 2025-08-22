import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Mostrar from './component/mostrar/Mostrar'
import Tecnologia from './component/tecnologia/Tecnologia'
import Telefonia from './component/telefonia/Telefonia'
import AcercaDe from './component/asercaDe/AcercaDe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producto/:id' element={<Mostrar />} />
        <Route path='/tecnologia' element={<Tecnologia />} />
        <Route path='/telefonia' element={<Telefonia />} />
        <Route path='/acerca' element={<AcercaDe />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
