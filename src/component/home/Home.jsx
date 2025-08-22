import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../card/Card";
import Buscador from "../buscador/Buscador";
import Opciones from "../opciones/Opciones";
import {
  getAllProducts,
  getAllProductTipo,
} from "../../services/servicios/Servicios";

function Home() {
  const [data, setdata] = useState([]);
  const [tipo, settipo] = useState("");

  useEffect(() => {
    getAllProducts(setdata);
  }, []);

  useEffect(() => {
    if (tipo == "") {
      getAllProducts(setdata);
    } else if(tipo=="todos"){
      getAllProducts(setdata);
    } else {
      getAllProductTipo(setdata, tipo);
    }
  }, [tipo]); 

  return (
    <div className="home">
      <br />
      <hr className="container" />
      <br />
      <Buscador setdata={setdata} />
      <Opciones settipo={settipo} />
      <div className="home_contenedores">
        {data.map((info, index) => {
          return <Card key={index} info={info} />;
        })}
      </div>
    </div>
  );
}

export default Home;
