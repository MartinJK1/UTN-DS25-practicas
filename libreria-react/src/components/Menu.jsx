import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tema1">Ciencia Ficción</Link></li>
        <li><Link to="/tema2">Historia</Link></li>
        <li><Link to="/tema3">Tecnología</Link></li>
        <li><Link to="/tema4">Fantasía</Link></li>
        <li><Link to="/registro">Registración</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}