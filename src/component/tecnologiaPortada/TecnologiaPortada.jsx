import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './TecnologiaPortada.css';

function TecnologiaPortada({ titulo, imagen, subtitulo }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    if (isHovered) {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  return (
    <motion.div 
      className="tecnologia_portada"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="image-container"
        style={{ y }}
      >
        <motion.img
          src={imagen}
          alt="portada"
          initial={{ scale: 1.2 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className="overlay"></div>
        
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              opacity: 0.8,
              scale: 0
            }}
            animate={{ 
              x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
              y: [`${particle.y}%`, `${particle.y + (Math.random() * 30)}%`],
              opacity: [0, 0.8, 0],
              scale: [0, particle.size/5, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: Math.random() * 0.5
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="content"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {titulo}
        </motion.h1>
        
        {subtitulo && (
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitulo}
          </motion.h2>
        )}
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TecnologiaPortada;