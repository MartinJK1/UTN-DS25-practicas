import { useState } from "react";

export default function Catalogo({ catalogo }) {
  const [busqueda, setBusqueda] = useState("");

  const resultados = catalogo.filter((libro) =>
    `${libro.titulo} ${libro.autor}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="container py-4">
      <h2 className="mb-4">Catálogo completo</h2>

      <input
        type="text"
        placeholder="Buscar por título o autor"
        className="form-control mb-4"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="row g-4">
        {resultados.length > 0 ? (
          resultados.map((libro, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{libro.titulo}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                  <p className="card-text">{libro.descripcion}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No se encontraron resultados.</p>
        )}
      </div>
    </main>
  );
}