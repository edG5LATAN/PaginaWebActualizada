import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./DesarrolloWeb.css";
import ReactGA from 'react-ga4'



function DesarrolloWeb() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animaciones para el texto
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animaciones para la imagen
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Animaciones para el botón
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="desarrollo_web"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img 
        src="./img/paginasWeb1.jpg" 
        alt="imagen desarrollo web" 
        variants={imageVariants}
      />
      <motion.div 
        className="desarrollo_web_caja"
        variants={textVariants}
      >
        <motion.h1
          variants={textVariants}
        >
          Creamos y desarrollamos paginas web
        </motion.h1>
        <motion.p
          variants={textVariants}
        >
          En EDTecnology.com, nos especializamos en la creación y desarrollo de
          páginas web personalizadas que se adaptan a las necesidades
          específicas de cada cliente. Nuestro equipo de expertos en desarrollo
          web utiliza tecnologías de vanguardia para ofrecer sitios web
          funcionales, atractivos y optimizados tanto para usuarios como para
          motores de búsqueda. Desde la concepción del diseño hasta la
          implementación y mantenimiento, garantizamos que cada proyecto sea
          único y cumpla con los más altos estándares de calidad. A
          continuación, podrán ver algunos ejemplos de páginas web que hemos
          desarrollado, cada una diseñada con atención al detalle para
          proporcionar una experiencia de usuario excepcional.
        </motion.p>
        <motion.button 
        onClick={() => {
ReactGA.event({
      category: "Crear pagina web",
      action: "Desean_Reparacion",
      label: "precio de pagina", 
    });

                const mensaje = `Deseo desarrollar un proyecto web de mi empresa.`;
                const url = `https://wa.me/93340562?text=${encodeURIComponent(
                  mensaje
                )}`;
                window.open(url, "_blank");
              }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Para mas informacion
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default DesarrolloWeb;