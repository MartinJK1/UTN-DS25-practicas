export default function TemaTecnologia() {
  return (
    <section className="container py-4">
      <h2 className="mb-4">Tecnología</h2>
      <div className="row g-4">
        {[
          { img: "stevejobs.jpg", titulo: "Steve Jobs", autor: "Walter Isaacson", desc: "Biografía del fundador de Apple, basada en más de 40 entrevistas." },
          { img: "inventores.jpg", titulo: "Los innovadores", autor: "Walter Isaacson", desc: "Historia de pioneros desde Ada Lovelace hasta Google." },
          { img: "elon.jpg", titulo: "Elon Musk", autor: "Ashlee Vance", desc: "Retrato del emprendedor detrás de SpaceX, Tesla y más." },
          { img: "google.jpg", titulo: "Cómo Google cambió el mundo", autor: "Steven Levy", desc: "Evolución del buscador que revolucionó Internet." },
          { img: "inteligencia.jpg", titulo: "Inteligencia Artificial", autor: "Kai-Fu Lee", desc: "Impacto de la IA en la economía y el trabajo." },
          { img: "datos.jpg", titulo: "Armas de destrucción matemática", autor: "Cathy O’Neil", desc: "Cómo los algoritmos refuerzan desigualdades." }
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