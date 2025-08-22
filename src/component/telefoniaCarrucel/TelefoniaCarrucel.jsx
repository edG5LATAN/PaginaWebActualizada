import React, { useEffect, useState } from 'react'
import './TelefoniaCarrucel.css'
import { listaTelefonosSliders } from '../../services/listaTelefonia/ListaPromos';


function TelefoniaCarrucel({ items = [], titulo = "Productos" }) {

  const [elementos, setElementos] = useState(items);
  
  useEffect(() => {
    setElementos(listaTelefonosSliders);
  }, [items]);
  return (
    <div className='carrucel_galeria_contenedor'>
      <h1>{titulo}</h1>
      <div className="carrusel_galeria">
        {elementos.map((item, index) => (
          <div key={index} className="carrusel_item" style={{backgroundImage: `url(${item.imagen})`}}>
            <p className="carrusel_parrafo">{item.precio}<br/>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelefoniaCarrucel
