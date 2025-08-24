import React from "react";
import "./TecnologiaPaginaPrecios.css";

function TecnologiaPaginaPrecios({ info }) {
  return (
    <div className="pagina_precio">
      <img src={info.img} alt="pagina web" />
      <div className="pagina_precio_info">
        <h2>{info.titulo}</h2>
        <p>{info.detalles}</p>
      </div>
      <div className="pagina_precio_precio">
        <p>
        {info.precio}
        </p><span>$</span>
      </div>
    </div>
  );
}

export default TecnologiaPaginaPrecios;
