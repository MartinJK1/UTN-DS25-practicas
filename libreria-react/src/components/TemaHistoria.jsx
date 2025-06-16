export default function TemaHistoria() {
  return (
    <section style={{ padding: "30px" }}>
      <h2>Historia</h2>

      <div className="libro">
        <img src="/img/libros/caida.jpg" width="100" alt="La caída del Imperio Romano" />
        <p><b>La caída del Imperio Romano</b> – Peter Heather</p>
        <p>Una investigación detallada sobre las causas políticas y sociales que llevaron a la caída de Roma.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/revolucion.jpg" width="100" alt="La revolución francesa" />
        <p><b>La revolución francesa</b> – Eric J. Hobsbawm</p>
        <p>Un análisis de uno de los eventos más importantes de la historia moderna.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/nazismo.jpg" width="100" alt="Ascenso y caída del Tercer Reich" />
        <p><b>Ascenso y caída del Tercer Reich</b> – William L. Shirer</p>
        <p>Una crónica extensa del régimen nazi y su impacto en Europa.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/egipto.jpg" width="100" alt="Historia del Antiguo Egipto" />
        <p><b>Historia del Antiguo Egipto</b> – Nicolas Grimal</p>
        <p>Un estudio completo sobre la civilización egipcia desde sus orígenes hasta la conquista romana.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/mujeres.jpg" width="100" alt="Mujeres que hicieron historia" />
        <p><b>Mujeres que hicieron historia</b> – Rosa Montero</p>
        <p>Biografías de mujeres que transformaron el curso de la historia desde diversos ámbitos.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/sigloxx.jpg" width="100" alt="Historia del siglo XX" />
        <p><b>Historia del siglo XX</b> – Tony Judt</p>
        <p>Una mirada global sobre los principales eventos, guerras y cambios sociales del siglo pasado.</p>
      </div>
    </section>
  );
}