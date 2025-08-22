import React from 'react';
import { motion } from 'framer-motion';
import './TecnologiaReparacion.css';

function TecnologiaReparacion({info}) {
  return (
    <motion.div 
      className='tecnologia_reparacion'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src={info.imagen} 
        alt="imagen reparacion" 
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.2 }}
      />
      <div className='tecnologia_reparacion_info'>
        <h2>{info.titulo}</h2>
        <p>{info.detalles}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {info.boton}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default TecnologiaReparacion