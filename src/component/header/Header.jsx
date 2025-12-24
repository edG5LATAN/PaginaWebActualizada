import React, { useState, useEffect } from "react";
import "./Header.css";
import ReactGA from 'react-ga4'
import { motion } from "framer-motion";
import { listaPromos } from "../../services/listaTelefonia/ListaPromos";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/img/logoEd.webp";
import fondo from "../../../public/img/fondo6.png";
// import girar from "../../../public/img/redondo.png";

function Header() {
  const navegar = useNavigate();
  const [contador, setContador] = useState(0);
  const [pausar, setPausar] = useState(false);
  const paginas = listaPromos.length;

  useEffect(() => {
    if (pausar) return;

    const intervalo = setTimeout(() => {
      setContador((prevContador) =>
        prevContador >= paginas - 1 ? 0 : prevContador + 1
      );
    }, 6000);

    return () => clearTimeout(intervalo);
  }, [contador, pausar, paginas]);

  return (
    <div className="header" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="header_nav">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src={logo}
          alt="logo"
        />
        <motion.button
          onClick={() => navegar("/")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
        >
          INICIO
        </motion.button>
        <motion.button
          onClick={() =>{ 
            ReactGA.event({
                category: "entrar a telefonia",
                action: "entraron_telefonia",
                label: "vieron pagina de telefonia",
              });
            navegar("/telefonia")}}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
        >
          TELEFONIA
        </motion.button>
        <motion.button
          onClick={() =>{ 
            ReactGA.event({
                category: "entrar a tecnologia",
                action: "entraron_tecnologia",
                label: "vieron pagina de tecnologia",
              });
            navegar("/tecnologia")
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
        >
          TECNOLOGIA
        </motion.button>
        <motion.button
          onClick={() => navegar("/acerca")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
        >
          ASERCADE
        </motion.button>
      </div>
      <motion.div
        key={contador}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="header_informacion"
        onMouseEnter={() => setPausar(true)}
        onMouseLeave={() => setPausar(false)}
      >
        <div className="header_informacion_info">
          <h2>{listaPromos[contador].titulo}</h2>
          <h3>{listaPromos[contador].subtitulo}</h3>
          <p>{listaPromos[contador].especificaciones}</p>
          <motion.button
            onClick={() => {
              ReactGA.event({
                category: "quieren informacion",
                action: "vieron_header",
                label: listaPromos[contador].titulo,
              });
              const mensaje = `${listaPromos[contador].mensaje}`;
              const url = `https://wa.me/93340562?text=${encodeURIComponent(
                mensaje
              )}`;
              window.open(url, "_blank");
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
          >
            Cotizar
          </motion.button>
        </div>
        <div className="header_informacion_imagen">
          {/* <motion.img
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="header_informacion_imagen_1"
            src={girar}
            alt="girar"
          /> */}
          <img
            className="header_informacion_imagen_2"
            src={listaPromos[contador].imagen}
            alt="imagen.."
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;



