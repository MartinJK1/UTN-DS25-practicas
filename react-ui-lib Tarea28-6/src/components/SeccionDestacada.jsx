export default function SeccionDestacada({ genero, titulo, autor, imagen }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={imagen} className="card-img-top" alt={`Portada ${genero}`} />
      <div className="card-body">
        <h5 className="card-title">{genero}</h5>
        <p className="card-text"><strong>Título:</strong> {titulo}</p>
        <p className="card-text"><strong>Autor:</strong> {autor}</p>
      </div>
    </div>
  );
}