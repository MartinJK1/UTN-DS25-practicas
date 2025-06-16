export default function TemaCienciaFiccion() {
  return (
    <main className="container my-4">
      <h2 className="mb-4">Ciencia Ficción</h2>
      <div className="row g-4">
        {[
          {
            titulo: "Fahrenheit 451",
            autor: "Ray Bradbury",
            imagen: "/img/libros/451.jpg",
            descripcion: "En un futuro distópico, los bomberos queman libros para suprimir el pensamiento crítico.",
          },
          {
            titulo: "Crónicas marcianas",
            autor: "Ray Bradbury",
            imagen: "/img/libros/cronicas.jpg",
            descripcion: "Relatos que narran la colonización humana de Marte y sus consecuencias.",
          },
          {
            titulo: "Contacto",
            autor: "Carl Sagan",
            imagen: "/img/libros/contacto.jpg",
            descripcion: "Una científica recibe señales de vida extraterrestre y participa en una misión histórica.",
          },
          {
            titulo: "Soy leyenda",
            autor: "Richard Matheson",
            imagen: "/img/libros/soy_leyenda.jpg",
            descripcion: "El último humano vivo intenta sobrevivir en un mundo dominado por criaturas mutantes.",
          },
          {
            titulo: "El juego de Ender",
            autor: "Orson Scott Card",
            imagen: "/img/libros/el_juego.jpg",
            descripcion: "Un niño prodigio es entrenado para liderar la defensa de la Tierra contra una amenaza alienígena.",
          },
          {
            titulo: "La máquina del tiempo",
            autor: "H. G. Wells",
            imagen: "/img/libros/tiempo.jpg",
            descripcion: "Un científico viaja al futuro y descubre la evolución y decadencia de la humanidad.",
          },
        ].map((libro, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <p className="card-subtitle mb-2 text-muted">{libro.autor}</p>
                <p className="card-text">{libro.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}