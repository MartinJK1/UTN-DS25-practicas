export default function TemaFantasia() {
  return (
    <section className="container py-4">
      <h2 className="mb-4">Fantasía</h2>
      <div className="row g-4">
        {[
          { img: "dragonlance.jpg", titulo: "Crónicas de Dragonlance", autor: "Margaret Weis & Tracy Hickman", desc: "Un grupo de aventureros se enfrenta a dioses, dragones y profecías en un mundo fantástico." },
          { img: "trono.jpg", titulo: "Juego de tronos", autor: "George R. R. Martin", desc: "Intriga política, guerras y dragones en la lucha por el control de los Siete Reinos." },
          { img: "cancion.jpg", titulo: "Canción de sangre y oro", autor: "Jorge Molist", desc: "Reinos enfrentados, caballeros y traiciones en la Europa medieval." },
          { img: "narnia.jpg", titulo: "Las crónicas de Narnia", autor: "C. S. Lewis", desc: "Aventuras mágicas en un mundo donde los animales hablan y se libran grandes batallas." },
          { img: "bosque.jpg", titulo: "El bosque de los sueños", autor: "Robert Holdstock", desc: "Una mitología viva y cambiante surge en un bosque milenario lleno de secretos." },
          { img: "mapa.jpg", titulo: "El mapa del tiempo", autor: "Félix J. Palma", desc: "Un mundo de magia, rebelión y seres mitológicos donde nada es lo que parece." }
        ].map((libro, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={`/img/libros/${libro.img}`} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                <p className="card-text">{libro.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}