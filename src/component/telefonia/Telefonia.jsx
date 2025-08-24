import React from "react";
import "./Telefonia.css";
import { motion } from "motion/react";
import TecnologiaPortada from "../tecnologiaPortada/TecnologiaPortada";
import TelefoniaFallas from "../telefoniaFallas/TelefoniaFallas";
import {
  listaTelefoniaFallas,
  listaTelefoniaReapaciones,
} from "../../services/listaTelefonia/ListaPromos";
import TecnologiaRepacion from "../tecnologiaReparaciones/TecnologiaReparacion";
import TelefoniaCarrucel from "../telefoniaCarrucel/TelefoniaCarrucel";

function Telefonia() {
  return (
    <div className="telefonia">
      <TecnologiaPortada
        titulo={"Telefonia"}
        subtitulo={"Reparacion mobil ,actualizacion y liberacion"}
        imagen={"./img/telefonia/portadaTelefonia.webp"}
      />
      <br />
      <hr />
      <br />
      <motion.div className="telefonia_telefoniaCarrucel" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }}>
              <TelefoniaCarrucel />

      </motion.div>
      <br />
      <hr />
      <br />
      <div className="telefonia_contenedorfallas">
        <h2>Reparaciones</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="telefonia_contenedorfallas_lista"
        >
          {listaTelefoniaFallas.map((res, index) => {
            return <TelefoniaFallas key={index} info={res} />;
          })}
        </motion.div>
      </div>
      <br />
      <hr />
      <br />
      <motion.div
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }} className="telefonia_contenedorfallas">
        {listaTelefoniaReapaciones.map((res, index) => {
          return <TecnologiaRepacion key={index} info={res} />;
        })}
      </motion.div>

      <br />
      <hr />
      <br />
    </div>
  );
}

export default Telefonia;
