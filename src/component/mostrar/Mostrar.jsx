import React, { useEffect, useState } from 'react'
import './Mostrar.css'
import { useParams } from 'react-router-dom'
import { buscarIdProductos } from '../../services/servicios/Servicios';

function Mostrar() {
  const [info,setinfo]=useState({})
  const {id} =useParams();

  useEffect(() => {
     buscarIdProductos(setinfo,id)
  }, [])
  

  return (
    <div className='mostrar'>
      <div className='mostrar_caja'>
        <img src={info.imagen} alt="imagen mostrar" />
        <div className='mostrar_caja_informacion'>
          <h2>{info.marca}</h2>
          <h3>{info.modelo}</h3>
          <p>{info.especificaciones}</p>
          <p>{info.oferta}</p>
          <button>comprar</button>
        </div>
      </div>
    </div>
  )
}

export default Mostrar
