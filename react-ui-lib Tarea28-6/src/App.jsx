import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SeccionTematica from "./pages/SeccionTematica";
import Registro from "./components/Registro";
import Contacto from "./components/Contacto";
import Catalogo from "./pages/Catalogo";
import AgregarLibro from "./pages/AgregarLibro";
import catalogoInicial from "./data/catalogoInicial";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [catalogo, setCatalogo] = useState(catalogoInicial);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="tema/:tema" element={<SeccionTematica catalogo={catalogo} />} />
        <Route path="registro" element={<Registro />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="catalogo" element={<Catalogo catalogo={catalogo} />} />
        <Route path="agregar" element={<AgregarLibro catalogo={catalogo} setCatalogo={setCatalogo} />} />
      </Route>
    </Routes>
  );
}