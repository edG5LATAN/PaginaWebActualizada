import { useEffect } from "react";
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

// Componente para trackear cambios de ruta
function TrackPageView() {
  const location = useLocation();
  const googleAnalitic = import.meta.env.VITE_GOOGLE_ANALITIC;

  useEffect(() => {
    if (googleAnalitic) {
      // Solo inicializar una vez
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize(googleAnalitic);
        window.GA_INITIALIZED = true;
        console.log('Google Analytics inicializado');
      }
      
      // Trackear la página actual
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search,
        title: document.title
      });
    }
  }, [location, googleAnalitic]);

  return null;
}

function App() {
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