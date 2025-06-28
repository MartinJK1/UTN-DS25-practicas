import { useParams } from "react-router-dom";

export default function SeccionTematica({ catalogo }) {
  const { tema } = useParams();

  const nombresBonitos = {
    "ciencia-ficcion": "Ciencia Ficción",
    "historia": "Historia",
    "tecnologia": "Tecnología",
    "fantasia": "Fantasía"
  };

  const librosFiltrados = catalogo.filter(libro => libro.tema === tema);

  return (
    <main className="container my-4">
      <h2 className="mb-4">{nombresBonitos[tema] || "Libros"}</h2>
      <div className="row g-4">
        {librosFiltrados.map((libro, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                <p className="card-text">{libro.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}