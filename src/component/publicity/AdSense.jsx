import React, { useEffect } from 'react';

const AdSense = ({ adSlot }) => {
  useEffect(() => {
    try {
      // empujar el anuncio al cargar el componente
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Error cargando AdSense:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-4687088603336659" 
         data-ad-slot={adSlot}                   
         data-ad-format="auto"
         data-full-width-responsive="true">
    </ins>
  );
};

export default AdSense;
