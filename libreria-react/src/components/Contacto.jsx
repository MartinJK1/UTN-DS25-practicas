export default function Contacto() {
  return (
    <main>
      <h2>Datos de Contacto</h2>
      <p><strong>Dirección:</strong> Av. Santa Fe 1860, Buenos Aires, Argentina</p>
      <p><strong>Teléfono:</strong> (011) 4813-6052</p>
      <p><strong>Email:</strong> contacto@elateneo.com.ar</p>

      <h3>Formulario de Contacto</h3>
      <form action="#" method="post">
        <label>
          Nombre:<br />
          <input type="text" name="nombre" required />
        </label><br /><br />

        <label>
          Email:<br />
          <input type="email" name="email" required />
        </label><br /><br />

        <label>
          Asunto:<br />
          <input type="text" name="asunto" required />
        </label><br /><br />

        <label>
          Mensaje:<br />
          <textarea name="mensaje" rows="5" required></textarea>
        </label><br /><br />

        <input type="submit" value="Enviar mensaje" />
      </form>
    </main>
  );
}