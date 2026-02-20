import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'


function NotFound() {
  const navegar=useNavigate();
  return (
    <div className='error_contenedor'>
      <div className='error_contenido'>
        <h2>ERROR 404 PAGINA NO ENCONTRADO</h2>
        <button onClick={()=>navegar("/")}>ir al inicio</button>
        <img src="/img/logoED.webp" alt="logo error" />      
      </div>
    </div>
  )
}

export default NotFound
