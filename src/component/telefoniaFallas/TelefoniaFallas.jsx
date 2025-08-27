import React from "react";
import "./TelefoniaFallas.css";
import ReactGA from 'react-ga4'
import { motion } from "motion/react";

function TelefoniaFallas({ info }) {
  return (
    <div className="telefonia_fallas">
      <img src={info.imagen} alt="imagen falla" />
      <div className="telefonia_fallas_informacion">
        <h2>{info.titulo}</h2>
        <p>{info.detalles}</p>
        <motion.button
          onClick={() => {
            ReactGA.event({
                  category: "reparacion telefonia",
                  action: "desea_cotizar",
                  label: info.titulo,
                });
            const mensaje = `${info.mensaje}`;
            const url = `https://wa.me/93340562?text=${encodeURIComponent(
              mensaje
            )}`;
            window.open(url, "_blank");
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
        >
          {info.boton}
        </motion.button>
      </div>
    </div>
  );
}

export default TelefoniaFallas;
