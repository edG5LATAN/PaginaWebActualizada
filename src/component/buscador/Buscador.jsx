import React, { useState } from "react";
import "./Buscador.css";
import { motion } from "motion/react";
import { getAllProductByCharacter } from "../../services/servicios/Servicios";

function Buscador({setdata}) {

  const [palabra,setpalabra]= useState("")

  const busqueda=()=>{
    getAllProductByCharacter(setdata,palabra) 
  }

  return (
    <div className="buscador">
      <input
        value={palabra}
        onChange={(e)=>setpalabra(e.target.value)}
        type="text"
        name="buscar"
        id="buscar"
        placeholder="buscar por nombre o modelo"
      />
      <motion.button onClick={busqueda} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
        Buscar
      </motion.button>
    </div>
  );
}

export default Buscador;
