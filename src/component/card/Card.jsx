import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Card({ info }) {
  const navegar= useNavigate();

  const enviarA=(id)=>{
    navegar(`/producto/${id}`)
  }
  return (
    <motion.div 
      className="card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img 
        src={info.imagen} 
        alt="telefono" 
        id={info.id}
        onClick={()=>enviarA(info.id)}
        
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.3 }}
      />
      {
        info.oferta=="oferta"
        ?
      <p  className="card_oferta">promo</p>
       :
       <></>
      }
      <div className="card_informacion">
        <h2>{info.marca}</h2>
        <h3>{info.modelo}</h3>
        <p>{info.especificaciones}</p>
        <div className="card_precio">
          <motion.p whileTap={{ scale: 0.95 }}>{info.precio}Lps</motion.p>
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#FFD700" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            comprar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;