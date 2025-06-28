
export default function Contacto() {
  return (
    
    <main className="container py-4">
      <h2 className="text-center mb-4">Datos de Contacto</h2>
      <p><strong>Dirección:</strong> Av. Santa Fe 1860, Buenos Aires, Argentina</p>
      <p><strong>Teléfono:</strong> (011) 4813-6052</p>
      <p><strong>Email:</strong> contacto@elateneo.com.ar</p>

      <h3 className="mt-4">Formulario de Contacto</h3>
      <form className="bg-white p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" name="nombre" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Asunto:</label>
          <input type="text" name="asunto" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje:</label>
          <textarea name="mensaje" rows="5" className="form-control" required></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100">Enviar mensaje</button>
      </form>
    </main>
    
  );
}