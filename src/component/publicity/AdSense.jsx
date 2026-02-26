import React, { useEffect, useRef, useState } from 'react';

const AdSense = ({ adSlot }) => {
  const adRef = useRef(null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    try {
      // Verificar si hay bloqueador de anuncios
      const checkAdBlocker = () => {
        // Si después de 2 segundos el ad no tiene contenido, asumimos que hay bloqueador
        setTimeout(() => {
          if (adRef.current && adRef.current.innerHTML.trim() === '') {
            setAdLoaded(false);
          } else {
            setAdLoaded(true);
          }
        }, 2000);
      };

      (window.adsbygoogle = window.adsbygoogle || []).push({});
      checkAdBlocker();
    } catch (e) {
      console.error("Error cargando AdSense:", e);
      setAdLoaded(false);
    }
  }, []);

  // Si no hay anuncio cargado, no renderizar nada
  if (!adLoaded) return null;

  return (
    <ins 
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4687088603336659" 
      data-ad-slot={adSlot}                   
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;
