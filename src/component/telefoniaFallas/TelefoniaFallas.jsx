import React from 'react'
import './TelefoniaFallas.css'
import { motion } from 'motion/react'



function TelefoniaFallas({info}) {
  return (
    <div className='telefonia_fallas'>
      <img src={info.imagen} alt="imagen falla" />
      <div className='telefonia_fallas_informacion'>
        <h2>{info.titulo}</h2>
        <p>{info.detalles}</p>
        <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }}>{info.boton}</motion.button>
      </div>
    </div>
  )
}

export default TelefoniaFallas
