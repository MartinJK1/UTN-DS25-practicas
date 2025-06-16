export default function TemaHistoria() {
  return (
    <section className="container py-4">
      <h2 className="mb-4">Historia</h2>
      <div className="row g-4">
        {[
          { img: "caida.jpg", titulo: "La caída del Imperio Romano", autor: "Peter Heather", desc: "Causas políticas y sociales que llevaron a la caída de Roma." },
          { img: "revolucion.jpg", titulo: "La revolución francesa", autor: "Eric J. Hobsbawm", desc: "Uno de los eventos más importantes de la historia moderna." },
          { img: "nazismo.jpg", titulo: "Ascenso y caída del Tercer Reich", autor: "William L. Shirer", desc: "Crónica del régimen nazi y su impacto en Europa." },
          { img: "egipto.jpg", titulo: "Historia del Antiguo Egipto", autor: "Nicolas Grimal", desc: "Desde sus orígenes hasta la conquista romana." },
          { img: "mujeres.jpg", titulo: "Mujeres que hicieron historia", autor: "Rosa Montero", desc: "Biografías de mujeres que transformaron la historia." },
          { img: "sigloxx.jpg", titulo: "Historia del siglo XX", autor: "Tony Judt", desc: "Guerras, eventos y cambios sociales del siglo pasado." }
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