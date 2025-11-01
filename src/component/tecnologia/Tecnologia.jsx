import React from "react";
import "./Tecnologia.css";
import { motion } from "motion/react";
import TecnologiaPortada from "../tecnologiaPortada/TecnologiaPortada";
import DesarrolloWeb from "../tecnologiaDesarrolloWeb/DesarrolloWeb";
import TecnologiaPaginaPrecios from "../tecnologiaPrecioPaginas/TecnologiaPaginaPrecios";
import {
  listaPaginasPrecio,
  listaTecnologiaReparacion,
} from "../../services/listaTelefonia/ListaPromos";
import TecnologiaReparacion from "../tecnologiaReparaciones/TecnologiaReparacion";
import TecnologiaSlider from "../tecnologiaSlider/TecnologiaSlider";

function Tecnologia() {
  return (
    <div className="tecnologia">
      <TecnologiaPortada
        titulo={"tecnologia"}
        subtitulo={"Desarrollo web y reparacion de computo"}
        imagen={"img/tecnologia/portada.webp"}
      />
      <br />
      <hr className="container" />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <DesarrolloWeb />
      </motion.div>
      <br />
      <hr className="container" />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tecnologia_paginaprecio"
      >
        <h2>Precio paginas Web</h2>
        {listaPaginasPrecio.map((info, index) => {
          return <TecnologiaPaginaPrecios key={index} info={info} />;
        })}
      </motion.div>
      <br />
      <hr className="container" />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tecnologia_paginaprecio1"
      >
        {listaTecnologiaReparacion.map((res, index) => {
          return <TecnologiaReparacion key={index} info={res} />;
        })}
      </motion.div>
      <br />
      <hr className="container" />
      <br />
      <motion.div
        className="tecnologia_tecnologiaSlider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TecnologiaSlider />
      </motion.div>
      <br />
    </div>
  );
}

export default Tecnologia;

