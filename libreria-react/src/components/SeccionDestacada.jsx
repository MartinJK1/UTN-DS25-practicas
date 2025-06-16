

export default function SeccionDestacada({ genero, titulo, autor, imagen }) {
  return (
    <section className="tema">
      <h2>{genero}</h2>
      <img src={imagen} alt={`Portada ${genero}`} width="120" />
      <p><strong>Título:</strong> {titulo}</p>
      <p><strong>Autor:</strong> {autor}</p>
    </section>
  );
}