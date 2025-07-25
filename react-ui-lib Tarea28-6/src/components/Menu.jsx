import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Librería El Ateneo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tema/ciencia-ficcion">Ciencia Ficción</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tema/historia">Historia</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tema/tecnologia">Tecnología</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tema/fantasia">Fantasía</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/catalogo">Catálogo</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/agregar">Agregar libro</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registro">Registración</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}