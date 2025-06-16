import { Routes, Route } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import Menu from "./components/Menu";
import Pie from "./components/Pie";
import TemaCienciaFiccion from "./components/TemaCienciaFiccion";
import TemaHistoria from "./components/TemaHistoria";
import TemaTecnologia from "./components/TemaTecnologia";
import TemaFantasia from "./components/TemaFantasia";
import Registro from "./components/Registro";
import Contacto from "./components/Contacto";
import Inicio from "./pages/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <>
      <Encabezado />
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tema1" element={<TemaCienciaFiccion />} />
  
        <Route path="/tema2" element={<TemaHistoria />} />
        <Route path="/tema3" element={<TemaTecnologia />} />
        <Route path="/tema4" element={<TemaFantasia />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
      <Pie />
    </>
  );
}