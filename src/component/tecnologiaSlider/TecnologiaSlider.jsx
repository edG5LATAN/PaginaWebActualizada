import React, { useEffect, useState } from "react";
import "./TecnologiaSlider.css";
import { listaTecnologiaSlider } from "../../services/listaTelefonia/ListaPromos";

function TecnologiaSlider() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prevContador) =>
        prevContador >= listaTecnologiaSlider.length - 1 ? 0 : prevContador + 1
      );
    }, 6000);

    return () => clearInterval(intervalo);
  }, []); 

  return (
    <div className="tecnologia_slider">
      <div className="tecnologia_slider_caja">
        <img src={listaTecnologiaSlider[contador].imagen} alt="imagen slider" />
        <h1>{listaTecnologiaSlider[contador].titulo}</h1>
      </div>
    </div>
  );
}

export default TecnologiaSlider;
