export default function Registro() {
  return (
    <main>
      <h2>Formulario de Registración</h2>

      <form action="#" method="post">
        <label>
          Nombre:<br />
          <input type="text" name="nombre" required />
        </label><br /><br />

        <label>
          Apellido:<br />
          <input type="text" name="apellido" required />
        </label><br /><br />

        <label>
          Fecha de Nacimiento:<br />
          <input type="date" name="fecha_nac" required />
        </label><br /><br />

        <label>
          Email:<br />
          <input type="email" name="email" required />
        </label><br /><br />

        <label>
          Contraseña:<br />
          <input type="password" name="clave" required />
        </label><br /><br />

        <label>
          Sexo:<br />
          <input type="radio" name="sexo" value="Masculino" /> Masculino{" "}
          <input type="radio" name="sexo" value="Femenino" /> Femenino{" "}
          <input type="radio" name="sexo" value="Otro" /> Otro
        </label><br /><br />

        <label>
          Tema Favorito:<br />
          <select name="tema">
            <option value="scifi">Ciencia Ficción</option>
            <option value="historia">Historia</option>
            <option value="tecnologia">Tecnología</option>
            <option value="fantasia">Fantasía</option>
          </select>
        </label><br /><br />

        <input type="submit" value="Registrarme" />
      </form>
    </main>
  );
}