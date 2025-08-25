import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Mostrar from "./component/mostrar/Mostrar";
import Tecnologia from "./component/tecnologia/Tecnologia";
import Telefonia from "./component/telefonia/Telefonia";
import AcercaDe from "./component/asercaDe/AcercaDe";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

function App() {

  useEffect(()=>{
   ReactGA.initialize("G-5PSBNRSCQ5")
  },[])

  return (
    <>
      <BrowserRouter>
        <TrackPageView />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Mostrar />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/telefonia" element={<Telefonia />} />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
