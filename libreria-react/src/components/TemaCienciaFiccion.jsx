// 📁 src/components/TemaCienciaFiccion.jsx
export default function TemaCienciaFiccion() {
  return (
    <main style={{ padding: '30px 20px' }}>
      <h2>Ciencia Ficción</h2>

      <div className="libro">
        <img src="/img/libros/451.jpg" alt="Fahrenheit 451" width="100" />
        <p><b>Fahrenheit 451</b> - Ray Bradbury</p>
        <p>En un futuro distópico, los bomberos queman libros para suprimir el pensamiento crítico.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/cronicas.jpg" alt="Crónicas marcianas" width="100" />
        <p><b>Crónicas marcianas</b> - Ray Bradbury</p>
        <p>Relatos que narran la colonización humana de Marte y sus consecuencias.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/contacto.jpg" alt="Contacto" width="100" />
        <p><b>Contacto</b> - Carl Sagan</p>
        <p>Una científica recibe señales de vida extraterrestre y participa en una misión histórica.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/soy_leyenda.jpg" alt="Soy leyenda" width="100" />
        <p><b>Soy leyenda</b> - Richard Matheson</p>
        <p>El último humano vivo intenta sobrevivir en un mundo dominado por criaturas mutantes.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/el_juego.jpg" alt="El juego de Ender" width="100" />
        <p><b>El juego de Ender</b> - Orson Scott Card</p>
        <p>Un niño prodigio es entrenado para liderar la defensa de la Tierra contra una amenaza alienígena.</p>
      </div>

      <div className="libro">
        <img src="/img/libros/tiempo.jpg" alt="La máquina del tiempo" width="100" />
        <p><b>La máquina del tiempo</b> - H. G. Wells</p>
        <p>Un científico viaja al futuro y descubre la evolución y decadencia de la humanidad.</p>
      </div>
    </main>
  );
}