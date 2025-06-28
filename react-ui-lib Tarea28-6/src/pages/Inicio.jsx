import SeccionDestacada from "../components/SeccionDestacada";

export default function Inicio() {
  
  const destacados = [
    {
      genero: "Ciencia Ficción",
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      imagen: "/img/libros/451.jpg"
    },
    {
      genero: "Historia",
      titulo: "El colapso de las civilizaciones",
      autor: "Eric H. Cline",
      imagen: "/img/libros/colapso.jpg"
    },
    {
      genero: "Tecnología",
      titulo: "Algorithms to Live By",
      autor: "Brian Christian y Tom Griffiths",
      imagen: "/img/libros/algorithms.jpg"
    },
    {
      genero: "Fantasía",
      titulo: "Eragon",
      autor: "Christopher Paolini",
      imagen: "/img/libros/Eragon.jpg"
    }
  ];

  return (
    
      <main className="container py-4">
        <h2 className="text-center mb-4">Libros destacados</h2>

        <div className="row g-4 justify-content-center">
          {destacados.map((libro, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <SeccionDestacada {...libro} />
            </div>
          ))}
        </div>
      </main>
    
  );
}