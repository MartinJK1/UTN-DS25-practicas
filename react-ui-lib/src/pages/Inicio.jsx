// src/pages/Inicio.jsx
import SeccionDestacada from "../components/SeccionDestacada";

export default function Inicio() {
  return (
    <main>
      <SeccionDestacada
        genero="Ciencia Ficción"
        titulo="Fahrenheit 451"
        autor="Ray Bradbury"
        imagen="/img/libros/451.jpg"
      />
      <SeccionDestacada
        genero="Historia"
        titulo="El colapso de las civilizaciones"
        autor="Eric H. Cline"
        imagen="/img/libros/colapso.jpg"
      />
      <SeccionDestacada
        genero="Tecnología"
        titulo="Algorithms to Live By"
        autor="Brian Christian y Tom Griffiths"
        imagen="/img/libros/algorithms.jpg"
      />
      <SeccionDestacada
        genero="Fantasía"
        titulo="Eragon"
        autor="Christopher Paolini"
        imagen="/img/libros/Eragon.jpg"
      />
    </main>
  );
}