import React from "react";
import './Ubicacion.css'

function Ubicacion() {
  return (
    <div className="ubicacion">
      <h3 >Visitanos</h3>
      <p>
        Para mayor informacion y envios a nuestro taller estamos ubicados dos
        cuadras al oeste del hospital San Fransisco frente a mercadito su Hogar
        en esquina ala par de pulperia con horarios de 08:00 AM a 06:00 PM de
        lunes a viernes y sabado de 09:00 AM a 05:00 PM domingos de 09:00 AM a
        04:00 PM.
      </p>
      <div className="ubicacion_contenedor">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3859.8021284168863!2d-86.2288604!3d14.6671679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6c1fef9e4010e7%3A0xc7e9d18cc0e797a2!2sEDtecnology!5e0!3m2!1ses!2shn!4v1721237349701!5m2!1ses!2shn"
          width="100%"
          height="100%"
          title="EDTecnology"
        ></iframe>
      </div>
    </div>
  );
}

export default Ubicacion;
