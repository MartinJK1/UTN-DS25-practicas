export default function Registro() {
  return (
    <main className="container py-4">
      <h2 className="text-center mb-4">Formulario de Registración</h2>

      <form className="bg-white p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" name="nombre" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input type="text" className="form-control" name="apellido" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento:</label>
          <input type="date" className="form-control" name="fecha_nac" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input type="password" className="form-control" name="clave" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Sexo:</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="sexo" value="Masculino" />
            <label className="form-check-label">Masculino</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="sexo" value="Femenino" />
            <label className="form-check-label">Femenino</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="sexo" value="Otro" />
            <label className="form-check-label">Otro</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Tema Favorito:</label>
          <select name="tema" className="form-select">
            <option value="scifi">Ciencia Ficción</option>
            <option value="historia">Historia</option>
            <option value="tecnologia">Tecnología</option>
            <option value="fantasia">Fantasía</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Registrarme</button>
      </form>
    </main>
  );
}