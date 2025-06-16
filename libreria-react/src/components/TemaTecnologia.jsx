export default function TemaTecnologia() {
  return (
    <section style={{ padding: "30px" }}>
      <h2>Tecnología</h2>

      <div className="libro">
        <img src="/img/libros/stevejobs.jpg" width="100" alt="Steve Jobs" />
        <p><b>Steve Jobs</b> – Walter Isaacson</p>
        <p>La biografía oficial del fundador de Apple, basada en más de 40 entrevistas.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/inventores.jpg" width="100" alt="Los innovadores" />
        <p><b>Los innovadores</b> – Walter Isaacson</p>
        <p>Una historia de los pioneros que crearon la revolución digital, desde Ada Lovelace a Google.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/elon.jpg" width="100" alt="Elon Musk" />
        <p><b>Elon Musk</b> – Ashlee Vance</p>
        <p>Un retrato del emprendedor detrás de SpaceX, Tesla y otras grandes apuestas tecnológicas.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/google.jpg" width="100" alt="Cómo Google cambió el mundo" />
        <p><b>Cómo Google cambió el mundo</b> – Steven Levy</p>
        <p>La evolución del buscador que revolucionó Internet y el acceso a la información.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/inteligencia.jpg" width="100" alt="Inteligencia Artificial" />
        <p><b>Inteligencia Artificial</b> – Kai-Fu Lee</p>
        <p>Un análisis sobre el impacto de la IA en la economía global y el futuro del trabajo.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/datos.jpg" width="100" alt="Armas de destrucción matemática" />
        <p><b>Armas de destrucción matemática</b> – Cathy O’Neil</p>
        <p>Cómo los algoritmos pueden reforzar la desigualdad y afectar nuestras vidas cotidianas.</p>
      </div>
    </section>
  );
}