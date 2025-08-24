import React, { useState } from "react";
import "./Opciones.css";
import { motion } from "motion/react";


function Opciones({ settipo }) {


  return (
    <div className="opciones">
      <motion.button onClick={()=>{
        settipo("TELEFONIA")
        }
        } whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        telefonia
      </motion.button>
      <motion.button onClick={()=>{
        settipo("todos")
        }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        todos
      </motion.button>
      <motion.button onClick={()=>{
        settipo("TECNOLOGIA")
        }
        } whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        tecnologia
      </motion.button>
    </div>
  );
}

export default Opciones;
