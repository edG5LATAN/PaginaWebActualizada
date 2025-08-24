import React from 'react'
import './AcercaDe.css'
import Ubicacion from '../ubicacion/Ubicacion'
import { motion } from 'motion/react'
import Mision from '../mision/Mision'



function AcercaDe() {
  return (
    <div className='acercaDe'>
      <br />
      <hr />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tecnologia_paginaprecio1"
      >
        <Ubicacion />
      </motion.div>
      <br />
      <hr />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tecnologia_paginaprecio1"
      >
        <Mision />
      </motion.div>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default AcercaDe
