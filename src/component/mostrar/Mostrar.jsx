// import React, { useEffect, useState } from 'react'
// import './Mostrar.css'
// import { useParams } from 'react-router-dom'
// import { buscarIdProductos } from '../../services/servicios/Servicios';
// import { motion } from 'motion/react';


// function Mostrar() {
//   const [info,setinfo]=useState({})
//   const {id} =useParams();

//   useEffect(() => {
//      buscarIdProductos(setinfo,id)

//   }, [])
  

//   return (
//     <div className='mostrar'>
//       <div className='mostrar_caja'>
//         <img src={info.imagen} alt="imagen mostrar" />
//         <div className='mostrar_caja_informacion'>
//           <h2>{info.marca}</h2>
//           <h3>{info.modelo}</h3>
//           <p>{info.especificaciones2}</p>
//           <p>{info.oferta}</p>
//           <motion.button
//           onClick={()=>navegar("/acerca")} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }}>comprar</motion.button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mostrar

import React, { useEffect, useState } from 'react';
import './Mostrar.css';
import { useParams, useNavigate } from 'react-router-dom';
import { buscarIdProductos } from '../../services/servicios/Servicios';
import { motion } from 'framer-motion';

function Mostrar() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        await buscarIdProductos(setInfo, id);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el producto');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="mostrar_loading">
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Cargando producto...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className="mostrar_error"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Error</h2>
        <p>{error}</p>
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Volver al inicio
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className='mostrar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className='mostrar_caja'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="mostrar_imagen_container"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={info.imagen} alt={`${info.marca} ${info.modelo}`} />
          {info.oferta && (
            <motion.span 
              className="oferta_badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {info.oferta}
            </motion.span>
          )}
        </motion.div>
        
        <div className='mostrar_caja_informacion'>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {info.marca}
          </motion.h2>
          
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {info.modelo}
          </motion.h3>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="especificaciones"
          >
            {info.especificaciones2}
          </motion.p>
          
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="precio_container"
          >
            <span className="precio">{info.precio} lps</span>
          </motion.div>
          
          <motion.button
          onClick={() => {
              const mensaje = `Quisera poder cotizar el ${info.marca} ${info.modelo}`;
              const url = `https://wa.me/93340562?text=${encodeURIComponent(
                mensaje
              )}`;
              window.open(url, "_blank");
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="comprar_btn"
          >
            Comprar ahora
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Mostrar;