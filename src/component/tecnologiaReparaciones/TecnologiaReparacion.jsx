import React from "react";
import { motion } from "framer-motion";
import "./TecnologiaReparacion.css";
import ReactGA from 'react-ga4'


function TecnologiaReparacion({ info }) {
  return (
    <motion.div
      className="tecnologia_reparacion"
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
      <div className="tecnologia_reparacion_info">
        <h2>{info.titulo}</h2>
        <p>{info.detalles}</p>
        <motion.button
          onClick={() => {
            ReactGA.event({
              category: "desean_Reparacion",
              action: "Desean_Reparacion",
              label: info.titulo,
            });
            const mensaje = `${info.mensaje}`;
            const url = `https://wa.me/93340562?text=${encodeURIComponent(
              mensaje
            )}`;
            window.open(url, "_blank");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {info.boton}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default TecnologiaReparacion;
